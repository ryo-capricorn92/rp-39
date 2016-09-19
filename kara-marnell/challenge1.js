//exercise 1

var tip = .15;
var tax = .095;
function billTotal(subtotal) {
   return (subtotal + (subtotal * tip)) + (subtotal * tax);
}

//exercise 2


function animalNoise(animalType, emotion) {
   if(animalType === "cat" && emotion === "happy") {
       return "purr"
   } else if (animalType === "dog" && emotion === "happy") {
           return "woof"
       }
       else if (animalType === "cat" && emotion === "angry") {
           return "meOW!"
       } else if (animalType === "dog" && emotion === "angry") {
           return "yip!"
       }

}

// exercise 3: What I got stuck on is the way to increment throught the numbers
//so for the number 1137, I know my code currently will return 7. When I tried to
// make it cycle through the digits usind %10, I kept running into infinite loops.

function digitalSum(n) {
   var result = 0
   if(n <= 10) {
       return n;
   } else {
       while(n > 10) {
           result = result  + n;
           n = digitalSum(n % 10);
       }
       return result;
   }
}
