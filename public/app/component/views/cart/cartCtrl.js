angular.module('ecommerseApp')
    .controller('cartCtrl', function($scope, productSrvc, authService, $state) {

        // ************ Get Items *****************

        $scope.tempItem = productSrvc.getItemFromTempCart();

        // $scope.clearCart = function (){
        //   productSrvc.getItemFromTempCart()
        //   .then(function(response){
        //     $scope.test = response;
        //   })
        // }



        $scope.addProductToTempCart = function(id){
          productSrvc.addProductToTempCart(id)
            .then(function(response){

            })
        }

        $scope.addItemsTogether = function() {
            var objNumber = $scope.tempItem;
            var newPrice = 0;
            for (price in objNumber) {
                var newParsedNumber = Number(objNumber[price].price);
                newPrice += newParsedNumber;
                var sumedPrice = newPrice.toFixed(2);

            }
            $scope.totalPrice = sumedPrice;
        }()




        // ************ Remove Items From Cart **************

        $scope.removeFromTempCart = function(pro) {
                // var json = $scope.tempItem;
                // for (i = 0; i < json.length; i++) {
                //     if (json[i].id == id) json.splice(i, 1);
                // }
                // localStorage.setItem('pro', JSON.stringify(JSON));
                // return json;
                localStorage.removeItem('pro');
                $scope.tempItem = null;
                $scope.totalPrice = null;

            }


            // ************ Get Signed in User ***************

            $scope.getCurrentUser = function() {
                productSrvc.getUser().then(function(response) {
                    $scope.user = response;
                    if (response) {
                      $scope.signedIn = true;
                    }
                })
            }();


        //  ************** buy Items *********************

        $scope.buyItems = function() {
            console.log("first step fired");
            var itemsToCart = $scope.tempItem;
            productSrvc.pushItemsUserToBackendCart(itemsToCart, $scope.user)
                .then(function(response) {
                    // $state.go('')
                })
        }

        // ************** Log User Out ********************

        $scope.logout = function() {
            console.log("loginCtrl logout");
            authService.logout().then(function(response) {
                $state.go('home');
                $scope.signedIn = false;
            });
        };

    })
