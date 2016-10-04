function wordLengths(string) {
  var acc = [];
  var words = string.split(" ");
  each(words, function(word) {
    acc.push(word.length);
  });
  return acc;
}

function wordLengthsMap(string) {
  var words = string.split(" ");
    return map(words, function(word) {
      return word.length;
    });
}

function wordsLongerThanThree(string) {
  var words = string.split(" ");
    return filter(words, function(word) {
      return word.length > 3;
    });
}
