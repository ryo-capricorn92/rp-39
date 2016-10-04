// graded by ryo
//1.
function wordLengths(string) {
  var acc = [];
  var words = string.split(" ");
  each(words, function(word) {
    acc.push(word.length);
  });
  return acc;
}

//2.
function wordLengthsMap(str) {
  var words = str.split(" ");
  return map(words, function(word) {
    return word.length;
  });
}

//3.
function longerThanThree(str) {
  var words = str.split(" ");
  return filter(words, function(word) {
    return word.length > 3;
  });
}
