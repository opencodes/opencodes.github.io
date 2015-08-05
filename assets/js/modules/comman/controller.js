define(function(){
	function mainCtrl($scope, $http,$rootScope, $timeout,$state, mainService) {
		var pageName = $state.current.name;
		$scope.page = {};
		
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

	mainCtrl.$inject=['$scope','$http','$rootScope','$timeout' , '$state','mainService'];
	return mainCtrl;
	
});
