angular.module("mainModule", [])
	.controller("mainController", function($scope) {
		// Initialization
		$scope.onEditChangeResult = "";
		$scope.onCheckBoxResult = "";
		$scope.onEditNoModelChangeResult = "";

		// Event handlers
		$scope.onEditChange = function() {
			if($scope.editValue == "") {
				$scope.onEditChangeResult = "";
			} else {
				$scope.onEditChangeResult = "the value is '" + $scope.editValue + "'";
			}
		};

		$scope.onCheckBoxChange = function() {
			$scope.onCheckBoxResult = "Check1 is " + ($scope.check1Selected ? "SELECTED" : "NOT SELECTED") + ", " + "Check2 is " + ($scope.check2Selected ? "SELECTED" : "NOT SELECTED");
		};

		$scope.onEditNoModelChange = function() {
			if($scope.temp == "") {
				$scope.onEditNoModelChangeResult = "";
			} else {
				$scope.onEditNoModelChangeResult = "CHANGE";
			}
		};
	});