function billTotal (subtotal) {
    return subtotal + (subtotal * .15) + (subtotal * .095);
}
function animalNoise (animal, emotion) {
    if(animal === 'cat' && emotion === 'angry') {
        return "grrrrrrrr!";
    }
    if (animal === 'cat' && emotion === 'happy') {
        return "purrrrrrrrr!";
    }
    if (animal === 'cat' && emotion === 'sad') {
        return "mooo mooo :("
    }
    if (animal === 'cat' && emotion === 'excited') {
        return "purrrrrrrr!!!! :)"
    }
    if (animal === 'dog' && emotion === 'angry') {
        return "grooooowllllll";
    }
    if (animal === 'dog' && emotion === 'happy') {
        return "woof! woof! pant pant!";
    }
    if (animal === 'dog' && emotion === 'sad') {
        return "whimper-whimper :(";
    }
    if (animal === 'dog' && emotion === 'excited') {
        return "ahh-oooooooooh!"
    }
    return "please enter either a Dog or a Cat and one of the following emotions (angry, happy, sad, excited";
}
function digitalSum(sum) {
    if (Math.floor(sum) === 0) {
        return 0;
    }
    return (sum % 10) + digitalSum(Math.floor(sum / 10));
}
