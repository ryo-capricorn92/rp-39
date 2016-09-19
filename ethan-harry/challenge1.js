// #1
function billTotal (subtotal) {
    var tip = .15 * subtotal
    var tax = .095 * subtotal
    return subtotal + tip + tax
}
console.log (billTotal(10))
// #2
function animalNoise (animal,emotion) {
if (animal === "cow") {
    if (emotion === "happy") {
        return "I love to moo"
    }
    else {
        return "I hate mooing"
    }
}
if (animal === "sheep") {
    if (emotion === "happy") {
        return "I love to baaah"
    }
    else {
        return "I hate baaahing"
    }

}
else
return "I don't know that animal!"
}
console.log (animalNoise("cow","happy"))
console.log (animalNoise("sheep","melancholy"))
console.log (animalNoise("octopus","angsty"))
// NOTE: I could have done this without using "else" (by defining the behavior of an option besides happy, and using another "if" function to identify that behavior
// #3
// With while loop:
function digitalSum(n) {
    var result = 0
    while (n>0) {
        result = result + (n % 10)
        n = Math.floor (n/10)
    }
    return result
}
console.log (digitalSum(122))
console.log (digitalSum(2254))
// with recursion:
function digitalSum (n) {
    if (n === 0) {
        return n
    }
    return (n % 10) + digitalSum (Math.floor(n/10))
}
console.log (digitalSum(122))
console.log (digitalSum(2254))
