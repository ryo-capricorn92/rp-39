// graded by ryo
1.
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}
function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
 each(words, function(word, i){
    acc.push(words[i].length);
 })
 return acc;
}
wordLengths("The quick brown fox jumps over the lazy dog.");
2.
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
function wordLengthsMap(string){
    var words = string.split(" ");
    each(words, function(word, i){
    acc.push(words[i].length);
 });
}
function wordLengths(string) {
 return map(words, wordLengthMap);
}
wordLengths("The quick brown fox jumps over the lazy dog.");
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]
3.
function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}
function wordsLongerThanThree (string) {
    return filter(words, function(word, i)
        return word > word.length;
});
}
