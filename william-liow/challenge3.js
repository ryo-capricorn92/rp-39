//1
function wordLengths(string) {
    var acc = [];
    var words = string.split(" ")
    each(words, function(word) {
        acc.push(word.length)
    });
    return acc;
}

//2
function wordLengthsMap(string) {
var words = string.split(" ");
    return map(words, function(word, i) {
        return word.length;
    })
}

//3
function wordsLongerThanThree(string) {
var words = string.split(" ");
    return filter(words, function(word) {
        return word.length>3;
    })
}
