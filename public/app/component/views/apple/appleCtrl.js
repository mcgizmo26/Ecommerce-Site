angular.module('ecommerseApp')
  .controller('appleCtrl', function($scope, appleSrvc){
    $scope.getAllProducts = function(){
      appleSrvc.getAllProducts()
        .then(function(response){
          $scope.products = response;
        })
    }
    $scope.getAllProducts();
  })
