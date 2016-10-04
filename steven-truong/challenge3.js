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
function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
  each(words, function(element, i) {
   acc.push(words[i].length);
 });
 return acc;
}
function wordLengthsMap(string) {
 var acc = [];
 var words = string.split(" ");
  map(words, function(element, i) {
   acc.push(words[i].length);
 });
 return acc;
}
function wordsLongerThanThree(string) {
 var acc = [];
 var words = string.split(" ");
  filter(words, function(element, i) {
    if (words[i].length > 3){
   acc.push(words[i]);
    }
 });
 return acc;
}
//wordLengths("The quick brown fox jumps over the lazy dog.");
//wordLengthsMap("The quick brown fox jumps over the lazy dog.");
//wordsLongerThanThree("The quick brown fox jumps over the lazy dog.");
