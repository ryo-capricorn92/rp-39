// PROBLEM 1

function wordLengths(string) {
     var acc = [];
     var words = string.split(" ");
     each (words, function(word) {
         acc.push(word.length);
     });
     return acc;
}

// PROBLEM 2

function wordLengthsTwo(string) {
    var words = string.split(" ");
    return map (words, function(word) {
        return word.length;
    });
}

// PROBLEM 3

function wordsLongerThanThree(string) {
    var words = string.split(" ");
    return filter (words, function(word) {
        return word.length > 3;
    });
}
