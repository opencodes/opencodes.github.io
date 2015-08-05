define(function(){
	
	function mainService($http, $rootScope){
		var _self = this,
			jsonUrl = "./assets/js/profile.json",
			response = $rootScope.config;

		/**
		 * [loadJSON description]
		 * @param  {Function} callback [description]
		 * @return {[type]}            [description]
		 */
		function loadJSON(callback){
				$http.get(jsonUrl).success(function(res){
					
					if(res){
						callback(res, null)
					}else{
						callback(null, null)
					}
				
				}).error(function(err){
					callback(null, err)
					
				});
			
		}
		/**
		 * [getContentByPage description]
		 * @param  {[type]} pageid [description]
		 * @return {[type]}        [description]
		 */
		_self.getContentByPage = function(pageid) {
			
			if (response) {
				var pageInfo = response.pages.map(function(k) {
					if (k.href == pageid) {
						return k;
					};
				});	
				console.log(pageInfo)			
			}else{
				loadJSON(function(response, err) {
					var pageInfo = response.pages.map(function(k) {
						if (k.href == pageid) {
							return k;
						};
					});
					
					return pageInfo;
				});
			}
		}
		return _self;

	}
	mainService.$inject=['$http', '$rootScope'];
	return mainService;
});