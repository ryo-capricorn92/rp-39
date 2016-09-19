function billTotal (n){

var total = n;
var totalWTip = n;
var tax = 0.095;
var tip = 0.15;

totalWTip = n + (n * tip);
total = totalWTip + (total * tax)

return total;}

billTotal(20);


function animalNoise(animal, emotion) {

	switch(emotion) {
    case woof:
    	emotion = "woof woof"
      	return "The " + animal + " went " + emotion;
        break;
    case meow:
        console.log("The " + animal + "went meow meow");
        break;
    case rawr:
       console.log("The " + animal + "went rawr rawr");
        break;
    default:
        console.log("The " + animal + " didn't make a noise");
	}

}

animalNoise(cat, woof);
animalNoise(dog, meow);
animalNoise(chicken, rawr);

function digitalSum(n) {

var total = 0
    output = [];

	while (n) {
    	output.push(n % 10);
    	n = Math.floor(n/10);
}
	for (i = 0; i < output.length; i++)
		total += output[i];

	return total;

}

digitalSum(1337);
