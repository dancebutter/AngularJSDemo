angular.module("mainModule", [])
	.controller("mainController", function($scope) {
		$scope.onFirstBtnClickResult = "";
		$scope.secondBtnInput = "";
		$scope.onDblClickResult = "";
		$scope.onMouseDownResult = "";
		$scope.onMouseUpResult = "";
		$scope.onMouseEnterResult = "";
		$scope.onMouseLeaveResult = "";
		$scope.onMouseMoveResult = "";
		$scope.onMouseOverResult = "";



		// Get mouse event
		var getMouseEventResult = function(mouseEvent, mouseEventDesc) {
			var coords = getCrossBrowserElementCoords(mouseEvent);
			return mouseEventDesc + " at ( " + coords.x + ", " + coords.y + " ) ";
		};

		// Utility function
		// Accepts a MouseEvent as input and returns the x and y
		// coordinates relative to the target elements.
		var getCrossBrowserElementCoords = function(mouseEvent) {
			var result = {
				x: 0,
				y: 0
			};

			if(!mouseEvent) {
				mouseEvent = window.event;
			}

			if(mouseEvent.pageX || mouseEvent.pageY) {
				result.x = mouseEvent.pageX;
				result.y = mouseEvent.pageY;
			} else if(mouseEvent.clientX || mouseEvent.clientY) {
				result.x = mouseEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				result.y = mouseEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			}

			if(mouseEvent.target) {
				var offEl = mouseEvent.target;
				var offX = 0;
				var offY = 0;

				if(typeof(offEl.offsetParent) != "underfined") {
					while(offEl) {
						offX += offEl.offsetLeft;
						offY += offEl.offsetTop;

						offEl + offEl.offsetParent;
					}
				} else {
					offX = offEl.x;
					offY = offEl.y;
				}

				result.x -= offX;
				result.y -= offY;
			}
			return result;
		};

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
		$scope.onMouseDown = function($event) {
			$scope.onMouseDownResult = getMouseEventResult($event, "Mouse down");
		};
		$scope.onMouseUp = function($event) {
			$scope.onMouseUpResult = getMouseEventResult($event, "Mouse up");
		};
		$scope.onMouseEnter = function($event) {
			$scope.onMouseEnterResult = getMouseEventResult($event, "Mouse Enter");
		};
		$scope.onMouseLeave = function($event) {
			$scope.onMouseLeaveResult = getMouseEventResult($event, "Mouse Leave");
		};
		$scope.onMouseMove = function($event) {
			$scope.onMouseMoveResult = getMouseEventResult($event, "Mouse Move");
		};
		$scope.onMouseOver = function($event) {
			$scope.onMouseOverResult = getMouseEventResult($event, "Mouse Over");
		};
	});