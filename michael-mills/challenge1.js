function billTotal(subTotal){
    return subTotal + (subTotal * .15) + (subTotal * .095);
}
function animalNoise(emotion, animal){
    // Simplified version, but if I wanted to specify different expressions for the same emotion depending on the animal,
    // I would simply use several if (animal === cat || honeyBadger && emotion === angry){return "Hiss!"} statements
    return "The " + animal + " is " + emotion + ".";
}
function digitalSum (input){
    if (input.length === 1){
        return input;
    }
    var answer = 0;
    while (Math.floor(input) >= 1){
        answer = answer + (input % 10);
        input = Math.floor(input / 10);
    }
    return answer;
}
