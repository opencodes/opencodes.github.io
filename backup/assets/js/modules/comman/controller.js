define(function(){
	function mainCtrl($scope, $http,$rootScope, mainService) {
		//$scope.page = "aboutme";
		$scope.$on('config-loaded', function(){
		    mainService.response = $scope.config;
		});
		
	}

	mainCtrl.$inject=['$scope','$http','$rootScope','mainService'];
	return mainCtrl;
	
});
