angular.module("mainModule", [])
	.controller("mainController", function($scope) {
	    // Initialization
	    $scope.people = [
	      {firstName: "John", lastName: "Doe", age: 30},
	      {firstName: "Bob", lastName: "Smith", age: 26},
	      {firstName: "Jack", lastName: "White", age: 47},
	      {firstName: "Michael", lastName: "Green", age: 41}
	    ];
	});