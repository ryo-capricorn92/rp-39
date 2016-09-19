function billTotal (subtotal) {
  var totalPaid = 0;
  var tax = 0;
  var tip = 0;
  tax = subtotal * 0.095;
  tip = subtotal * 0.15;
  totalPaid = subtotal + tax + tip;
  return totalPaid;
}
function animalNoise(animal, emotion) {
  if(animal === "cat") {
    if(emotion === "happy") {
      return "Purrr";
    } else if(emotion === "angry") {
      return "Hisss";
    }
  } else if(animal === "dog") {
    if(emotion === "happy"){
      return "Woof";
    } else if(emotion === "angry") {
      return "Bark";
    }
  }
}
function digitalSum(num) {
  var total = 0;
  while(num > 0) {
    total += num % 10;
    num = Math.floor(num / 10);
  }
  return total;
}
