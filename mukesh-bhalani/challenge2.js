/* 1.
Using your knowledge of JavaScript data types (i.e. numbers, strings, booleans,
 arrays and objects), represent our solar system as data (hint: the link
 is to a Wikipedia article – you should use it). You can include as many
 attributes as you like, but the following are required:

Age of the Solar System
Distance from the center of the galaxy
Number of known comets

The Planets
Name
Size (in Earth-masses)
Distance of each from sun
Number of known satellites (orbiting bodies, e.g moons)
*/

var solarSystem = {
                    age: 4568000000,
                    disCenGalaxy: 27000,
                    comets:   3406,
                    planets: [ { name: '',
                                 size: 0,
                                 distance: 0,
                                 setelites: 0,
                               }
                             ],
                  };

// Ex-2
function range(start, end) {
  var result = [];

  for (var i = start; i < end; i++)
    result.push(i);

  return result;
}
//console.log(range(10, 2));

// Ex-3
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function longestName(people) {
  var result = {};
  var maxLength = 0;

  for (var i = 0; i < people.length; i++) {
    var temLength = fullName(people[i]).length;
    console.log(fullName(people[i]));
console.log( temLength);
    if (temLength > maxLength) {
      result = people[i];
      maxLength = temLength;
    }
//    console.log(people[i]);
  }
  return result;
}
function fullName (argPerson) {
  if (!argPerson.name.middle)
    return (argPerson.name.first + argPerson.name.last);
  return (argPerson.name.first + argPerson.name.middle + argPerson.name.last);
}
console.log(longestName(people));
