// graded by ryo
function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
 each(words, function (element, i) {
     return acc.push(element.length);
 });
 return acc;
}

function wordLengthsMap (string) {
    var words = string.split(" ");
    return map(words, function (element, i) {
        return element.length;
    });
}

console.log(wordLengthsMap("The quick brown fox jumps over the lazy dog."));

function wordsLongerThanThree (string) {
    var words = string.split(" ");
    return filter (words, function (element, i) {
        return element.length > 3;
    });
}
