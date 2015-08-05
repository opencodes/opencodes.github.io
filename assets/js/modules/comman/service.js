define(function(){
	
	function mainService($http, $rootScope){
		var _self = this,
			jsonUrl = "./assets/js/profile.json";

		/**
		 * [loadJSON description]
		 * @param  {Function} callback [description]
		 * @return {[type]}            [description]
		 */
		_self.loadJSON = function(){
				return $http.get(jsonUrl);			
		}
		/**
		 * [getContentByPage description]
		 * @param  {[type]} pageid [description]
		 * @return {[type]}        [description]
		 */
		_self.getContentByPage = function(pageid) {
			if (_self.response) {
				var pageInfo = {links:[]};
				for( k in _self.response.pages) {
					var item = _self.response.pages[k];
					pageInfo.links.push({href : item.href, title : item.title})
					if (_self.response.pages[k].href === pageid) {
						pageInfo.page = _self.response.pages[k];
					};
				}
				pageInfo.profile = _self.response.profile;
				return pageInfo;			
			}
		}
		return _self;

	}
	mainService.$inject=['$http', '$rootScope'];
	return mainService;
});