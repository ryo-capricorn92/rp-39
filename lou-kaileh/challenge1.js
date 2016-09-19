//your code here!
//Challenge question 1:
function billTotal(subtotal) {
    var tip = 0.15 * subtotal;
    var tax = 0.095 * subtotal;
    return subtotal + tip + tax;
}

//Challenge question 2:
function animalNoise(animal, emotion) {
    if(animal === "cat") {
        if(emotion === "angry") {
            return "hisss";
        } else
        if(emotion === "happy") {
            return "purrr";
        } else
        if(emotion === "sad") {
            return "meowww";
        } else
        if(emotion === "surprised") {
            return "MEOWWW!";
        }
        return "This cat doesn't have that emotion"
    } else
    if(animal === "dog") {
        if(emotion === "angry") {
            return "grrrr";
        } else
        if(emotion === "happy") {
            return "woof";
        } else
        if(emotion === "sad") {
            return "whimper";
        } else
        if(emotion === "surprised") {
            return "BARK!";
        }
        return "This dog doesn't have that emotion"

    }
    return "I don't know that animal"
}

//Challenge question 3:
function digitalSum(n) {
    sum = 0;
    while(n > 0) {
        sum = sum + (n % 10);
        n = Math.floor(n / 10);
    }
    return sum;
}
