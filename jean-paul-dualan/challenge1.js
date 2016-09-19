//your code here!
function billTotal(subtotal){
    var tax = subtotal * .095;
    var tip = subtotal * .15;
    var total = subtotal + tax + tip;
    return total;
}
function animalNoise(animal, emotion){
    if(animal==="cat" && emotion==="happy"){
        return "Purrr-fect";
    }
    else if (animal==="cat" && emotion==="angry"){
        return "Eeek, kitty is maaad";
    }
    else if (animal==="dog" && emotion==="sad"){
        return "Aww, a Rufff day today.";
    }
    else if (animal==="dog" && emotion==="surprised"){
        return "I love doggysound.";
    }
    else
        return "Sorry, Homie dont play dat";
}
function digitalSum(n) {
    if(n>10){
        return Math.floor(n * .001)+ (n % 10) + (Math.floor(n * .100) % 10) + (Math.floor(n*100)%10)
    }
    else
        return n;
    }

// aww that last one :(
