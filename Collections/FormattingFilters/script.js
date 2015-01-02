angular.module("mainModule", [])
	.controller("mainController", function($scope, $filter, dateFilter) {
		// Initialization
		$scope.stringData = "Example string";
		$scope.digital = 7;
		$scope.dateData = new Date();
		$scope.numberData = 1350620.547;

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
	})
	.filter("customCurrency" ,function(numberFilter) {
		function isNumeric(value) {
			return(!isNaN(parseFloat(value)) && isFinite(value));
		}

		return function(inputNumber, currencySymbol, decimalSeparator, thousandsSeparator, decimalDigits) {
			if(isNumeric(inputNumber)) {
				// Default values for the optional arguments
				currencySymbol = (typeof currencySymbol === "undefined") ? "$" : currencySymbol;
				decimalSeparator = (typeof decimalSeparator === "undefined") ? "." : decimalSeparator;
				thousandsSeparator = (typeof thousandsSeparator === "undefined") ? "," : thousandsSeparator;
				decimalDigits = (typeof decimalDigits === "undefined" || !isNumeric(decimalDigits)) ? 2 : decimalDigits;

				if(decimalDigits < 0) {
					decimalDigits = 0;
				}

				// Format the input number through the number filter
				// The resulting number will have "," as a thousands separator
				// and "." as a decimal separator.
				var formattedNumber = numberFilter(inputNumber, decimalDigits);

				// Extract the integral and the decimal parts
				var numberParts = formattedNumber.split(".");

				// Replace the "," symbol in the integral part
				// with the specified thousands separator.
				numberParts[0] = numberParts[0].split(",").join(thousandsSeparator);

				// Compose the final result
				var result = currencySymbol + numberParts[0];

				if(numberParts.length == 2) {
					result += decimalSeparator + numberParts[1];
				}
				return result;
			} else {
				return inputNumber;
			}
		};
	});