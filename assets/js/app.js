define(['angular',
		'uiRouter',
	    'mainController',
	    'mainRoutes',
	    'mainService'] , 
	function(angular, uiRouter, mainController, mainRoutes, mainService){
	
	var app = angular.module('myApp', ['ui.router']);
	app.config(mainRoutes);
    app.factory('mainService',mainService);
    app.controller('mainCtrl', mainController);
	return app;
});