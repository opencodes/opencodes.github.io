define(['angular',
		'uiRouter',
	    'mainController',
	    'mainRoutes',
	    'mainService'] , 
	function(angular, uiRouter, mainController, mainRoutes, mainService){
	
	var app = angular.module('myApp', ['ui.router']);
	 app.run(function($http, $rootScope){
	  var jsonUrl = "./assets/js/profile.json";
	  $.get(jsonUrl).
	  success(function(data, status, headers, config) {
	    $rootScope.config = data;
	    $rootScope.$broadcast('config-loaded');
	  }).
	  error(function(data, status, headers, config) {
	    // log error
	    console.log('error');
	  });
	})

	app.config(mainRoutes);
    app.factory('mainService',mainService);
    app.controller('mainCtrl', mainController);
	return app;
});