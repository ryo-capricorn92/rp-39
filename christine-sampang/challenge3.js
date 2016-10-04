// Challenge #3
// 1.
function each(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i], i);
    }
}
function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
 each(words, function(word, i) {
    acc.push(word.length);
 });
 return acc;
}
// 2.
function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}
function wordLengthsMap(words, func) {
    var acc = [];
    var wordsArr = map(words, function(word, i) {
    });
    return wordsArr
}
// 3.
function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}
function wordsLongerThanThree(words, predicate) {
    var acc = [];
    filter(words, )

            acc.push(word.length > 3);
        }
    });
}
