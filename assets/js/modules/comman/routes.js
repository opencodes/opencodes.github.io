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
	  .state('resume', {
		  url: "/resume",
		  templateUrl: "./assets/js/modules/comman/tpl/resume.html",
		  controller: 'mainCtrl'
	   })
	  .state('education', {
		  url: "/education",
		  templateUrl: "./assets/js/modules/comman/tpl/education.html",
		  controller: 'mainCtrl'
	   })
	  .state('experience', {
		  url: "/experience",
		  templateUrl: "./assets/js/modules/comman/tpl/experience.html",
		  controller: 'mainCtrl'
	   })
	  .state('portfolio', {
		  url: "/portfolio",
		  templateUrl: "./assets/js/modules/comman/tpl/portfolio.html",
		  controller: 'mainCtrl'
	   })
	  
	}
	mainRoutes.$inject=['$stateProvider','$urlRouterProvider'];
	return mainRoutes;
});