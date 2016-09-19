// EXERCISE #1

function billTotal(subTotal) {
	var tax = subTotal * 0.095;
	var tip = subTotal * 0.15;
	return subTotal + tax + tip;
}

// EXERCISE #2

// Animals: Cat, Dog || Moods: Happy, Sad

function animalNoise(animal, emotion) {
	if (animal === "Cat") {
		if (emotion === "Happy") {
			return "Meeeoooowww!";
		} else if (emotion === "Sad") {
			return "Rooo..."
		} else {
			return "Cats don't have that emotion!";
		}
	} else if (animal === "Dog") {
		if (emotion === "Happy") {
			return "Woof!  Woof!";
		} else if (emotion === "Sad") {
			return "Hoo, hoo...";
		} else {
			return "Dogs don't have that emotion!";
		}
	} else {
		return "I don't know that animal...";
	}
}

// EXERCISE #3

// Function given single-digit input should just return that number.

function digitalSum(n) {
  var result = 0;
  while (n > 9) {
  	result = result + (n % 10);
  	n = Math.floor(n / 10);
  }
  return result + n;
}
