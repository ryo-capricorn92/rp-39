function billTotal(subtotal){
  var tip = 0.15;
  var tax = (9.5/100);

  return subtotal + subtotal*tip + subtotal*tax;
}

function animalNoise(animal, emotion){
  if(animal==="cat"){
    if(emotion==="happy"){
      return "purrrrr";
    } else if(emotion==="angry"){
      return "rawwwwww";
    } else {
      return "meeeeep"
    }
  }
  else if(animal==="dog"){
    if(emotion==="happy"){
      return "*tongue wag sound*";
    } else if(emotion==="angry"){
      return "grrrrrrRRRR";
    } else {
      return "silence"
    }
  }
  else if(animal==="duck"){
    if(emotion==="happy"){
      return "quack quack quack";
    } else if(emotion==="angry"){
      return "sufferin succotash!!!";
    } else {
      return "whatsup doc?"
    }
  }
  else if(animal === "human"){
    if(emotion==="happy"){
      return "let's netflix and chill?";
    } else if(emotion==="angry"){
      return "you don't love me anymore!!";
    } else if(emotion === "sad"){
      return "*sniff sniff*...*blows nose*"
    }
     else {
      return "whatsup doc?"
    }
  }
  else {
    if(emotion==="happy"){
      return "baaaa";
    } else if(emotion==="angry"){
      return "ROAR!!!!";
    } else {
      return "bark bark"
    }
  }
}

function digitalSum(digits){
  return digits.toString().split('').reduce(function(a, b){ return Number(a) + Number(b) });
}
