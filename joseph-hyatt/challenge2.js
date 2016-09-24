//challenge 2

function solarSystem = (ageOfSolarSystem, distance, numberOfKnownComets, planets) {
			  return {
			  	ageOfSolarSystem: 4.6 Billion Years,
			  	distance: 1,000,000,000,000,000,000 km,
			  	numberOfKnownComets: 5235,
			  	planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Nepturn
	}
}	{
var earth =   earthsMass ('3959 miles'),
			  earthsdistance ('92.96 million miles'),
			  earthsorbitingSatellites ('1071 artifical satelliets')
}

function range (start, end) {
	for (var i = 0; i < start.length; i++)
		if (start[i].planets === end) {
			planets
		}
// got stuck.. moving on to try question 3



var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function longestName(people) {
  var fullName = 0;
  for (var i = 0; i < people.length; i++) {
  	totalName += people[i].name;
  }
  return fullName / people.length;
}

longestName(people);
function clean(obj){
	var clean = {};

	for (var key in obj){
		if(key[0] !== '_')
			cleaned[key] = obj[key];
	}
}
