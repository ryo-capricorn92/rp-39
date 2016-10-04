//1.
function wordLengths(string) {
 var acc = [];
 var words = string.split(" ");
 each(words, function(word){
 acc.push(word.length)
  })
 return acc;
}
//2.
function wordLengthsMap(string) {
    var acc = [];
    var words = string.split(" ");
    return map(words, function(word) {
        return word.length;
    })
}
//3.
function wordsLongerThanThree(string) {
    var acc = [];
    var words = string.split(" ");
    return filter(words, function(word) {
        if(word.length > 3) {
        return true;
    } else {
        return false;
    }
    })
}
