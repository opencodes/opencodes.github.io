define(function(){
	
	function mainCtrl($scope, $http) {
		$scope.logotext = "Rajesh";
		$scope.links = [{
			title: 'Home',
			href : '#'
		},
						{
			title: 'About Me',
			href : '#'
		},
						{
			title: 'Skills',
			href : '#'
		},
						{
			title: 'Resume',
			href : '#'
		},
						{
			title: 'Testimonials',
			href : '#'
		},
						{
			title: 'Portfolio',
			href : '#'
		},
						{
			title: 'Contact Me',
			href : '#'
		}];
		
		$scope.articlesss = [{
			title: 'Values',
			content : 'Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
		},
						{
			title: 'Goals',
			content : 'Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
		},
						{
			title: 'Hobbies',
			content : 'Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
		}];
		
		$scope.pageTitle = "About Me";
		$scope.aboutMe = "Since 5+ year accomplished web design & front-end development with extensive experience building E-Commerce driven websites using open source and enterprise technologies, HTML5, CSS3 and various web scripting technologies, web standards and project management. Provide a diverse range of services including custom theme/application/plugin development and branding to an array of clients from a variety of industries. Enthusiastic web professional motivated by challenging projects and deadlines.";
		
		$scope.interests = [{
			title: 'Web Design',
			content : 'Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
		},
						{
			title: 'Graphics Design',
			content : 'Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
		},
						{
			title: 'Ecommerce',
			content : 'Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
		},
						   {
			title: 'Content Management',
			content : 'Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
		}];
		
	}
	mainCtrl.$inject=['$scope','$http'];
	return mainCtrl;
	
});
