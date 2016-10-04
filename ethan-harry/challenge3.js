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
// #1
var string = "The quick brown fox jumps over the lazy dog."
function wordLengths(string) {
    var acc = [];
    var words = string.split(" ");
    each (words, function (element,i) {
        acc.push(words[i].length);
    })
 return acc;
}
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]
console.log(wordLengths(string))
// #2
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}
//
function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}
function wordLengthsMap (string) {
    var words = string.split (" ")
    return map (words, function (element) {
        return element.length
    })
}
console.log(wordLengthsMap (string))

 // #3
// Write a function called wordsLongerThanThree using filter that, given a string as input,
// returns an array of the words in the original string that are longer than three (have length greater than three).
function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}
//
function wordsLongerThanThree (string) {
    var words = string.split (" ")
    return filter(words, function(element, i) {
        return element.length > 3
    })
}
console.log(wordsLongerThanThree (string))
