var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider', function($translateProvider) {
	// static translation registration
	$translateProvider.translations('en', {
		"APP_TITLE": "Dutch AngularJS Meetup",
		"INTRODUCTION_TEXT": "Come togeter and meet great people!"
	});

	$translateProvider.translations('de', {
		"APP_TITLE": "Niederlandisches AngularJS-Treffen",
		"INTRODUCTION_TEXT": "kommt zusammen und lernt tolle Leute kennen!"
	});

	$translateProvider.preferredLanguage('en');
}]);

app.controller('langController', function($scope, $translate) {
	$scope.switchLanguage = function(languageKey) {
		$translate.uses(languageKey);
	};
});