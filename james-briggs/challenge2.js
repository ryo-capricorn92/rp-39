// WEEKLY CHALLENGE #2

// #1 - Represent solar system using JS data types

// Age of solar system, distance from center of galaxy, # of known comets, planets (name, size in earth masses, distance from sun, # of known satellites)

var solarSystem = {
	age: "4.568 billion years",
	distanceFromCenter: "27,000 ± 1,000 ly",
	knownComets: 3406,
	planets: {
		mercury: {
			name: "Mercury",
			sizeEarthMasses: 0.055, // Using numbers to allow for averaging or other such math
			distanceFromSunAU: 0.4,
			knownSatellites: 0
		}
		venus: {
			name: "Venus",
			sizeEarthMasses: 0.815,
			distanceFromSunAU: 0.7,
			knownSatellites: 0
		}
		earth: {
			name: "Earth",
			sizeEarthMasses: 1,
			distanceFromSunAU: 1,
			knownSatellites: 1
		}
		mars: {
			name: "Mars",
			sizeEarthMasses: 0.107,
			distanceFromSunAU: 1.5,
			knownSatellites: 2
		}
		jupiter: {
			name: "Jupiter",
			sizeEarthMasses: 318,
			distanceFromSunAU: 5.2,
			knownSatellites: 67
		}
		saturn: {
			name: "Saturn",
			sizeEarthMasses: 95,
			distanceFromSunAU: 9.5,
			knownSatellites: 62
		}
		uranus: {
			name: "Uranus",
			sizeEarthMasses: 14,
			distanceFromSunAU: 19.2,
			knownSatellites: 27
		}
		neptune: {
			name: "Neptune",
			sizeEarthMasses: 17,
			distanceFromSunAU: 30.1,
			knownSatellites: 14
		}
	}
};

// #2 - complete range that takes start & end, returns array containing all whole numbers between them (start inclusive, end exclusive).

// If end <= start, return empty array

function range(start,end) {
	var array = [];
	if (start < end) {
		for (var i = start; i < end; i++) {
			array.push(i);
		}
	}
	return array;
}

// # 3 - function that, when passed this array people, returns person (entire object) with longest full name

// Might be helpful to have fullName function that, when given person parameter, returns full name

function fullName(person) {
	if (person.name.middle === undefined) {
		return person.name.first + " " + person.name.last;
	} else {
		return person.name.first + " " + person.name.middle + " " + person.name.last;
	}
}


var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function longestName(people) {
	var longest = {};
	for (i = 0; i < people.length; i++) {
		if (fullName(people[i]).length > fullName(longest).length) {
			longest = people[i];
		}
	}
	return longest;
}

longestName(people);
// => {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26}
