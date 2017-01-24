angular.module('ecommerseApp')
.directive('mainHeader', function(){
  return{
    restrict: 'E',
    replace: true,
    templateUrl: 'app/component/views/header/header.html'
  }
})
