angular.module('ecommerseApp')
  .controller('playstationCtrl', function($scope, playstationSrvc){
    $scope.getAllProducts = function(){
      playstationSrvc.getAllProducts()
        .then(function(response){
          $scope.products = response;
        })
    }
    $scope.getAllProducts();
  })
