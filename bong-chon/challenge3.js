//1
function wordLengths(str){
    var acc=[];
    var arr = str.split(" ");
    each(arr,function(element){
        acc.push(element.length);
    });
return acc;
}
console.log(wordLengths("The quick brown fox jumps over the lazy dog."));
//2
function wordLengths(str){
    var arr = str.split(" ");
    return map(arr,function(element){
        return element.length;
    });
}
console.log(wordLengths("The quick brown fox jumps over the lazy dog."));
//3
function wordLengths(str){
    var arr = str.split(" ");
    return filter(arr,function(element){
        return element.length>3;
    });
}
console.log(wordLengths("The quick brown fox jumps over the lazy dog."));
