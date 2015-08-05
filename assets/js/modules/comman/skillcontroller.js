define(function(){
	function skillCtrl($scope, $http,$rootScope, $timeout,$state, mainService) {
		var pageName = $state.current.name;
		console.log(pageName);
		
	}

	skillCtrl.$inject=['$scope','$http','$rootScope','$timeout' , '$state','mainService'];
	return skillCtrl;
	
});
