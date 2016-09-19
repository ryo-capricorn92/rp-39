function billTotal(subtotal) {
    var tip = (subtotal * 0.15);
    var tax = (subtotal * 0.095);
    return subtotal + tip + tax;
}

function animalNoise(animal, emotion) {
    if(animal === "dog") {
        if(emotion === "sad") {
            return "Whine";
        } else if(emotion === "hangry") {
            return "Bark";
        }
    } else if(animal === "human") {
        if(emotion === "sad") {
            return "Cry";
        } else if(emotion === "hangry") {
            return "Yell";
        }
    }
}

function digitalSum(number) {
    var sum = 0;
    while(number > 9) {
        sum = sum + (number % 10);
        number = Math.floor(number / 10);
    }
  return sum + number;
  /* "+ number" accounts for single-digit numbers and ensures the first digit is included in the total sum for non-single-digit numbers */
} 
