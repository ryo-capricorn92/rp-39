//your code here!
//Write a function called billTotal that can be used to calculate the total to be paid at a restaurant -- including tip and tax -- given the subtotal (i.e. cost of food and drinks). We can assume that the tip will be 15% and tax will be 9.5%. Make sure that the tip does not include the tax!
function billTotal(food,drinks){
    var price = food + drinks;
    return price + price*(15/100) + price*((9.5)/100) ;
}
billTotal(45,10);
/*Implement the function called animalNoise that accepts two parameters: a type of animal and an emotion that indicates that animal's current emotional state. Based on the combination of animal and emotion, animalNoise should return an appropriate noise (represented as a string). The function should work with at least two different animals and emotions.
function animalNoise(animal, emotion) {
// TODO: your code here
}
Some ideas include:
Animals: cat, dog, horse, duck, chicken, cow, human
Emotions: angry, happy, sad, surprised
If you're feeling uninspired, feel free to use "smileys" to convey emotion.*/
function animalNoise(animal,emotion){
    if(animal==='dog'){
        if(emotion === 'happy'){
        return  "dog should be bark";
        }else if(emotion === 'sad'){
        return  "dog should be calm";
        }else if(emotion === 'angry'){
        return  "dog should be bark and Shouting";
        }else if(emotion ===  'surprised'){
        return  "smileys";
        }
    }else if(emotion === human){
        if(emotion === 'happy'){
        return  "laugh";
        }else if(emotion === 'sad'){
        return  "calm";
        }else if(emotion === 'angry'){
        return  "Shouting";
        }else if(emotion ===  'surprised'){
        return  "shock";
        }
    }else{
        return "smileys";
    }
}
animalNoise('dog','happy');
/*The digital sum of a number is the sum of all its digits, e.g. digitalSum(1337) should output 14: 1 + 3 + 3 + 7. Use any of the methods of reptition that we have covered so far to implement this function.
function digitalSum(n) {
  // TODO: your code here
}
HINTS: Try the following at a console:
1337 % 10;
133 % 10;
13 % 10;
1337 / 10;
Math.floor(1337 / 10);
Math.floor(133 / 10);*/
function diditalSum(num){
    var sum = 0;
    while(num>0){
    sum = sum + num%10;
    num = Math.floor(num/10);
    }
    return sum;
}
diditalSum(1337);
/*What should digitalSum of a single-digit number return, e.g. digitalSum(8)?*/
digitalSum(8);
return 8 ;  //answer 8
