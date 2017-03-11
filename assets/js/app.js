define(['angular',
		'uiRouter',
	    'mainController',
	    'mainRoutes',
	    'mainService'] , 
	function(angular, uiRouter, MainController, mainRoutes, mainService){
	
	var app = angular.module('myApp', ['ui.router']);

	app.config(mainRoutes);
    app.factory('mainService',mainService);
    app.controller('MainController', MainController);
    app.run(function($rootScope, $templateCache) {
	   $rootScope.$on('$viewContentLoaded', function() {
	      $templateCache.removeAll();
	   });
	});
	return app;
});