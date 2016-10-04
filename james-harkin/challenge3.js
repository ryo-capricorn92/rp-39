// graded by ryo
// challenge 3
// number 1

// The following function wordLengths accepts a string as a parameter and returns an array of the lengths of each word in
// the string. Rewrite wordLengths using each; that is, replace the for loop.

"The quick brown fox jumps over the lazy dog."

function each(array, func) {
 for (var i = 0; i < array.length; i++) {
   func(array[i], i);
 }
}

function wordLengths(string, array) {
var acc = [];
var words = string.split(" ");
each(words, function(element) {
  acc.push(words[i].length);
})
return acc;
}

// number 2



// number 3
// Write a function called wordsLongerThanThree using filter that, given a string as input, returns an array of the words in the
// original string that are longer than three (have length greater than three).

function filter(array, predicate) {
 var acc = [];
 each(array, function(element, i) {
   if (predicate(element, i)) {
     acc.push(element);
   }
 });
 return acc;
}
