var app = angular.module('myApp', []);
 
app.controller('myController', function($scope, $http) {
  var http = $http({
    method: 'GET',
    url: 'http://api.postmon.com.br/v1/cep/06361-230'
  });
 
  http.success(function(data) {
    $scope.dados = data;
  });
 
  http.error(function() {
    console.log('error');
  });
});