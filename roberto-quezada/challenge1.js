// #1
function billTotal(subTotal) {
  var grandTotal = 0;
  var tipTotal = 0.15 * subTotal;
  var taxTotal = 0.095 * subTotal;
  grandTotal = subTotal + tipTotal + taxTotal;
  return grandTotal;
}
// exercise #2
function animalNoise(type, emotion) {
  var animals = ["cat", "dog", "cow", "duck"];
  var noise = {
    "angry": {
      "cat" : "meow!",
      "dog" : "grrrlll..",
      "cow" : "MOOOO!!!"
    },
    "happy": {
      "cat": "puurrrr..",
      "dog": "woof woof!!",
      "cow": "moo moo"
    }
  }
// console.log(noise.angry.dog);
return noise.emotion.type;
}
animalNoise("dog", "angry")
function digitalSum(n) {

}
