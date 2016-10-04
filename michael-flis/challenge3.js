// graded by ryo
//your code here!

//w4d1

//CHALLENGE 3 !!!!!


//refs...

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

/*

function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
 for (var i = 0; i < words.length; i++) {
   acc.push(words[i].length);
 }
 return acc;
}
wordLengths("The quick brown fox jumps over the lazy dog.")
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]
*/


//1.  The following function wordLengths accepts a string as a parameter and returns an array of the lengths of each word in the string. Rewrite wordLengths using each (written above for your convenience); that is, replace the for loop.

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}


function wordLengths(string) {
  var acc = [];
  var words = string.split(" ");
  each(words, function(element, i) {
    acc.push(words[i].length);
  });
  return acc;
}

//wordLengths("The quick brown fox jumps over the lazy dog.");
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]



//2.  wordLengths involves transforming every word into its length, which makes this function an ideal use-case of the map abstraction. Using map (also written above for convenience), rewrite wordLengths (but write a new function, e.g. wordLengthsMap) again -- but this time using map.

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function wordLengthsMap(string) {
 var words = string.split(" ");
 return map(words, function(element, i) {
   return words[i].length;
 });
}
//wordLengthsMap("The quick brown fox jumps over the lazy dog.");
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]




//3.  Write a function called wordsLongerThanThree using filter that, given a string as input, returns an array of the words in the original string that are longer than three (have length greater than three).

wordsLongerThanThree("The quick brown fox jumps over the lazy dog.");
// => [ "quick", "brown", "jumps", "over", "lazy" ]

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function wordslongerThanThree(string) {
  var words = [string.split(" ")];
  return filter(words, words.length > 3)
}


//did not finish... ran out of time
