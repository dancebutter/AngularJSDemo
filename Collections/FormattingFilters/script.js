angular.module("mainModule", [])
	.controller("mainController", function($scope, $filter, dateFilter) {
		// Initialization
		$scope.stringData = "Example string";
		$scope.digital = 7;
		$scope.dateData = new Date();

		// Utility function
		$scope.formatDate1 = function(date, format) {
			return $filter("date")(date, format);
		};
		$scope.formatDate2 = function(date, format) {
			return dateFilter(date, format);
		};

		$scope.addDigital = function() {
			if($scope.digital == $scope.stringData.length) {
				$scope.digital = $scope.stringData.length;
			} else {
				$scope.digital += 1;
			}
		};

		$scope.minusDigital = function() {
			if($scope.digital == 0) {
				$scope.digital = 0;
			} else {
				$scope.digital -= 1;
			}
		};
	});