var solarSystem = {
  age: 4.568,
  distanceToCenter: 27000,
  numberKnownComets: 3406,
  planets: [ ['Mercury', 0.055, 0.4, 0], ['Venus', 0.815, 0.7, 0],['Earth', 1, 1, 1],
  ['Mars', 0.107, 1.5, 2], ['Jupiter', 318, 5.2, 67], ['Saturn', 95, 9.5, 62],
  ['Uranus', 14, 19.2, 27], ['Neptune', 17, 30.1, 14] ]
}

function range(start, end) {
  var results = [];
  var i = start;

  if(start >= end) {
    return results;
  } else {
    while(i <= end) {
      results.push(i);
      i++;
    }
  }

  return results;
}

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function longestName(people) {
  var longest = "";

  for(var i = 0; i < people.length; i++) {
    if( fullName(people[i].name) > longest ) {
      longest = fullName(people[i].name);
    }
  }

  return longest;
}

function fullName(person){
  var first = person.first;
  var last = person.last;
  var middle = person.middle;

  if(middle !== undefined) {
    return first + " " + middle + " " + last;
  } else {
    return first + " " + last;
  }
}
