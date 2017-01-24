angular.module('ecommerseApp')
  .controller('xboxCtrl', function($scope, xboxSrvc){
    $scope.getAllProducts = function(){
      xboxSrvc.getAllProducts()
        .then(function(response){
          $scope.products = response;
        })
    }
    $scope.getAllProducts();
  })
