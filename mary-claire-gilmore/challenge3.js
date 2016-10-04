// graded by ryo
//challenge 3
function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
 for (var i = 0; i < words.length; i++) {
   acc.push(words[i].length);
 }
 return acc;
}
wordLengths("The quick brown fox jumps over the lazy dog.")
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]
//1.
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}
function wordLengths(string) {
    var acc = [];
    each(string, function(callback) {
        acc.push(callback);
    });
    return acc;
}
wordLengths("The quick brown fox jumps over the lazy dog."); // does not return the correct array
//2.
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
function wordLengthsMap(array){
    var count = str.split(' ');
    return map(count, function(word) {
    })
}
wordLengthMap("The quick brown fox jumps over the lazy dog.");// I'm having trouble with this one
//.3
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
function wordsLongerThanThree(array) {
    return filter(array, function(string, i) {
        if (string.length > 3) {
            return acc.push(array[i]);
        }
    });
}
wordLongerThanThree("The quick brown fox jumps over the lazy dog."); // My function returned an empty string
