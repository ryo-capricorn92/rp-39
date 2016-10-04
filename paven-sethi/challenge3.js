// graded by ryo
// 1

function wordLengths(string) {
    var lengths = [];
    var words = string.split(" ");
    each(words, function(element, i) {
        lengths.push(words[i].length);
    });
    return lengths;
}

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}




// 2

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function map(string, func) {
    var lengths = [];
    var words = string.split(" ");
    each(words, function(element, i) {
        lengths.push(words[i].length);
    });
    return lengths;
}

function wordLengths(words) {
    return map(words, function(word, i) {
        return lengths;
    })
}



// 3

function wordsLongerThanThree(string) {
    var acc = [];
    var words = string.split(" ");
    for (var i = 0; i < string.length; i++) {
        if(word.length > 3) {
            acc.push(string[i]);
        }
    }
    return acc;
}

function wordsLongerThanThree(string) {
    return filter(string, function(word, i) {
        if(word.length > 3) {
            return true;
        } else {
            return false;
        }
    });
}
