angular.module("mainModule", [])
	.controller("mainController", function($scope) {
		$scope.onFirstBtnClickResult = "";
		$scope.secondBtnInput = "";
		$scope.onDblClickResult = "";

		//
		// var getCrossBrowserElementCoords = function(mouseEvent) {
		// 	var result = {
		// 		x: 0,
		// 		y: 0
		// 	};

		// 	if(!mouseEvent) {
		// 		mouseEvent = window.event;
		// 	}

		// 	return result;
		// };

		// var getMouseEventResult = function(mouseEvent, mouseEventDesc) {
		// 	// body...
		// 	var coords = getCrossBrowserElementCoords(mouseEvent);
		// 	return mouseEventDesc + " at (" + coords.x + ", " + coords.y + ")";
		// };

		//Event handlers
		$scope.onFirstBtnClick = function() {
			$scope.onFirstBtnClickResult = "CLICKED";
		};
		$scope.onSecondBtnClick = function(value) {
			$scope.onSecondBtnClickResult = "You input: " + value + ".";
		};
		$scope.onDblClick = function() {
			$scope.onDblClickResult = "DOUBLE-CLICKED";
		};
	});