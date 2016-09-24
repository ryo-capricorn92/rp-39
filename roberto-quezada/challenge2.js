// represent solar system as data
let solarSystem = {
  age: "4.6 billion years",
  distFromCenterOfGalaxy: "26000 light years",
  numOfComets: 3406,
  planets: [
        {name: "earth", size: 1, distFromSun: 4.5, numOfSatellites: 1},
        {name: "mercury", size: 1, distFromSun: 4.5, numOfSatellites: 1},
        {name: "venus", size: 1, distFromSun: 4.5, numOfSatellites: 1},
        {name: "neptune", size: 1, distFromSun: 4.5, numOfSatellites: 1}
        ]
}

// #2
function range(start, end) {
  var whole = [];
  for (var i = start; i < end; i++) {
    whole.push(i);
  }
  return whole;
}

// console.log(range(2,7));

// helper function to get fullName
function fullName(person) {
  if (!person.name.middle) {
    return person.name.first + ' ' + person.name.last;
  }
  return person.name.first + ' ' + person.name.middle + ' ' + person.name.last;
}

let alyssa = {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26};

// console.log(fullName(alyssa));

function longestName(peeps) {
  var longest = peeps[0];
  for (var i = 0; i < peeps.length; i++) {
    // console.log(fullName(peeps[i]).length);
    if (longest < fullName(peeps[i]).length) {
      longest = peeps[i];
    }
  }
  return longest;
  }



let people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

console.log(longestName(people));
