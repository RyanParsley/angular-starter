angular.module('templates.app', ['page-header/page-header.tpl.html', 'preview/preview.tpl.html', 'state/state1.tpl.html', 'state/state2.tpl.html']);

angular.module("page-header/page-header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("page-header/page-header.tpl.html",
    "<div class=\"navbar\" ng-controller=\"PageHeaderCtrl\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <a class=\"logo\" ng-click=\"home()\">\n" +
    "      <img src=\"http://placehold.it/150x55\">\n" +
    "    </a>\n" +
    "    <ul class=\"nav\">\n" +
    "      <li ng-repeat=\"link in links\">\n" +
    "        <a href=\"{{ link.src }}\">{{ link.text }}</a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("preview/preview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("preview/preview.tpl.html",
    "<div class=\"preview\">\n" +
    "  <div class=\"preview-content\">Put preview stuff here</div>\n" +
    "  <div ng-show=\"gallery\" class=\"preview-gallery\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("state/state1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("state/state1.tpl.html",
    "<h2>State 1</h2>\n" +
    "");
}]);

angular.module("state/state2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("state/state2.tpl.html",
    "<h2>State 2</h2>\n" +
    "");
}]);
