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

  return "<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"https://www.tampadevs.com/_assets/img/favicon/apple-touch-icon.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"https://www.tampadevs.com/_assets/img/favicon/favicon-32x32.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"https://www.tampadevs.com/_assets/img/favicon/favicon-16x16.png\">\n<link rel=\"mask-icon\" href=\"https://www.tampadevs.com/_assets/img/favicon/safari-pinned-tab.svg\" color=\"#483ba4\">\n<link rel=\"shortcut icon\" href=\"https://www.tampadevs.com/_assets/img/favicon/favicon.ico\">\n\n<link rel=\"stylesheet\" href=\"//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic\">\n<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css\">\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css\" rel=\"stylesheet\"/>\n<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n\n<style>\n\n.container {\n    max-width: 100%;\n}\n\n.container.jobs-widget {\n    background: #fff;\n    padding: .5rem .5rem .5rem .5rem;\n    overflow: hidden;\n    border-radius: 0.5rem;\n    width: 100%;\n    height: 100%;\n}\n\nbody {\n    background: #f8f8f8;\n}\n\n.jobs-widget > .row {\n    overflow-x: auto;\n    flex-wrap: nowrap;\n}\n\n.job-card {\n    height: 330px;\n    position: relative;\n    background: #f4f4f4;\n    border: none;\n	border-radius: .5rem;\n    font-family: montserrat, sans-serif;\n    font-size: 1.5rem;\n	margin: 0 20px;\n}\n\n.job-card > div {\n    max-width: 100%;\n}\n\n.row.company {\n    text-transform: uppercase;\n    margin: 3rem 0 1rem 2rem;\n}\n\n.row.title {\n    font-weight: 600;\n    font-size: 2rem;\n	margin: 0rem 0 1rem 2rem;\n    width: 90%;\n    overflow-wrap: break-word;\n}\n\n.row.info {\n    margin: 0 0 0 2rem;\n    gap: 2rem;\n    max-width: 90%;\n}\n\n.info-item {\n    background: #fff;\n    width: fit-content;\n    padding: 0.5rem 2rem;\n    text-transform: capitalize;\n    border-radius: 0.5rem;\n}\n\n\n.row.link {\n    background: #93afd4;\n    padding: 1rem;\n    text-align: center;\n    text-transform: uppercase;\n    border-radius: .5rem;\n	bottom: 20px;\n	position: absolute;\n    width: 60%;\n    margin: 0 15%;\n    justify-content: center;\n}\n\n.row.link a {\n    color: #fff;\n    text-decoration: none;\n    font-weight: 600;\n    font-size: 1.8rem;\n}	\n#powered-by {\n	font-size: 0.75em;\n	text-align: center;\n	margin-top: 1rem;\n}\n\n#no-positions-message, #error-message-head, #error-message-description {\n	text-align: center;\n}\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"url_params") : depth0)) != null ? lookupProperty(stack1,"hide_footer") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":109,"column":0},"end":{"line":111,"column":7}}})) != null ? stack1 : "")
    + "</style>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"url_params") : depth0)) != null ? lookupProperty(stack1,"custom_stylesheet_url") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":114,"column":0},"end":{"line":116,"column":7}}})) != null ? stack1 : "");
},"useData":true});
