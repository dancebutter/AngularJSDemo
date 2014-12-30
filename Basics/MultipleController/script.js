var firstController = function($scope) {
	$scope.firstName = "John";
	$scope.lastName = "Doe";

	$scope.getFullName = function() {
		return $scope.firstName + " " + $scope.lastName;
	};
};

var secondController = function($scope) {
	$scope.firstName = "Bob";
	$scope.middleName = "Al";
	$scope.lastName = "Smith";

	$scope.getFullName = function() {
		return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
	};
};