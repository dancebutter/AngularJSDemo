/**
* countryDirective Module
*
* Description
*/
angular.module('countryDirective', [])
	.directive('country', function(){
		// Runs during compile
		return {
			scope : { country : '=' },
			restrict : 'A',
			templateUrl : 'country.html',
			controller : function($scope, countries) {
				countries.find($scope.country.id, function(country) {
					$scope.flagURL = country.flagURL;
				});
			}
		};
	});