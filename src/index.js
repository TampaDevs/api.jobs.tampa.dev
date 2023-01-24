import Handlebars from 'handlebars/runtime.js';

import '../assets/pages.js';
import '../assets/partials.js';

import {hbsAsyncRender, registerAsyncHelper} from "hbs-async-render";

const jobBoardFeed = 'https://jobs.tampa.dev/jobs.json';

registerAsyncHelper(Handlebars,'capitalize', function (options, context) {
    return new Promise((resolve, reject) => {
        resolve(options.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()));
    });
});

registerAsyncHelper(Handlebars,'add_utm', function (options, context) {
    return new Promise((resolve, reject) => {
        resolve(options + "?utm_source=job_board_widget_v1&utm_medium=organic&utm_campaign=tdjobs_external_embed");
    });
});

registerAsyncHelper(Handlebars,'truncate', function (options, context) {
    return new Promise((resolve, reject) => {
        resolve(options.replace(/^(.{32}[^\s]*).*/, "$1") + "...");
    });
});

registerAsyncHelper(Handlebars,'title_fmt', function (options, context) {
    return new Promise((resolve, reject) => {
        capitalized = options.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        resolve(capitalized.replace(/^(.{32}[^\s]*).*/, "$1") + "...");
    });
});

async function parseQueryParams(url){
  const params = {};
  const queryString = url.search.slice(1).split('&')
  queryString.forEach(item => {
    const kv = item.split('=')
    if (kv[0]) params[kv[0]] = decodeURIComponent(kv[1]) || true
  });
  return params;
}

async function gatherResponse(response) {
  const { headers } = response;
  const contentType = headers.get('content-type') || '';
  if (contentType.includes('application/json') || contentType.includes('application/vnd.api+json')) {
    return await response.json();
  }
  return response.text();
}

async function filterPromotion(jobs, promo_types){
    let promos = promo_types.split(',');
    return jobs.filter(job => promos.includes(job.attributes.type));
}

async function filterArrangement(jobs, arrangement_types){
    let arrangements = arrangement_types.split(',');
    return jobs.filter(job => arrangements.includes(job.attributes.arrangement));
}

async function filterRoleLocation(jobs, location_types){
    let locations = location_types.split(',');
    return jobs.filter(job => locations.includes(job.attributes.location));
}

async function filterCompanyLocation(jobs, location_types){
    let locations = location_types.toLowerCase().split(',');
    let filtered_ids = [];
    let filtered = [];

    for (const j of jobs){
        for (const l of locations) {
            if (j.attributes.company.location.toLowerCase().includes(l) && !filtered_ids.includes(j.id)){
              filtered.push(j); 
              filtered_ids.push(j.id)
            }
        }
    }

    return filtered;
}

async function filterCompany(jobs, company_filter){
    let companies = company_filter.toLowerCase().split(',').map(x => x.replace(/\+/g, ' '));
    return jobs.filter(job => companies.includes(job.attributes.company.name.toLowerCase()));
}

async function filterTitle(jobs, title_terms){
    let terms = title_terms.toLowerCase().split(',');

    let filtered_ids = [];
    let filtered = [];

    for (const j of jobs){
        for (const t of terms){
            if (j.attributes.title.toLowerCase().includes(t) && !filtered_ids.includes(j.id)){
              filtered.push(j); 
              filtered_ids.push(j.id)
            }
        }
    }

    return filtered;
}

async function sortJobs(jobs, max){
    let ranks = ["featured", "promoted", "basic"];
    let ranked_sort = []
    let rank_map = {};

    for (const j of jobs)
        j.attributes.type in rank_map ? rank_map[j.attributes.type].push(j) : rank_map[j.attributes.type] = [j];

    for (const r of ranks)
      if (r in rank_map)
        ranked_sort = ranked_sort.concat(rank_map[r]);

    if(max < 1)
        return ranked_sort;

    return ranked_sort.slice(0, max);
}


async function filterJobs(params, board) {
  let jobs = board.data;

  if (params.promo_filter)
    jobs = await filterPromotion(jobs, params.promo_filter);

  if (params.arrangement_filter)
    jobs = await filterArrangement(jobs, params.arrangement_filter);

  if (params.location_filter)
    jobs = await filterRoleLocation(jobs, params.location_filter);

  if (params.company_filter)
    jobs = await filterCompany(jobs, params.company_filter);

  if (params.company_location)
    jobs = await filterCompanyLocation(jobs, params.company_location);

  if (params.title_contains)
    jobs = await filterTitle(jobs, params.title_contains);

  if (params.limit)
    jobs = await sortJobs(jobs, params.limit);
  else
    jobs = await sortJobs(jobs, -1);

  return jobs;
}

async function errorResponse(status, message){
  const resMeta = {
    headers: {
      'content-type': 'text/html',
    },
    status: status
  };
  return new Response(await hbsAsyncRender(Handlebars, 'error', {error_message:message, error_status: status}), resMeta);
}

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html',
    },
  };

  const url = new URL(request.url);

  if(url.pathname !== '/v1/widget')
    return errorResponse(404, "Not found");

  const params = await parseQueryParams(url);
  
  const response = await fetch(jobBoardFeed, init);
  const boardData = await gatherResponse(response);

  if (params.json){
      const jsonCorsHeaders = {
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
        },
      };
      return new Response(await JSON.stringify(await filterJobs(params, boardData)), jsonCorsHeaders);
  } else {
      return new Response(await hbsAsyncRender(Handlebars, 'widget', {jobs: await filterJobs(params, boardData), url_params: params}), init);
  }
}

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(request).catch(
      (err) => errorResponse(500, "We had a problem.")
    ));
});

export default {
  async fetch(request, env) {
    return await handleRequest(request).catch(
      (err) => errorResponse(500, "We had a problem.")
    )
  }
}
