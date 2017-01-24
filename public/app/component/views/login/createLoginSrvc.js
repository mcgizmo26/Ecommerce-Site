angular.module("ecommerseApp")
    .service("createLoginSrvc", function($http, $state) {
        this.createUserInstance = function(user) {
            return $http({
                method: "POST",
                url: '/users',
                // user = req.body
                data: {
                    name: user.name,
                    username: user.username,
                    password: user.password
                }
            })
        }
    })
