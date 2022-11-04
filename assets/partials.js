import Handlebars from 'handlebars/runtime.js';
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['analytics/widget'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<script>\n// TODO: adjust outbound apply now utm parameters based on parent window data\n</script>\n\n<!-- Google tag (gtag.js) -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-VV1YTRRM50\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-VV1YTRRM50');\n</script>";
},"useData":true});
Handlebars.partials['style/widget'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "#powered-by { display: none; }\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<link rel=\"stylesheet\" type=\"text/css\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"url_params") : depth0)) != null ? lookupProperty(stack1,"custom_stylesheet_url") : stack1), depth0))
    + "\">\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"https://www.tampadevs.com/_assets/img/favicon/apple-touch-icon.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"https://www.tampadevs.com/_assets/img/favicon/favicon-32x32.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"https://www.tampadevs.com/_assets/img/favicon/favicon-16x16.png\">\n<link rel=\"mask-icon\" href=\"https://www.tampadevs.com/_assets/img/favicon/safari-pinned-tab.svg\" color=\"#483ba4\">\n<link rel=\"shortcut icon\" href=\"https://www.tampadevs.com/_assets/img/favicon/favicon.ico\">\n\n<link rel=\"stylesheet\" href=\"//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic\">\n<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css\">\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css\" rel=\"stylesheet\"/>\n\n<style>\n#powered-by {\n	font-size: 0.75em;\n	text-align: center;\n}\n\n#no-positions-message, #error-message-head, #error-message-description {\n	text-align: center;\n}\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"url_params") : depth0)) != null ? lookupProperty(stack1,"hide_footer") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "")
    + "</style>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"url_params") : depth0)) != null ? lookupProperty(stack1,"custom_stylesheet_url") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "");
},"useData":true});
