function billTotal (subtotal) {
	return subtotal + (.15 * subtotal) + (subtotal * 0.095);
}


function animalNoise(animal, emotion) {
		return "The " + animal + " is " + emotion;
}


function digitalSum(n) {
	if (n <= 10 && n > 0) {
		return n;
	}
	else if (n > 10 && n < 10000) {
		return //uhhh...need to come back to this T_T
	}
	else "Input a value between 1 and 10,000!";
}
