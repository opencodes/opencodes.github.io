define(function(){
	function mainRoutes($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/");
	  // Now set up the states
	  $stateProvider
	  .state('home', {
		  url: "/",
		  templateUrl: "./assets/js/modules/comman/tpl/home.html",
		  controller: 'mainCtrl',
		  
		 })
	  .state('skills', {
		  url: "/skills",
		  templateUrl: "./assets/js/modules/comman/tpl/skills.html",
		  controller: 'mainCtrl'
		 })
	  
	}
	mainRoutes.$inject=['$stateProvider','$urlRouterProvider'];
	return mainRoutes;
});