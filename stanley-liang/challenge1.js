//your code here!
function billTotal (subtotal) {
    return subtotal * 1.095 + subtotal * 0.15;
    // multiply total + tax, then addon the tips pretax (what i do irl);
}

function animalNoise (animal, emotion) {
    if (animal==="dog") {
        if (emotion === "happy") {
            return "Woof! :)";
        }
        else if (emotion === "sad") {
            return "Woof... =(";
        }
        else
            return "Woof";
    }
    else if (animal==="cat") {
        if (emotion === "happy") {
            return "Meow! :)";
        }
        else if (emotion === "sad") {
            return "Meow... =(";
        }
        else
            return "Meow";
    }
    else
        return "This code only works with cats and dogs, with the the limited emotions of happy and sad including a default noise."
}

function digitalSum(num) {
    var str=num.toString();
    //converts number into a string so i can run the for loop
    var count=0;
    for (var i=0;i<str.length;i++) {
        count += str[i] % 10;
    }
    return count;
}
