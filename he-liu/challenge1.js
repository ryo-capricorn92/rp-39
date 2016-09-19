var billTotal = function (subTotal){

	var total= subTotal * 1.095;
	var tip = subTotal * 0.15;
	console.log('The total will be $' + total + ' with a $'+
		tip;)
}

console.log(billTotal(10))

var animalNoise = function(animal, emotion){
	if(animal==="dog" && emotion==="happy"){
		return "woof";
	}
	else if (animal==="dog" && emotion ==="sad"){
		return ":[";
	}
	else if(animal==="cat"  && emotion==="curious") {
		return "meow";
	}else (animal==="cat" && emotion ==="angry"){
		return ">:[";
	};
};

console.log(animalNoise("dog","happy"));

var digitalSum = function(n){
	for(var i =0; i < n.length ; i++){
		if()
		if(i>=10){
			return i%10;
		}else if (i>=100){
			return i%10+i%100
		}
	}
}
