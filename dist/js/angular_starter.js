/*! angular_starter - v0.0.1 - 2015-04-03
 * Copyright (c) 2015 Ryan Parsley;
 * Licensed 
 */
angular.module('app', [
  'page-header',
  'ui.router',
  'templates.app'
])
// This next line makes ui-router work when ui-view is nested in other modules.
// It seems to be needed due to a bug in ui-router. Perhaps we can remove it later.
// you notice it working when you hit refresh. Code seems to work without it so long
// as you click a link and fire a state explicitly.
// https://github.com/angular-ui/ui-router/issues/679
// http://plnkr.co/edit/a2lD1n?p=preview
//
.run(function($state){})

.controller('AppCtrl', function(){})

.factory('categoryData', function() {
  'use strict';
  return { message: 'default value' };
})

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  'use strict';
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/index');
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
        url: '/index',
        templateUrl: 'state/state1.tpl.html',
        controller: 'stateCtrl'
    });
  // use the HTML5 History API
  $locationProvider.html5Mode(true);
});

angular.module('page-header', [])
.controller('PageHeaderCtrl', [
  '$scope',
  '$http',

  function ($scope, $http) {
    'use strict';
    $http.get('/data/nav-data.json')
    .success(function (data) {
      $scope.links = data;
    })
    .error(function () {
      $scope.links = 'empty';
    });
  }
]);

angular.module('preview', [])
.controller('previewCtrl',
  ['$scope',
   'categoryData',

   function($scope, categoryData) {
      'use strict';
      $scope.categoryData = categoryData;
    }]
  );

angular.module('state', [])
.controller('stateCtrl',
  ['$scope', function($scope) {
    'use strict';

    $scope.placeholder = { 'val': undefined };

  }]);

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

angular.module('templates.common', []);

