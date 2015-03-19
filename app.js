angular.module('myApp', ['firebase', 'ui.bootstrap'])
.controller('myController', function($scope, $http, $firebaseArray) {
  $scope.newSupplier = {};
  $scope.alerts = [];

  var ref = new Firebase('https://brilliant-heat-5688.firebaseio.com/');
  $scope.suppliers = $firebaseArray(ref);

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
      $scope.addAlert();
    }
  };

  $scope.addAlert = function (){
    $scope.alerts.push({
      type:'danger',
      msg:'One of the fields below is empty!'
    });
  };
  $scope.closeAlert = function (index){
    $scope.alerts.splice(index, 1);
  };
});