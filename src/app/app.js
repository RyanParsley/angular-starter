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
