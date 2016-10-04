// Problem 1, using each

function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
 each(words, function (element, i) {
 	acc.push(element.length);
  });
return acc;
}


// Problem 2, using map

function wordLengthsMap(string) {
 var words = string.split(" ");
 return map(words, function (element, i) {
 	return element.length;
 });
}


// Problem 3, using filter

function wordsLongerThanThree (string) {
	var words = string.split(" ");
	return filter(words, function (element, i) {
		return (element.length > 3);
	});
}
