function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
 each(words, function(word) {
   acc.push(word.length);
 });
 return acc;
}
console.log(wordLengths("The quick brown fox jumps over the lazy dog."));

function wordLengthsMap(string) {
  var words = string.split(" ");
  return map(words, function(word) {
    return word.length;
  });
}

console.log(wordLengthsMap("The quick brown fox jumps over the lazy dog."));

function wordsLongerThanThree(string) {
  var words = string.split(" ");
  return filter(words, function(word) {
    return word.length > 3;
  });
}

console.log(wordsLongerThanThree("The quick brown fox jumps over the lazy dog."));
