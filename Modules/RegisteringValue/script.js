angular.module("mainModule", [])
	.value("person", {
		firstName: "",
		lastName: "",
		getFullName: function() {
			return this.firstName + " " + this.lastName;
		}
	})
	.controller("mainController", function($scope, person) {
		person.firstName = "John";
		person.lastName = "Doe";
		$scope.personInstance = person;
	});