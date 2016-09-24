// #1) Use Javascript data types to represent our solar system.
//      Following attributes are required:
//          Age of the Solar System
//          Distance from the center of the galaxy
//          Number of known comets
//          The Planets:
//              Name
//              Size (in Earth-masses)
//              Distance of each from sun
//              Number of known satellites (orbiting bodies, i.e. moons)
var solarSystem = {
    age: 4.568 billion years,
    distancefromCenterofGalaxy: 27000 >= 28000 light years,
    numberComets: 3406
};
var planets = [
    {name: "Venus", size: 0.815 Earth-masses, distanceFromSun: 0.7 AU, numberSatellites: 0},
    {name: "Mercury", size: 0.055 Earth-masses, distanceFromSun: 0.4 AU, numberSatellites: 0},
    {name: "Mars", size: 0.107 Earth-masses, distanceFromSun: 1.5 AU, numberSatellites: 2}
];
// #2) Complete the function below called range, that takes two parameters,
//      start and end, and returns an array containing all whole numbers between them
//      starting with start and up to end (i.e. for loop, while loop, each, or
//      repetition with function invocation).
//
//      range(0,4); //  =>   [0, 1, 2, 3]
//      range(2,7); //  =>   [2, 3, 4, 5, 6]
//      range(10,10);   //  =>   []
//      range(10,2);    //  =>   []
function range(start, end)
    if (start === end) {
        return [];
    }
    return
}

//function range(start, end) {
//var newArray = [];
//  for (start = 0, i < end.length, i++) {
//      newArray.push(start[i]);
//  }
//  return newArray[];
//}
// #3) Given the following array of people, write a function that,
//      when passed people as a parameter, returns the person (that is, your
//      function should return an object) with the longest name (first, middle, and last).
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];
var peopleFullName = [];
function longestName(people) {
    for (var name in people) {
        peopleFullName.push(people[name]);
    }
}
longestName(people);
// => {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26}
