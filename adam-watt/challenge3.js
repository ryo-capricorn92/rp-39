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
 each(words, function(item) {
 	acc.push(item.length);
 });
 return acc;
}

function wordLengthsMap(string) {
	var words = string.split(" ");
	return words.map(function(item) {
		return item.length;
	});
}

function wordsLongerThanThree(string) {
	var words = string.replace(/[?!.]/).split(" ");
	return words.filter(function(item) {
		return item.length > 3 ;
	});
}
