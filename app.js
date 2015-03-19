angular.module('myApp', ['firebase'])
.controller('myController', function($scope, $http, $firebaseArray) {
  var ref = new Firebase('https://brilliant-heat-5688.firebaseio.com/');

  $scope.suppliers = $firebaseArray(ref);
  $scope.newSupplier = {};

  $scope.add = function () {
    if ($scope.newSupplier.name &&
      $scope.newSupplier.location &&
      $scope.newSupplier.industry){
      $scope.suppliers.$add({
        name:$scope.newSupplier.name,
        location:$scope.newSupplier.location,
        industry:$scope.newSupplier.industry
      });
    }
    else {
      console.log("No Data");
    }
  };
});