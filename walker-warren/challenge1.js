function billTotal (sub) {
  var tip = sub * .15;
  var tax = sub * .095;
  return sub + tip + tax;
};

function animalNoise (animal, emotion) {
  if (animal === "cow") {
    return emotion + " " + "moo";
  }
  else if (animal === "dog") {
    return emotion + " " + "bark";
  }
};

function digitalSum(n) {
  if (Math.floor(n/10) === 0) {
    if (n < 10) {
      return n;
    }
    else {
      return 1;
    }
  }
  return (n % 10) + digitalSum(Math.floor(n/10));
};
