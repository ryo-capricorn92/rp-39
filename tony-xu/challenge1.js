// 1) billTotal
function billTotal(subtotal) {
  var tip = 0.15;
  var tax = 0.095;
  return parseFloat((subtotal + (tip * subtotal) + (subtotal * tax)).toFixed(2));
}
// 2) animalNoise
function animalNoise(animalType, emotion) {
  if(animalType === "cat" && emotion === "happy") {
    return "purrrrr";
  }
  else if(animalType === "cow" && emotion === "angry") {
    return "MOOOOO!! ><";
  }
  else if(typeof animalType !== String || typeof emotion !== String) {
    return "Error, you did not provide 2 strings.";
  }
}
// 3) digitalSum
function digitalSum(userNumber) {
  if(userNumber === 0) {
    return 0;
  }
  else {
    return (userNumber % 10) + digitalSum(Math.floor(userNumber / 10));
  }
}
