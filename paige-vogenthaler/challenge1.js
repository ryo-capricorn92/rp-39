//1.
function billTotal(subtotal) {
  return (Math.round((subtotal + subtotal * .15 + subtotal * .095) * 100)) / 100;
}
//rounded to nearest cent for fun...
//checked in console :)


//2.
function animalNoise(animal, emotion) {
  if (animal === "cat" && emotion === "happy") {
    return "MEOW";
  }
  else if (animal === "cat" && emotion === "sad") {
    return "meow";
  }
  else if (animal === "dog" && emotion === "happy") {
    return "WOOF";
  }
  else if (animal === "dog" && emotion === "sad") {
    return "woof";
  }
  else if (animal === "chicken" && emotion === "happy") {
    return "CLUCK";
  }
  else if (animal === "chicken" && emotion === "sad") {
    return "cluck";
  }
}
//VM140:1 Uncaught ReferenceError: cat is not defined
//not sure why, can't find error
//I feel like this should be simple...


//3.
function digitalSum(num, count) {
  //count- base case
  //console.log(count);
  if (count === undefined){
    digitalSum(num, 0)
  }
  //base case
  else if (num < 10) {
    count += num
    return count;
  }
  //recursive case
  //adds the one's place to count
  count += num - Math.floor(num / 10) * 10
  //rerun function slicing off one's place
  return digitalSum(Math.floor(num / 10), count);
}
//returning NaN???
//I know I can do this useing global var count, but wanted to attempt
//using count as parameter
