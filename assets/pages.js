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

  return "\n<div class=\"container jobs-widget\">\n  <div class=\"row align-items-center gap-5\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"jobs") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":4},"end":{"line":51,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"col-4 job-card type-"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"type") : stack1), depth0))
    + "\">\n        <div class=\"row company\">\n          "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"company") : stack1)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\n        </div>\n        <div class=\"row title\">\n          "
    + alias2((lookupProperty(helpers,"title_fmt")||(depth0 && lookupProperty(depth0,"title_fmt"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"title_fmt","hash":{},"data":data,"loc":{"start":{"line":41,"column":10},"end":{"line":41,"column":46}}}))
    + "\n        </div>\n        <div class=\"row info\">\n          <div class=\"info-item\"> "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"arrangement") : stack1), depth0))
    + "</div>\n          <div class=\"info-item\"> "
    + alias2((lookupProperty(helpers,"capitalize")||(depth0 && lookupProperty(depth0,"capitalize"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"location") : stack1),{"name":"capitalize","hash":{},"data":data,"loc":{"start":{"line":45,"column":34},"end":{"line":45,"column":73}}}))
    + "</div>\n        </div>\n        <div class=\"row link\">\n          <a href=\""
    + alias2((lookupProperty(helpers,"add_utm")||(depth0 && lookupProperty(depth0,"add_utm"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"links") : depth0)) != null ? lookupProperty(stack1,"self") : stack1),{"name":"add_utm","hash":{},"data":data,"loc":{"start":{"line":48,"column":19},"end":{"line":48,"column":46}}}))
    + "\">Apply Now</a>\n        </div>\n      </div>\n";
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
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"jobs") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":9,"column":0},"end":{"line":56,"column":7}}})) != null ? stack1 : "")
    + "  <p id=\"powered-by\"><a href=\"https://www.tampadevs.com/\">Tampa Devs</a> Jobs Widget - Powered by <a href=\"https://github.com/TampaDevs/api.jobs.tampa.dev\">Cloudflare</a> & <a href=\"https://jobs.tampa.dev/\">Job Boardly</a></p>\n\n</div>\n\n\n</body>\n</html>\n";
},"usePartial":true,"useData":true});
