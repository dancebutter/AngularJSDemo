angular.module("mainModule", [])
	.controller('mainController', function($scope, $q, $http){
		var customAsyncFunc = function( callerId, withSuccess, duration ) {
			// Default values for the optional arguments
			duration = (typeof duration === "undefined") ? 3000 : duration;

			// Duration must be at least 3 seconds
			if (duration < 3000) duration = 3000;

			var deferred = $q.defer();

			var computingStep = 1;

			var computingFunc = window.setInterval(function() {
				deferred.notify("computing step" + (computingStep++) + "...");
			}, 1000);

			window.setTimeout(function() {
				if (withSuccess) {
					clearInterval(computationFunc);
					deferred.resolve(callerId + " said: successful execution!");
				} else {
					clearInterval(computationFunc);
					deferred.reject(callerId + " said: function failure!");
				}
			}, duration);

			return deferred.promise;
		};

		$scope.basicAsyncFunc = function(withSuccess) {
			var promise = customAsyncFunc("The basicAsyncFunc", withSuccess);

			$scope.basicAsyncFuncResult = "Waiting for the result...";

			promis.then(
				// Success handler
				function (successMessage) {
					$scope.basicAsyncFuncResult = successMessage;
				},
				function (failureMessage) {
					$scope.basicAsyncFuncResult = failureMessage;
				},
				// Update handler
				function (updateMessage) {
					$scope.basicAsyncFuncResult = updateMessage;
				}
			);
		};
	})