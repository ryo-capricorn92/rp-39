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


//1.

function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
 each(words, function(word) {
   acc.push(word.length);
 });
 return acc;
}
wordLengths("The quick brown fox jumps over the lazy dog.")
// => [ 3, 5, 5, 3, 5, 4, 3, 4, 4 ]

//2.

function wordLengthsMap(string) {
	var words = string.split(" ");
	return map(words, function(word) {
		return word.length;
	});
}

//3.

function wordsLongerThanThree(string) {
	var words = string.split(" ")

	return filter(words, function(word) {
		if (word.length > 3) {
			return word;
		}
	});
}
