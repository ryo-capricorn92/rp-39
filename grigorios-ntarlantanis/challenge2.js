/Exercise 1
var solarSystem = {
        age: 4568,
        distnaceCenterGAlaxy: 2700,
        numberKNownComets: 3406,
        planets: [
            {
                name: "Mercury",
                size: 0.055,
                distnaceSun: 0.4,
                numberSatellites: 0
            },
            {
                name: "Venus",
                size: 0.815,
                distnaceSun: 0.7,
                numberSatellites: 0
            },
            {
                name: "Earth",
                size: 1,
                distnaceSun: 1,
                numberSatellites: 0
            }
                ]
        }
//Exersice 2
function range(start, end) {
    var wholeNumbers = [];
    if (start < end) {
        for (i = 0 ; i === ((end+1)-start) ; i++) {
            wholeNumbers.push[i] = start + i
        }
    }
    return wholeNumbers;
}
//Exersice 3
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];
function fullName(first,middle,last) {
    return first + middle + last
}
function longestName(people) {
    var longName = fullName(people[0]) ;
    var count = 0 ;
    for (i = 0 ; i < people.length ; i++)
        if (fullName(people[i]).lenght >longName.length) {
            longName = fullName(people[i]);
            count = i
        }
    return people[count];
}
console.log(longestName(people));
// => {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26}
