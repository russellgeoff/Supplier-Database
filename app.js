angular.module('myApp', ['firebase'])
.controller('myController', function($scope, $http, $firebaseArray) {
  var ref = new Firebase('https://brilliant-heat-5688.firebaseio.com/');

  $scope.newSupplier = {
    name:"Default Name",
    location:"Default Location",
    industry:"Default Industry"
  };

  $scope.suppliers =[
  {
    name:'Default Supplier Name 1',
    location:'Default Supplier Location 1',
    industry:'Default Industry 1'
  },
  {
    name:'Default Supplier Name 2',
    location:'Default Supplier Location 2',
    industry:'Default Industry 2'
  }];

  $scope.suppliers = $firebaseArray(ref);

  $scope.add = function () {
    var name = $scope.newSupplier.name;
    var location = $scope.newSupplier.location;
    var industry = $scope.newSupplier.industry;
    console.log($scope.suppliers);
    $scope.suppliers.$add({
      name:name,
      location:location,
      industry:industry
    });
  };
});