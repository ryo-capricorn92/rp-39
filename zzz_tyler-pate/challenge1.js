// 1.

function billTotal(subtotal, taxPercentage, tipPercentage){
  return subtotal + (subtotal * taxPercentage) + (subtotal * tipPercentage);
}

billTotal(100, .095, .15);

// 2.

function animalNoise(animal, emotion){
  if(animal === "cat"){
    if(emotion === "angry"){
      return "HISSSSSSSSS!";
    }else if(emotion === "happy"){
      return "Purrrrrrr";
    }
  }else if(animal === "dog"){
    if(emotion === "angry"){
      return "Bark!";
    }else if(emotion === "happy"){
      return "Yip, Yip!";
    }
  }
}

animalNoise("dog", "angry");

// 3.

function digitalSum(num){
  var sum = 0;
  while(num > 0){
    sum = sum + num % 10;
    num = Math.floor(num/10);
  }
  return sum;
}

digitalSum(8);
