angular.module('ecommerseApp').controller("createLoginCtrl", function($scope, $state, createLoginSrvc){
  $scope.submit = function(user){
   createLoginSrvc.user = Object.assign('createLoginSrvc.user', user)
 }

 $scope.createUserInstance = function(user){
   createLoginSrvc.createUserInstance(user).then(function(res){
     $state.go('login')
   })
 }
});
