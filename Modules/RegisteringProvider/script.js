var PersonManager = function() {
	return {
		$get: function(person) {
			return {
				getPersonFirstName: function() {
					return person.firstName;
				},
				getPersonLastName: function() {
					return person.lastName;
				},
				getPersonFullName: function() {
					return person.firstName + person.separator + person.lastName;
				}
			};
		}
	};
};

angular.module("mainModule", [])
	.value("person", {
		firstName: "",
		lastName: "",
		separator: "",
	})
	.provider("personManager", PersonManager)
	.controller("mainController", function($scope, person, personManager) {
		person.firstName = "John";
		person.lastName = "Doe";
		person.separator = "*";

		$scope.personInstance = person;
		$scope.personManagerInstance = personManager;
	});