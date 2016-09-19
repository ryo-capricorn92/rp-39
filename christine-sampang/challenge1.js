//W1D5
//Self-Challenge #1
//Exercises:
// 1. Write a function called billTotal to calculate the total paid at a restaurant.
function billTotal (subtotal) {
    var total = subtotal + (subtotal * .095) + (subtotal * .15);
    return total;
}
// 2. Implement the function called animalNoise that accepts two parameters:
//      animal type (cat, dog, horse,..) and emotion (angry, sad, happy,..)
//  The function should work with at least two different animals and emotions.
//  animals: dog and monkey.   emotions: happy, angry, surprised, and sad.
function animalNoise(animal, emotion) {
    if (animal === "dog" && emotion === "happy") {
        return "This dog is so happy!";
    } else if (animal === "dog" && emotion === "angry") {
        return "The angry dog is very hungry.";
    } else if (animal === "monkey" && emotion === "surprised") {
        return "The monkey was surprised to see me!";
    } else (animal === "monkey" && emotion === "sad") {
        return "The monkey was sad I left so soon.";
    }
    return "That it not a dog or monkey"
}
// 3. The digital sum of number is the sum of all its digits.
//      e.g. digitalSum(1337);  should output 14 = 1 + 3 + 3 + 7
//  Implement this function.
function digitalSum(number) {
    if Math.floor(number % 10 === number) {
        return number;
    }
    return Math.floor(number % 10) + Math.floor((number / 10) % 10)
}
// I think we need a while loop in here....
//
//number = number / 1
//Sorry, running out of time! Cannot think fast enough.
