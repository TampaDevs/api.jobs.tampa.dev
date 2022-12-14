import Handlebars from 'handlebars/runtime.js';
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['error'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<html>\n<head>\n<meta charset=\"utf-8\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"analytics/widget"),depth0,{"name":"analytics/widget","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"style/widget"),depth0,{"name":"style/widget","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</head>\n<body>\n<h2 id=\"error-message-head\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"error_status") : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"error_message") : depth0), depth0))
    + "</h2>\n\n<h5 id=\"error-message-description\">Need help? Check out our <a href=\"https://github.com/TampaDevs/api.jobs.tampa.dev\">documentation.</a></h5>\n\n<p id=\"powered-by\"><a href=\"https://www.tampadevs.com/\">Tampa Devs</a> Jobs Widget - Powered by <a href=\"https://github.com/TampaDevs/api.jobs.tampa.dev\">Cloudflare</a> & <a href=\"https://jobs.tampa.dev/\">Job Boardly</a></p>\n</body>\n</html>";
},"usePartial":true,"useData":true});
templates['widget'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <table>\n      <thead>\n          <tr>\n            <th id=\"table-header-title\">Title</th>\n            <th id=\"table-header-company\">Company</th>\n            <th id=\"table-header-arrangement\">Arrangement</th>\n            <th id=\"table-header-location\">Location</th>\n            <th id=\"table-header-link\">Link</th>\n          </tr>\n      </thead>\n      <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"jobs") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":29,"column":17}}})) != null ? stack1 : "")
    + "      </tbody>\n  </table>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <tr class=\"type-"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"type") : stack1), depth0))
    + "\">\n            <td class=\"table-entry-title\">"
    + alias2((lookupProperty(helpers,"capitalize")||(depth0 && lookupProperty(depth0,"capitalize"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"capitalize","hash":{},"data":data,"loc":{"start":{"line":23,"column":42},"end":{"line":23,"column":78}}}))
    + "</td>\n            <td class=\"table-entry-company\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"company") : stack1)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</td>\n            <td class=\"table-entry-arrangement\">"
    + alias2((lookupProperty(helpers,"capitalize")||(depth0 && lookupProperty(depth0,"capitalize"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"arrangement") : stack1),{"name":"capitalize","hash":{},"data":data,"loc":{"start":{"line":25,"column":48},"end":{"line":25,"column":90}}}))
    + "</td>\n            <td>"
    + alias2((lookupProperty(helpers,"capitalize")||(depth0 && lookupProperty(depth0,"capitalize"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"location") : stack1),{"name":"capitalize","hash":{},"data":data,"loc":{"start":{"line":26,"column":16},"end":{"line":26,"column":55}}}))
    + "</td>\n            <td class=\"table-entry-link\"><a href=\""
    + alias2((lookupProperty(helpers,"add_utm")||(depth0 && lookupProperty(depth0,"add_utm"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"links") : depth0)) != null ? lookupProperty(stack1,"self") : stack1),{"name":"add_utm","hash":{},"data":data,"loc":{"start":{"line":27,"column":50},"end":{"line":27,"column":77}}}))
    + "\">Apply Now</a></td>\n          </tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <h4 id=\"no-positions-message\">No positions available.</h4>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<html>\n<head>\n  <meta charset=\"utf-8\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"analytics/widget"),depth0,{"name":"analytics/widget","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"style/widget"),depth0,{"name":"style/widget","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</head>\n<body>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"jobs") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":34,"column":7}}})) != null ? stack1 : "")
    + "  <p id=\"powered-by\"><a href=\"https://www.tampadevs.com/\">Tampa Devs</a> Jobs Widget - Powered by <a href=\"https://github.com/TampaDevs/api.jobs.tampa.dev\">Cloudflare</a> & <a href=\"https://jobs.tampa.dev/\">Job Boardly</a></p>\n</body>\n</html>";
},"usePartial":true,"useData":true});
