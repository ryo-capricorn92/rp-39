/* ----------------------------------------------------------------------- */
function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");

 each(words, function(word) {
   acc.push(word.length);
 });
 return acc;
}
console.log(wordLengths("The quick brown fox jumps over the lazy dog."));
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]

/* ----------------------------------------------------------------------- */
function wordLengthsMap(string) {
  var acc = [];
  var words = string.split(' ');

  return map(words, function(word) {
    return word.length;
  });
}
console.log(wordLengthsMap("The quick brown fox jumps over the lazy dog."));

/* ----------------------------------------------------------------------- */
function wordsLongerThanThree(string) {
  var acc = [];
  var words = string.split(' ');

  return filter(words, function(word) {
    return (word.length > 3);
  });
}
console.log(wordsLongerThanThree("The quick brown fox jumps over the lazy dog."));
// => [ "quick", "brown", "jumps", "over", "lazy" ]
