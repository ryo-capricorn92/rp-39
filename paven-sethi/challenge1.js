// 1

function billTotal(subTotal) {
    return (.15*subTotal) + (.95*subTotal) + subTotal;
}

// 2


function animalNoise(animal, emotion) {
        if (animal === "student reporting for HR prep" && emotion === "happy") {
            return "mo0o0o0o0o0o0o!";
        } else if (animal === "dog" && emotion === "angry") {
            return "woof woof!";
        }
}

// 3

function digitalSum(n) {
    var remainder = n % 10;
    var sum = remainder;
    if (n >= 10) {
        var rest = Math.floor(n / 10);
        sum += digitalSum(rest);
    }
    return sum;
}
