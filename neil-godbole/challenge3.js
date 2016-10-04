// graded by ryo
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
// Problem 1
function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
    each(words, function(x, i) {
        acc.push(words[i].length);
    })
 return acc;
 }
console.log(wordLengths("The quick brown fox jumps over the lazy dog."));
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]
// Problem 2
function wordLengthsMap(string) {
    var words = string.split(" ");
    return map(words, function(x, i) {
        return words[i].length;
    })
}
console.log(wordLengthsMap("The quick brown fox jumps over the lazy dog."));
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]
// Problem 3
function wordsLongerThanThree(string) {
    var words = string.split(" ");
    return filter(words, function(x, i) {
        return words[i].length > 3;
    })
}
console.log(wordsLongerThanThree("The quick brown fox jumps over the lazy dog."));
