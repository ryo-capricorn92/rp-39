//1
function billTotal(subtotal) {
  return subtotal+(subtotal*.15)+(subtotal*0.095);
}

 //2
function animalNoise(animal, emotion) {
  if(animal==="monkey") {
    return "angry";
  } else if(animal==="cat") {
    return "scared";
  }
}

 //3
function digitalSum(number) {
  temp = number;
  sum = 0;
  while (temp > 9) {
    sum += temp%10;
    temp = Math.floor(temp/10);
  }

  sum += Math.floor(temp);
  return sum;
}
