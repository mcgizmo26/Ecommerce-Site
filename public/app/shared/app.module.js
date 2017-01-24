angular.module('ecommerseApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: "/app/component/views/home/home.html",
    controller: 'homeCtrl'
  })

  .state('apple', {
    url:  '/apple',
    templateUrl: 'app/component/views/apple/apple.html',
    controller: 'appleCtrl'
  })

  .state('laptops', {
    url: '/laptops',
    templateUrl: 'app/component/views/laptops/laptops.html',
    controller: 'laptopsCtrl'
  })

  .state('playstation', {
    url: '/playstation',
    templateUrl: 'app/component/views/playstation/playstation.html',
    controller: 'playstationCtrl'
  })

  .state('userpage', {
    url: '/userpage',
    templateUrl: 'app/component/views/userpage/userpage.html'
  })

  .state('xbox', {
    url: '/xbox',
    templateUrl: 'app/component/views/xbox/xbox.html',
    controller: 'xboxCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'app/component/views/login/login.html',
    controller: 'loginCtrl'
  })

  .state('createlogin', {
    url: '/createlogin',
    templateUrl: 'app/component/views/login/createlogin.html',
    controller: 'createLoginCtrl'

  })

  .state('cart', {
    url: '/cart',
    templateUrl: 'app/component/views/cart/cart.html',
    controller: 'cartCtrl'
  });
})
