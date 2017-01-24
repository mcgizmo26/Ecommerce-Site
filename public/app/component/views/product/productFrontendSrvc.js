angular.module('ecommerseApp')

// ************ gets product and puts them into local storage **********

.service('productSrvc', function($http) {
    var that = this;
    this.pro = [];

    // ********************* adding  items to local storage ******************

    this.addProductToTempCart = function(id) {
            return $http({
                    method: 'GET',
                    url: '/products/' + id
                })
                .then(function(response) {
                    that.pro.push(response.data[0]);
                    localStorage.setItem('pro', JSON.stringify(that.pro));
                    return response;
                })
        },

        this.getItemFromTempCart = function() {
            return JSON.parse(localStorage.getItem('pro'));
        }



        // *********** send items to back end **********
        this.pushItemsUserToBackendCart = function(itemUserVar, user) {
            return $http({
                method: 'POST',
                url: '/cart',
                data: {
                    cart_id: itemUserVar,
                    users_id: user.id
                }
            })
        }



    // *********** Get User When Signedin **********

    this.getUser = function() {
        return $http({
            method: 'GET',
            url: '/user'
        }).then(function(response) {
            return response.data;
            console.log('sevice', response);
        })
    }

})
