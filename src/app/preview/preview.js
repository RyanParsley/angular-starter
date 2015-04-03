angular.module('preview', [])
.controller('previewCtrl',
  ['$scope',
   'categoryData',

   function($scope, categoryData) {
      'use strict';
      $scope.categoryData = categoryData;
    }]
  );
