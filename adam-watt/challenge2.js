// vexercise 1 : values are random
var solarSystem = {
    age : 100,
    distanceFromCenter : 30,
    numKnownComets: 38,
    thePlanets : [
        {
            name: planete1,
            size: 20,
            distanceFromSun: 55,
            numKnownSat: 8
        },
        {
            name: planete2,
            size: 50,
            distanceFromSun: 85,
            numKnownSat: 22
        }
    ]

};
// exercise 2
var range = function(start,end) {
    var result = [];

    for ( var i = 0; i <= end-start; i++) {

        result.push(i+start);

    }
    return result;
};
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21},
  {name: {first: "Alyssa", middle: "PP.", last: "Hackers"}, age: 26}
];
var fullName = function(person){
    result = "";
    for (var key in person.name) {
        result += person.name[key];
    }
    return result;
};
function longestName(people) {
  var max = 0;
  var currentLongName = {};

  for (var i=0; i < people.length; i++ ) {

    if ((fullName(people[i]).length) > max) {
        currentLongName = people[i];
        max = fullName(people[i]).length;
    }
    }
    return currentLongName;
}
longestName(people);
// => {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26}
