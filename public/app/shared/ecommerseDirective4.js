angular.module('ecommerseApp')
    .directive('cssHiderDirective', function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                $(document).ready(function() {
                    setTimeout(function() {
                        $(".xboxHomeHeader").slideToggle("slow");
                    }, 1000);
                })
            }
        }
    })
