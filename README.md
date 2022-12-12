# Tampa Devs Job Board Widget

Powered by [Cloudflare Workers](https://developers.cloudflare.com/workers/) and [Job Boardly](https://jobs.tampa.dev/).

## Parameters

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

- posted by either Brooksource or Reliaquest,
- where the job title contains "security" or "engineer",
- fulltime positions only,
- output in JSON,
- maximum of 5 results.

https://api.jobs.tampa.dev/v1/widget?company_filter=brooksource,reliaquest&title_matches=security,engineer&arrangement_filter=fulltime&limit=5