//Problem 1
function billTotal(subtotal){
    var tip = subtotal*.15;
    var tax = subtotal*.095;
    return subtotal+ tip+tax;
}
console.log(billTotal(100)); //124.5
//Problem 2
function animalNoise(animal,emotion){
    if(animal==="cat" &&emotion==="sad"){
        return "meeeeow";
        }else if(animal==="dog" && emotion==="angry"){
            return "wuff";
        }
}
console.log(animalNoise("cat","sad")); //meeeeow
//Problem 3
function digitalSum(n){
    var string =String(n);
    var i=0;
    var sum =0;
    while(i<string.length){
        sum+=Number(string[i]);
        i+=1;
    }
return sum;
}
console.log(digitalSum(1337)); //14
//The digitalSum of a single-digit number should return the argument
console.log(digitalSum(8)); //8
