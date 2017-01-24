angular.module('ecommerseApp')
  .controller('laptopsCtrl', function($scope, laptopsSrvc){
    $scope.getAllProducts = function(){
      laptopsSrvc.getAllProducts()
        .then(function(response){
          $scope.products = response;
        })
    }
    $scope.getAllProducts();
  })
