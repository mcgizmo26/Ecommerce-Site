angular.module('ecommerseApp')
  .service('homeSrvc', function($http){
    this.getAllProducts = function(){
      return $http({
        method: 'GET',
        url: '/products'
      })
      .then(function(response){
        return response.data;
      })
    }
  })
