//Challenge 2!
//1.
var solarSystem = {
    ageInBillonsOfYears: 4.568,
    numberOfComets: 3406,
    planets: [
        planet1: {
            name: "Mercury",
            size: 0.055,
            distanceFromSun:0.4,
            numberSatellites: 0
        },

        planet2:{
            name: "Venus",
            size: 0.815,
            distanceFromSun: 0.7,
            numberSatellites: 0
        },
        planet3:{
            name: "Earth",
            size:
            distanceFromSun: 1,
            numberSatellites: 1,
        },
        planet4:{
            name: "Mars",
            size: 0.107,
            distanceFromSun: 1.5,
            numberSatellites: 2
        },
        planet5:{
            name: "Jupiter",
            size: 318,
            distanceFromSun: 5.2,
            numberSatellites: 67
        },
        planet6: {
            name: "Saturn",
            size: 95,
            distanceFromSun: 9.5,
            numberSatellites: 62
        },
        planet7: {
            name: "Uranus",
            size: 14,
            distanceFromSun: 19.2,
            numberSatellites: 27
        },
        planet8: {
            name: "Neptune",
            size: 17,
            distanceFromSun: 30.1,
            numberSatellites: 14
        ],
    }
};
//2.
function range(start, end) {
  var numbersBetween = [];
  for(i = start; i < end; i++) {
    numbersBetween.push(i)
  }
  return numbersBetween;
};
//3.
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];
function fullName(arrayOfPeople) {
    var allNames = [];
    for(i = 0; i < arrayOfPeople.length; i++) {
        allNames.push(arrayOfPeople[i].name);
    }
    return allNames;
}
function longestName(fullName(people)) {
    var longest = {};
    var numberOfCharacters = 0;
    for(i = 0; i < allNames.length; i++) {
        if(allNames[i].length > numberOfCharacter) {
            longest.push(numberOfCharacter = allNames[i].length);
        }
    }
    return longest;
}
