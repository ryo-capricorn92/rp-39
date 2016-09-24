// 1
function makePlanets (name, size, distance, moons) {
    var planetObject = {};
    planetObject.name = name;
    planetObject.size = size;
    planetObject.distance = distance;
    planetObject.moons = moons;
    return planetObject;
}
var sSystemAge = 4000000000;
var sSystemDistanceFromCenter = 27000;
var numberKnownComets = 3406;
var mercury = makePlanets(mercury, 0.055, 0.4, 0);
var venus = makePlanets(venus, 0.815, 0.7, 0);
var earth = makePlanets(earth, 1, 1, 1);
var mars = makePlanets(mars, 0.107, 1.5, 2);
var jupiter = makePlanets(jupiter, 318, 5.2, 67);
var saturn = makePlanets(saturn, 95, 9.5, 62);
var uranus = makePlanets(uranus, 14, 19.2, 27);
var neptune = makePlanets(neptune, 30.1, 30.1, 14);
// 2
function range(start, end) {
var rangeArray = [];
start = Math.round(start);
end = Math.round(end);
count = start + 1;
for (i=0; count<end; i++) {
    rangeArray[i] = count;
    count++;
    }
return rangeArray;
}
console.log(range(5.8,9.2));
// 3
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];
function longestName(people) {
  var longest = {};
  var longestCounter = 0;
  for (i=0; i<people.length; i++) {
    if ((people[i].name.first.length + people[i].name.middle.length + people[i].name.last.length) > longestCounter) {
    longestCounter = people[i].name.first.length + people[i].name.middle.length + people[i].name.last.length;
    longest = people[i];
    }
  }
return longest;
}
console.log(longestName(people)); //not sure why this returns: TypeError: Cannot read property 'length' of undefined
                                  //if I type console.log(people[1].name.first.length)) it returns me the expected value
