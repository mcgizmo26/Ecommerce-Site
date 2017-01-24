angular.module('ecommerseApp')
  .service('appleSrvc', function($http){
    this.getAllProducts = function(){
      return $http({
        method: 'GET',
        url: '/products'
      })
      .then(function(response){
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].type !== 'apple') {
            response.data.splice(i, 1);
            i--;
          }
        }
        return response.data;
      })
    }
  })
