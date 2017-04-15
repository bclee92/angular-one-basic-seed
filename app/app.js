(function (angular) {
  'use strict';

  var moduleDependencies = [
  	'home'
  ];
	angular.module('app', moduleDependencies);

	// Bootstrap the app.
	angular.element(function() {
		angular.bootstrap(document, ['app']);
	});
})(window.angular);