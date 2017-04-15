(function (angular) {
	'use strict';

	HomeController.$inject = [
		'$log'
	];
	function HomeController(
		$log
	) {
		$log('Home component is initialized.');
	}

	var HomeComponent = {
		bindings: {},
		templateUrl: 'modules/home/home.component.html',
		controller: HomeController
	};

	angular.module('home')
		.component('home', HomeComponent);
})(window.angular);