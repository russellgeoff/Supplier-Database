angular.module('myApp', ['firebase'])
.controller('myController', function($scope, $http, $firebaseArray) {
  var ref = new Firebase('https://brilliant-heat-5688.firebaseio.com/');

  $scope.user = {
    name: 'Supplier'
  };

  $scope.newSupplier = {
    name:"Default Name",
    location:"Default Location",
    industry:"Default Industry"
  };

  $scope.suppliers =[
  {
    name:"test",
    location:"places"
  },
  {
    name:"test2",
    location:"places3"
  }];

  $scope.suppliers = $firebaseArray(ref);

  // $http.get('suppliers.json')
  // .success(function (response) {
  //   console.log($scope.suppliers);
  //   $scope.suppliers = response;
  // })
  // .error(function(err) {
  //   alert(err);
  // });

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

  $scope.save = function () {
    $http.post('suppliers.json', $scope.suppliers)
    .success(function (response) {
      alert('Save successful');
    })
    .error(function(err){
      alert(err);
    });
  };
});