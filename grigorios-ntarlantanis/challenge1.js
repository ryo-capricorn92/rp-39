// Exersice 1

function billTotal(food,drinks) {
    var totalValue = food + drinks
    var tip = totalValue * 0.15
    return totalValue * 1.095 + tip
}

// Exersice 2

function animalNoise(animal,emotion){
    if (animal === "Dog" && emotion === "Happy") {
        return "whof whof whof whof"
    } else if (animal === "Dog" && emotion === "Angry") {
        return "grgrgrgrggrgrgr"
    } else if (animal === "Cat" && emotion === "Happy") {
        return "meow meow meow meow"
    } else if (animal === "Cat" && emotion === "Angry") {
        return "xrxrxrxrrxrxrxxrrx"
    } else {
        return "Wrong input - Choose Between Dog/Cat & Happy/Angry"
    }

}

//Exersice 3

console.log(1337 % 10)
console.log(133 % 10)
console.log(13 % 10)
console.log(1337 / 10)
console.log(Math.floor(1337 / 10))
console.log(Math.floor(1 / 10))


function digitalSum2(num){
    var totalSum = 0
    while (Math.floor(num/10) > 10) {
        totalSum = totalSum + num%10;
        num = Math.floor(num/10);
    }
    return totalSum + Math.floor(num/10) + num%10
}
