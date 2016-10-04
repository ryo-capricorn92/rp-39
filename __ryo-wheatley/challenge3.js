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

// function wordLengths(string) {
//  var acc = [];
//  var words = string.split(" ");
//  for (var i = 0; i < words.length; i++) {
//    acc.push(words[i].length);
//  }
//  return acc;
// }

// ex-1
function wordLengths (str) {
  var acc = [];
  var words = str.split(' ');
  each(words, function (word, i) {
    acc.push(word.length);
  });
  return acc;
}



// ex-2
function wordLengths (str) {
  var words = str.split(' ');
  return map(words, function (word, i) {
    return word.length;
  });
}



// ex-3
function wordsLongerThanThree (str) {
  var words = str.split(' ');
  return filter(words, function (word, i) {
    return word.length > 3;
  });
}
