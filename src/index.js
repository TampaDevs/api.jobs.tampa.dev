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
    return JSON.stringify(await response.json());
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

async function filterCompany(jobs, company_filter){
    let companies = company_filter.toLowerCase().split(',');
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
              filtered_ids.push(j.attributes.id)
            }
        }
    }

    return filtered;
}

async function sortJobs(jobs, max){
    let ranks = ["featured", "promoted", "basic"];
    let ranked_sort = []

    for (const r of ranks){
        for (const j of jobs){
            if (j.attributes.type.includes(r)) {
              ranked_sort.push(j); 
            }
        }
    }

    if(max < 1)
        return ranked_sort;

    return ranked_sort.slice(0, max);
}


async function renderBoard(params, board) {
  let jobs = board.data;

  if (params.promo_filter)
    jobs = await filterPromotion(jobs, params.promo_filter);

  if (params.arrangement_filter)
    jobs = await filterArrangement(jobs, params.arrangement_filter);

  if (params.company_filter)
    jobs = await filterCompany(jobs, params.company_filter);

  if (params.title_contains)
    jobs = await filterTitle(jobs, params.title_contains);

  if (params.limit)
    jobs = await sortJobs(jobs, params.limit);
  else
    jobs = await sortJobs(jobs, -1);

  if (params.json)
    return JSON.stringify(jobs);
  else
    return await hbsAsyncRender(Handlebars, 'widget', {jobs: jobs, url_params: params});
}

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html',
    },
  };

  const url = new URL(request.url);

  if(url.pathname !== '/v1/widget')
    return new Response("Not found. Visit https://github.com/TampaDevs/api.jobs.tampa.devs for documentation.", { status: 404 });

  const params = await parseQueryParams(url);
  
  const response = await fetch(jobBoardFeed, init);
  const boardData = await gatherResponse(response);

  return new Response(await renderBoard(params, JSON.parse(boardData)), init);
}

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(request).catch(
      (err) => new Response("Internal error. Visit https://github.com/TampaDevs/api.jobs.tampa.devs for documentation.", { status: 500 })
    ));
});

export default {
  async fetch(request, env) {
    return await handleRequest(request).catch(
      (err) => new Response("Internal error. Visit https://github.com/TampaDevs/api.jobs.tampa.devs for documentation.", { status: 500 })
    )
  }
}
