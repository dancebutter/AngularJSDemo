angular.module("mainModule", [])
	.controller("simpleController", function($scope) {
		$scope.person = {
			firstName: "John",
			lastName: "Doe",

			getFullName: function() {
				return this.firstName + " " + this.lastName;
			}
		};
	});