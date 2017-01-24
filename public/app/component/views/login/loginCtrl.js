angular.module("ecommerseApp").controller("loginCtrl", function($scope, authService, $state) {

    // ******************** user login *************************

    function getUserName() {
        authService.getUserName().then(function(user) {
          if (user) $scope.user = user.username;
          else   $scope.user = 'NOT LOGGED IN';
        });
      };

      // getUser();


    $scope.login = function(username, password) {
        authService.login({
          // user: user
                username: username,
                password: password
            })
            .then(function(res) {
                getUserName();
            })
    };

});
