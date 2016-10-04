// graded by ryo
//your code here!
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

function wordLengths(string) {
    var acc = [];
    var words = string.split(" ");
    each(words, function(word, i){
         acc.push(word.length);
     })
     return acc;
}

wordLengths("The quick brown fox jumps over the lazy dog.")
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]


function wordLengthsMaps(string) {
    var words = string.split(" ");
    return map(words, function(word, i) {
        return word.length;
    })
}

wordLengthsMaps("The quick brown fox jumps over the lazy dog.")

function wordsLongerThanThree(string) {
    var words = string.split(" ");
    return filter(words, function(word, i) {
        return (word.length > 3);
    })
} //This is return "dog." since the "." is being counted as part of the string.

wordsLongerThanThree("The quick brown fox jumps over the lazy dog.")
// => [ "quick", "brown", "jumps", "over", "lazy" ]
