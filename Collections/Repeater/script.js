angular.module("mainModule", [])
	.controller("mainController", function($scope) {
		// Intialization
		$scope.areAllPeopleSelected = false;

		$scope.people = [
			{firstName: "John", lastName: "Doe"},
			{firstName: "Bob", lastName: "Smith"},
			{firstName: "Jack", lastName: "White"},
			{firstName: "Micheal", lastName: "Green"}
		];

		$scope.selectablePeople = [
			{firstName: "John", lastName: "Doe", isSelected: false},
			{firstName: "Bob", lastName: "Smith", isSelected: false},
			{firstName: "Jack", lastName: "White", isSelected: false},
			{firstName: "Micheal", lastName: "Green", isSelected: false}
		];

		// Utility function
		$scope.updatePeopleSelection = function (peopleArray, selectionValue) {
			for(var i = 0; i < peopleArray.length; i++) {
				peopleArray[i].isSelected = selectionValue;
			}
		};
	});