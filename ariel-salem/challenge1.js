function billTotal(subTotal) {
    var tip = subTotal * 0.15;
    var tax = subTotal * 0.095;
    return subTotal + tip + tax;
    // calculate TOTAL for restaurant
    // return subtotal + tip(15%) + tax(9.5%)
};
function animalNoise(animal, emotion) {
    if (animal.toLowerCase() === dog && emotion.toLowerCase() === happy) {
        return "woof";
    }
    else if (animal.toLowerCase() === dog && emotion.toLowerCase() === angry) {
        return "growl";
    }
    else if (animal.toLowerCase() === cat && emotion.toLowerCase() === happy) {
        return "meow";
    }
    else if (animal.toLowerCase() === cat && emotion.toLowerCase() === angry) {
        return "aloof";
    }
    else {
        return "That sounds made up, try again"
    }
    //animal + emotion should return MOO / Maaaaa...
    // dog + happy = woof
    // cat + happy = meow
    // dog + mad = growl
    //cat + mad = aloof
}; // I know this isn't pretty but it's the quickest thing I could come up with
function digitalSum(num) {
    var sum = (num % 10);
    //should use while, not sure how, need practice
    if (num < 1) {
        return sum;
    }
    else {
        return sum + digitalSum(Math.floor(num / 10));
    }
    //modulo number, then divide by 10, RECURSIVE
    //return sum
}
