angular.module("mainModule", [])
	.controller("mainController", function($scope, $http, jsonFilter) {
		var logResult = function (str, data, status, headers, config) {
			return str + "\n\n" + 
					"data: " + data + "\n\n" + 
					"status: " + status + "\n\n" + 
					"headers: " + jsonFilter(headers()) + "\n\n" + 
					"config: " + jsonFilter(config);
		}

		$scope.simpleGetCall = function (withSucess) {
			var callURL = (withSucess ? "server.php" : "invalid-url.php");

			$http.get(callURL)
				.success(function (data, status, headers, config) {
					$scope.simpleGetCallResult = logResult("GET SUCCESS", data, status, headers, config);
				})
				.error(function (data, status, headers, config) {
					$scope.simpleGetCallResult = logResult("GET ERROR", data, status, headers, config);
				});
		};

		$scope.getCall = function () {
			var params = {
				param1: $scope.getParam1,
				param2: $scope.getParam2
			};

			var config = {
				params: params
			};

			$http.get("server.php", config)
				.success(function (data, status, headers, config) {
					$scope.getCallResult = logResult("GET SUCCESS", data, status, headers, config);
				})
				.error(function (data, status, headers, config) {
				  $scope.getCallResult = logResult("GET ERROR", data, status, headers, config);
				});
		};
	});