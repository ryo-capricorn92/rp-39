var solarSystem = {

}

function range (start, end) {
  var result = [];
  while (start < end) {
    result.push(start);
    start++;
  }
  return result;
}



var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function longestName (people) {
  var result = {
    result: 0,
    person: {}
  }
  for (var i = 0; i < people.length; i++) {
    var person = fullName(people[i]);
    if (person.length > result.size) {
      result.size = fullName(person).length;
      result.person = people[i];
    }
  }
  return result.person;
}

function fullName (person) {
  person.name.middle = person.name.middle || '';
  return person.name.first + person.name.middle + person.name.last;
}
