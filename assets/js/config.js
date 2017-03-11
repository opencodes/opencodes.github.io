requirejs.config({
    baseUrl: './',
    paths: {        
		//Library
		modernizr : './bower_components/modernizr/modernizr',
		jquery : './bower_components/jquery/dist/jquery.min',
		angular : './bower_components/angular/angular',
		lodash : './bower_components/lodash/lodash.min',
		uiRouter : './bower_components/angular-ui-router/release/angular-ui-router.min',
		
		//Application component
		app : './assets/js/app',
   		mainController : './assets/js/modules/comman/controller',
        mainRoutes : './assets/js/modules/comman/routes',
        mainService : './assets/js/modules/comman/service',
        skillCtrl : './assets/js/modules/comman/skillcontroller'	
    },
	shim: {
        'angular': {
            exports: 'angular'
        },
		'app' : {
			deps : ['angular', 'jquery', 'uiRouter']
		},
		'uiRouter' :{
			deps : ['angular']
		}
     },
	deps: ['angular', 'app'],
    callback: function(angular) {
    	
        angular.bootstrap(document.getElementsByTagName('body'), ['myApp']);
    }
});
