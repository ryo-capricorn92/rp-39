function billTotal(subtotal) {
    var tip = 0.15;
    var tax = 0.095;
    return (subtotal * tip) + (subtotal * tax) + subtotal;
}

function animalNoise(animal, emotion) {
    if (animal === "dog" && emotion === "happy") {
        return "The dog is happy! :)";
    } else if (animal === "dog" && emotion === "sad") {
        return "The dog is unhappy! :(";
    } else if (animal === "cat" && emotion === "happy") {
        return "The cat is happy! :)";
    } else if (animal === "cat" && emotion === "sad") {
        return "The cat is sad! :(";
    }
}

function digitalSum(n) {
    if (Math.floor(n / 10) === 0) {
        return n;
    } else
        return ((n % 10) + (Math.floor(n / 10) % 10));
}
