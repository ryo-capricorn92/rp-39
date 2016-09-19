// 1. Write a function called billTotal that can be used to calculate the total to be paid at a restaurant
// -- including tip and tax -- given the subtotal (i.e. cost of food and drinks).
// We can assume that the tip will be 15% and tax will be 9.5%. Make sure that the tip does not include the tax!
function billTotal(bill) {
    var total = (bill * 0.15 /*tip*/) + (bill * 0.095 /*tax*/);
    return bill + total;
}
// 2. Implement the function called animalNoise that accepts two parameters:
// a type of animal and an emotion that indicates that animal's current emotional state.
// Based on the combination of animal and emotion, animalNoise should return an appropriate noise
// (represented as a string). The function should work with at least two different animals and emotions.
function animalNoise(animal, emotion) {
    if (animal === "cat" && emotion === "happy") {
        return "Meow! Purr! Purr!";
    } else if (animal === "cat" && emotion === "angry") {
        return "Hiss! Growl! Hiss!";
    }
    if (animal === "dog" && emotion === "happy") {
        return "Woof! Wag! Wag!";
    } else if (animal === "dog" && emotion === "angry") {
        return "Bark! Grr! Bark!";
    }
    return "I missing  or invalid input!";
}
// 3. The digital sum of a number is the sum of all its digits, e.g. digitalSum(1337) should output 14: 1 + 3 + 3 + 7.
// Use any of the methods of reptition that we have covered so far to implement this function.
// Hint!
// 1337 % 10; // 7
// 133 % 10; // 3
// 13 % 10; // 3
// 1 % 10; // 1
// 0 % 10; // 0
// 1337 / 10 // 133.7
// Math.floor(1337 / 10): // 133
// Math.floor(133 / 10): // 13
// Math.floor(13 / 10); // 1
function digitalSum(n) {
    var total = " "
    if (n === 0) {
        return "Done!";
    } else {
        console.log(n);
         //return n - digitalSum(n % 10);
    }
}
function digitalSum2(n) {
    var total = 0;
    while (n > 0 ) {
        console.log(n);
        var total = n % 10;
        Math.floor(n / 10);
        return n - total;
    }
}
