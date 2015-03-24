angular.module('myApp', ['firebase', 'ui.bootstrap', 'ui.grid', 'ui.select', 'ui.grid.selection', 'ngTouch'])
.config(function(uiSelectConfig) {
  uiSelectConfig.theme = 'bootstrap';
})
.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      items.forEach(function(item) {
        var itemMatches = false;

        var keys = Object.keys(props);
        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
})
.controller('myController', function($scope, $http, $firebaseArray) {
  $scope.availCap = ['Plastic', 'Metal', 'Ceramic'];

  $scope.newSupplier = {
    name: undefined,
    location: undefined,
    industry: undefined,
    capabilities: undefined,
    getCapabilities: function (){
      return this.capabilities[0] + ' ' + this.capabilities[1];
    }
  };
  //$scope.newSuppler.capabiltiies Us an object to store each data point and also find a way to display it better
  $scope.alerts = [];

  var ref = new Firebase('https://brilliant-heat-5688.firebaseio.com/');
  $scope.suppliers = $firebaseArray(ref);

  //Configure Grid
  $scope.gridOptions = {
    data: $scope.suppliers,
    enableSorting: true,
    enableFiltering: true,
    enableRowSelection: true,
    enableRowHeaderSelection: false,
    multiSelect: false,
    enableHorizontalScrollbar: 0,
    enableVerticalScrollbar: 0,
    columnDefs: [
      { name: 'Name', field: 'name'},
      { name: 'Location', field: 'location'},
      { name: 'Industry', field: 'industry'},
      { name: 'Capabilities', field: 'capabilities'}
    ],
    onRegisterApi: function (gridApi){
      $scope.gridApi = gridApi;
    }
  };

  $scope.add = function () {
    if ($scope.newSupplier.name &&
      $scope.newSupplier.location &&
      $scope.newSupplier.industry &&
      $scope.newSupplier.capabilities){
      $scope.suppliers.$add({
        name:$scope.newSupplier.name,
        location:$scope.newSupplier.location,
        industry:$scope.newSupplier.industry,
        capabilities:$scope.newSupplier.getCapabilities()
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

  $scope.addCapability = function (string) {
    console.log('This worked');
    console.log(string);
    var output = string.copy();
    return output;
  };
});