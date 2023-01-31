# Tampa Devs Job Board Widget

[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/TampaDevs/api.jobs.tampa.dev/badge)](https://api.securityscorecards.dev/projects/github.com/TampaDevs/api.jobs.tampa.dev)

Powered by [Cloudflare Workers](https://developers.cloudflare.com/workers/) and [Job Boardly](https://jobs.tampa.dev/).

Check it out at [api.jobs.tampa.dev](https://api.jobs.tampa.dev/v1/widget).

<img width="823" alt="Screenshot 2023-01-31 at 16 36 52" src="https://user-images.githubusercontent.com/7227500/215888956-e5fc528d-2f03-4fe7-aad5-d1ab7f271014.png">

Or embed on your site:

```html
<iframe style="width: 100%; overflow: hidden;" src="https://api.jobs.tampa.dev/v1/widget"></iframe>
```

Want JSON results? Read on.

## Configuration Parameters

`/v1/widget` accepts the following query parameters:

- `arrangement_filter`: any combination of `fulltime`, `parttime`, `contract`, `temporary`, `volunteer`, `internship`.

- `location_filter`: a list of substrings to search for in job locations (e.g. `tampa,anywhere`).

- `company_location`: a list of substrings to search for in company locations (e.g. `tampa,anywhere`).

- `company_filter`: any combination of company names (e.g. `brooksource,reliaquest`).

- `title_contains`: a list of substrings to search for in job titles (e.g. `react,security,devops`).

- `promo_filter`: list of promoted role types to include in results. One of `featured`, `promoted`, `basic`.

- `limit`: a numeric maxumum for the number of results to return.

- `json`: return results in JSON format, `true` or `false`.

- `hide_footer`: hide the widget footer.

- `custom_stylesheet_url`: apply your own custom stylesheet to the embedded widget from a provided URL.

Example: 

The URL below will return job listings that match the following conditions:

- where the job title contains "security", "engineer", or "software",
- fulltime positions only,
- output in JSON,
- maximum of 5 results.

https://api.jobs.tampa.dev/v1/widget?title_contains=security,engineer,software&arrangement_filter=fulltime&limit=5

## Development 

Make sure you have the latest version of Cloudflare's [wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) tool. 

Once `wrangler` and the project dependencies are installed, you spawn a local instance of the API server from the root of the repository:

```bash
wrangler dev -l
```

## Deployment & Testing

Your contributions should build locally before submission. 

Two pre-production environments exist for testing and development purposes. Changes must be staged in these branches for testing & acceptance prior to being merged into master and deployed.

- **staging** branch: https://staging.api.jobs.tampa.dev/
- **test** branch: https://test.api.jobs.tampa.dev/

When PRs are opened, a test workflow runs to ensure the project builds. However, the result is not deployed.
