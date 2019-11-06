function doSomeMath() {
	var a = 5; // gets saved within multiply even tho this function isn't needed anymore.
	var b = 4;
	// var sum = a + b;
	// return sum;

	function multiply() { // function within a function
		result = a*b;
		return result;
	}
	return multiply; // return nested function
}

var theResult = doSomeMath();

console.log("The result: ", theResult()); // theResult() is only possible because of function within a function. (closures.)
