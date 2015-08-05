peopleTen.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('search', {
      url: "/customer",
      templateUrl: "./js/modules/search/tpl/search.html",
      controller: 'searchCtrl'
     })  
});