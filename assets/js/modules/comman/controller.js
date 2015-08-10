define(function(){
	function MainController($scope, $http,$rootScope, $timeout,$state, $templateCache, mainService) {
		var pageName = $state.current.name;
		$scope.page = {};
		
		$templateCache.removeAll();
		
		if(mainService.response){
			
			 $timeout(function(){
					angular.extend($scope, mainService.getContentByPage(pageName));
					console.log($scope)
			 },10);	
			 
		}else{
			mainService.loadJSON().success(function(response){
				$timeout(function(){
					mainService.response = response;
					angular.extend($scope, mainService.getContentByPage(pageName));
				},10);				
			});		   
		}		
	}

	MainController.$inject=['$scope','$http','$rootScope','$timeout' , '$state','$templateCache','mainService'];
	return MainController;
	
});
