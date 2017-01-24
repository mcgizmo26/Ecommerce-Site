angular.module("ecommerseApp")
    .service("authService", function($http, $state) {

        // *************************** user login ************************

        this.login = function(user) {
            return $http({
                    method: "POST",
                    url: '/api/login',
                    data: user
                })
                .then(function(res) {
                    $state.go('cart');
                    return res.data;
                })
                .catch(function(err) {
                    console.log('ERROR LOGGING IN!', err);
                })
        };

        this.getUserName = function() {
            return $http({
                    method: 'GET',
                    url: '/api/getuser'
                })
                .then(function(res) {
                    return res.data;
                })
                .catch(function(err) {
                    console.log('GET USER NAME ERROR', err);
                })
        };



        // ************ logout ******************
        this.logout = function() {
            return $http({
                    method: 'GET',
                    url: '/logout'
                }).then(function(response) {
                    console.log(response);
                    return response.data;
                })
                .catch(function(err) {
                    console.log(err);
                });
        };

        this.editUser = function(id, user) {
            return $http({
                method: 'PUT',
                url: "/user/" + id,
                data: user
            }).then(function(response) {
                return response;
            });
        };
    });
