// #1
var solarSystem = {
    age: 4.568,
    distanceToCenter: 27000,
    comets: 3406,
    planets: {
        Mercury: {
            name: "Mercury",
            size: .055,
            distanceFromSun: .4,
            satellites: 0
        },
        Venus: {
            name: "Venus",
            size: .815,
            distanceFromSun: .7,
            satellites: 0,
        },
        Earth: {
            name: "Earth",
            size: 1,
            distanceFromSun: 1,
            satellites: 1,
        },
        Mars: {
            name: "Mars",
            size: .107,
            distanceFromSun: 1.5,
            satellites: 2,
        },
        Jupiter: {
            name: "Jupiter",
            size: 318,
            distanceFromSun: 2.5,
            satellites: 67,
        },
        Saturn: {
            name: "Saturn",
            size: 95,
            distanceFromSun: 9.5,
            satellites: 62,
        },
        Uranus: {
            name: "Uranus",
            size: 14,
            distanceFromSun: 19.2,
            satellites: 27,
        },
        Neptune: {
            name: "Neptune",
            size: 17,
            distanceFromSun: 30.1,
            satellites: 14,
        },
    },
}
console.log (solarSystem.planets)
console.log (solarSystem.planets.Neptune)
console.log (solarSystem.planets.Neptune.distanceFromSun)
// #2
function range (start,end) {
    var array = []
    if (start > end) {
        return range (end,start)
    }
    while (start < end) {
        array.push (start)
        start++
    }
    return array
}
console.log (range(2,6))
console.log (range(6,2))
// #3
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];
function fullName (person) {
    if (person.name.middle === undefined) {
        return person.name.first + " " + person.name.last
    }
    return person.name.first + " " + person.name.middle + " " + person.name.last
};
function longName (array) {
    longestName = fullName (array[0])
    for (i=0; i < array.length; i++) {
        if (fullName (array[i]).length > longestName.length) {
            longestName = fullName(array[i])
        }
    }
    return longestName
}
console.log(longName (people))
// NOTE: I am aware that my code includes spaces in calculating who's name is the longest.
// Given more time, I could have avoided including spaces in the calculation while still using spaces in the return string
// By creating a "displayname" function different from "fullname"
