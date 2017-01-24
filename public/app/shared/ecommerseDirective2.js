angular.module('ecommerseApp')
.directive('mainFooter', function(){
  return{
    restrict: 'E',
    restrictUrl: 'app/component/views/footer/footer.html'
  }
})
