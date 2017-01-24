angular.module('ecommerseApp')
  .controller('homeCtrl', function($scope, homeSrvc){
    $scope.getAllProducts = function(){
      homeSrvc.getAllProducts()
        .then(function(response){
          $scope.products = response;
        })
    }
    $scope.getAllProducts();
  })
