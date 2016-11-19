angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('tabLogin', {
    url: '/tabLogin',
    templateUrl: 'templates/tabLogin.html',
    abstract:true
  })

  .state('tabLogin.login', {
    url: '/login',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabLogin.signup', {
    url: '/signup',
    views: {
      'tab3': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })


  .state('offers', {
    url: '/page8',
    templateUrl: 'templates/offers.html',
    controller: 'offersCtrl'
  })

  .state('myCart', {
    url: '/page9',
    templateUrl: 'templates/myCart.html',
    controller: 'myCartCtrl'
  })

  .state('lastOrders', {
    url: '/tabLogin0',
    templateUrl: 'templates/lastOrders.html',
    controller: 'lastOrdersCtrl'
  })

  .state('favourite', {
    url: '/tabLogin1',
    templateUrl: 'templates/favourite.html',
    controller: 'favouriteCtrl'
  })

  .state('settings', {
    url: '/tabLogin2',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('support', {
    url: '/tabLogin3',
    templateUrl: 'templates/support.html',
    controller: 'supportCtrl'
  })

  .state('checkout', {
    url: '/tabLogin6',
    templateUrl: 'templates/checkout.html',
    controller: 'checkoutCtrl'
  })

  .state('tabLogin.forgotPassword', {
    url: '/tabLogin5',
    views: {
      'tab1': {
        templateUrl: 'templates/forgotPassword.html',
        controller: 'forgotPasswordCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/tabLogin/login')



});
