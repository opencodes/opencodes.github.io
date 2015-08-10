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
		  controller: 'MainController',
		  
		 })
	  .state('skills', {
		  url: "/skills",
		  templateUrl: "./assets/js/modules/comman/tpl/skills.html",
		  controller: 'MainController'
	   })
	  .state('resume', {
		  url: "/resume",
		  templateUrl: "./assets/js/modules/comman/tpl/resume.html",
		  controller: 'MainController'
	   })
	  .state('education', {
		  url: "/education",
		  templateUrl: "./assets/js/modules/comman/tpl/education.html",
		  controller: 'MainController'
	   })
	  .state('experience', {
		  url: "/experience",
		  templateUrl: "./assets/js/modules/comman/tpl/experience.html",
		  controller: 'MainController'
	   })
	  .state('projects', {
		  url: "/projects",
		  templateUrl: "./assets/js/modules/comman/tpl/projects.html",
		  controller: 'MainController'
	   })
	  
	}
	mainRoutes.$inject=['$stateProvider','$urlRouterProvider'];
	return mainRoutes;
});