angular.module('ecommerseApp')
  .service('laptopsSrvc', function($http){
    this.getAllProducts = function(){
      return $http({
        method: 'GET',
        url: '/products'
      })
      .then(function(response){
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].type !== 'laptops') {
            response.data.splice(i, 1);
            i--;
          }
        }
        return response.data;
      })
    }
  })
