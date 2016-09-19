function billTotal(subTotal) {
	var tipRate = 0.15;
	var taxRate = 0.095;
	var tip = subTotal*tipRate;
	// I'm assuming the tax calculation includes the tip cost.
	var tax = (subTotal+tip)*taxRate;
	return (subTotal + tip + tax);
}
// I used a lot of variables because I learned in college that
// finance(me) = uber*confused;


function animalNoise (animal, emotion) {
	if (animal === "snake") {
		if (emotion === "surprised") {
			return "Ssssssssssss.";
		}
		else if (emotion === "exuberant") {
			return "Ssssssssssssssssssssssssssss.";
		}
		else {
			return "Sssss.";
		}
	}
	else if (animal === "cat") {
		if (emotion === "angry") {
			return "Rowl.";
		}
		else if (emotion === "satisfied") {
			return "Prrrr.";
		}
		else if (emotion === "doesn't give a damn") {
			return "";
		}
		else {
			return "";
		}
	}
	else {
		return "Sorry, Donald Trump is not an animal.";
	}
}

function digitalSum(number) {
	if (number - 9 <= 0) {
		return number;
	}
	else {
		var lastDigit = number % 10;
		var remainingDigits = Math.floor(number/10);
		return lastDigit + digitalSum(remainingDigits);
	}
}
