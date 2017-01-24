angular.module('ecommerseApp')
  .service('xboxSrvc', function($http){
    this.getAllProducts = function(){
      return $http({
        method: 'GET',
        url: '/products'
      })
      .then(function(response){
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].type !== 'xbox') {
            response.data.splice(i, 1);
            i--;
          }
        }
        return response.data;
      })
    }
  })
