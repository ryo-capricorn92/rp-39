//1.
var tip=.15;
var tax = .095
function billTotal (subTotal) {
 return (subTotal * tax + subTotal * tip+ subTotal);
}

billTotal(100);

//2



function animalNoise(animal, emotion) {
        if (animal == "cat" && emotion == "angry") {
        return "I am angry " + animal;
    } else if (animal == "dog" && emotion == "happy") {
        return "I am a happy " + animal;
    }
}

animalNoise("dog", "happy");
animalNoise ("cat", "angry");

//3
function digitalSum(x) {
    if (x === 0) {
        return x;
    }
    return (x) + digitalSum(x%1);
}

digitalSum(8);
