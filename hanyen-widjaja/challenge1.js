function billTotal(subTotal) {
  var tip = subTotal*0.15;
  var tax = subTotal*0.095;
  var total = subTotal+tip+tax;
  return total;
}

function animalNoise (animal,emotion) {
  if (animal === 'dog' && emotion === 'mad') {
    return 'GGGRRRRRR... WOFF WOFF';
  } else if (animal === 'cat' && emotion === 'happy') {
    return 'meooOOWW';
  }
	else console.log('The animal or the emotion is not supported in ver.1.0')
}

function digitalSum(num) {
	var result = num;
	var finalResult = 0;
	var counter = result;
	while (result>0) {
		console.log(result);
		counter=counter-10;
		if (counter<10) {
			finalResult = finalResult+counter;
			result = Math.floor(result/10);
			counter = result;
		}
		if (result===1) {
			finalResult = finalResult+1;
			return finalResult;
		}
	}
}
