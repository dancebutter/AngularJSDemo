var firstControllerScope = function($scope) {
	$scope.firstName = "John";
};

var secondControllerScope = function($scope) {
	$scope.lastName = "Doe";

	$scope.getFullName = function() {
		return $scope.firstName + " " + $scope.lastName;
	};
};

var thirdControllerScope = function($scope) {
	$scope.middleName = "Al";
	$scope.lastName = "Smith";

	$scope.getFullName = function() {
		return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
	};
};

var firstControllerObj = function($scope) {
	$scope.firstModelObj = {
		firstName: "John"
	};
};

var secondControllerObj = function($scope) {
	$scope.secondModelObj = {
		lastName: "Doe"
	};
	$scope.getFullName = function() {
		return $scope.firstModelObj.firstName + " " + $scope.secondModelObj.lastName;
	};
};

var thirdControllerObj = function($scope) {
	$scope.thirdModelObj = {
		middleName: "Al",
		lastName: "Smith"
	};
	$scope.getFullName = function() {
		return $scope.firstModelObj.firstName + " " + $scope.thirdModelObj.middleName + " " + $scope.thirdModelObj.lastName;
	};
};