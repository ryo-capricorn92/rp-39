//ex-1
function billTotal(argNum) {
 var tips = 0.15;
 var tax = 0.095;

 return argNum + argNum * tax + argNum * tips;
}
//console.log(billTotal(5));
function animalNoise(animal, emotion) {
 if (animal === 'cat' && emotion === 'happy')
   return 'MEOW!!!!!!';
 else if (animal === 'cat' && emotion === 'sad')
   return 'meeeoom.';
 else if (animal === 'dog' && emotion === 'happy')
   return 'WOOOOOOF!!!!!';
 else if (animal === 'dog' && emotion === 'sad')
   return 'wof';
 else
   return 'animal and emotion not covered in exaple!';
}
//console.log(animalNoise('dog', 'happy'));


// ex-3
function digitalSum(argNum) {
 if (argNum % 10 <= 0)
   return 0;

 return (argNum % 10) + digitalSum(Math.floor(argNum / 10));
}
//console.log(digitalSum(1337));
