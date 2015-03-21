angular.module('myApp', ['firebase', 'ui.bootstrap', 'ui.grid'])
.controller('myController', function($scope, $http, $firebaseArray) {
  $scope.newSupplier = {};
  $scope.alerts = [];

  var ref = new Firebase('https://brilliant-heat-5688.firebaseio.com/');
  $scope.suppliers = $firebaseArray(ref);

  //Configure Grid
  $scope.gridOptions = {
    data: $scope.suppliers,
    enableSorting: true,
    enableHorizontalScrollbar: 0,
    enableVerticalScrollbar: 0,
    columnDefs: [
      { name: 'Name', field: 'name'},
      { name: 'Location', field: 'location'},
      { name: 'Industry', field: 'industry'}
    ],
    onRegisterApi: function (gridApi){
      $scope.gridApi = gridApi;
    }
  };

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

  $scope.removeLast = function () {
    $scope.suppliers.$remove(6);
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