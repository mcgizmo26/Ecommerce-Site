angular.module('ecommerseApp')
  .service('playstationSrvc', function($http){
    this.getAllProducts = function(){
      return $http({
        method: 'GET',
        url: '/products'
      })
      .then(function(response){
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].type !== 'playstation') {
            response.data.splice(i, 1);
            i--;
          }
        }
        return response.data;
      })
    }
  })
