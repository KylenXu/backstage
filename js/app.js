// var appView = angular.module('app', ['ngRoute', 'appControllers']);
var appView = angular.module('app', ['ui.router', 'appControllers']);

/**
 * ng-route
 */

// appView.config(['$routeProvider', function($routeProvider){
//   $routeProvider
//     .when('/login', {
//        templateUrl: '/partials/login.html',
//        controller: 'loginCtrl'
//     })
//     .when('/index', {
//      templateUrl: '/partials/index.html',
//      controller: 'indexCtrl'
//     })
//     .otherwise({
//       redirectTo: '/login'
//     })
//  }])


/**
 * ui-router
 */

appView.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('login');
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: '/partials/login.html',
    controller: 'loginCtrl'
  }).state('index', {
    url: '/index',
    templateUrl: '/partials/index.html',
    controller: 'indexCtrl'
  }).state('index.content', {
    url: '/:contactId',
    templateUrl: function(stateParams){
      return "/partials/tpls/"+stateParams.contactId+".html";
    },
    controller: 'showContent'
  }).state('index.Prodetail', {
    url: '/products/:contactId',
    templateUrl: "/partials/tpls/contentDetail/productDetail.html",
    controller: 'showProDetail'
  })
}]);
