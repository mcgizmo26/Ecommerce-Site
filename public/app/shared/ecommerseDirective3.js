angular.module('ecommerseApp')
.directive('productDirective', function(){
  return{
    restrict: 'E',
    templateUrl: 'app/component/views/product/product.html',
    controller: 'cartCtrl'
  }
})
