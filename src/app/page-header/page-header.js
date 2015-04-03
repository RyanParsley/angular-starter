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
