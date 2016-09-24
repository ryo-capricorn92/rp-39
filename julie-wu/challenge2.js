// 1. Represent the solar system with JS data types
var solarsystem = [
	ageOfSolarSystem: "4.6 billion years",
	distanceToCenter: "26,000 to 28,000 light years",
	numComets: 4000,
	planet: {name: "Mercury", sizeRadius: "1,516 mi", distance: "35.98 million mi", satellites: 0},
			{name: "Venus", sizeRadius: "3,760 mi", distance: "67.24 million mi", satellites: 0},
			{name: "Earth", sizeRadius: "3,959 mi", distance: "92.96 million mi", satellites: 1},
			{name: "Mars", sizeRadius: "2,106 mi", distance: "141.6 million mi", satellites: 2},
			{name: "Jupiter", sizeRadius: "43,441 mi", distance: "483.8 million mi", satellites: 63},
			{name: "Saturn", sizeRadius: "36,184 mi", distance: "888.2 million mi", satellites: 60},
			{name: "Uranus", sizeRadius: "15,759 mi", distance: "1.787 billion mi", satellites: 27},
			{name: "Neptune", sizeRadius: "15,299 mi", distance: "2.795 billion mi", satellites: 13}
];

// 2. Get the numbers from start to end...
function range(start, end) {
	var thearray = [];
	if (start === end || start > end) {
		return thearray;
	}
	for (var i = 0; i < end; i++) {
		thearray.push(i);
	}
	return thearray;
}

// 3. When passed people as a parameter, returns the person (returning obj w/ full name)
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function fullName(people) {
		if (!people.name.middle) {
		return people.name.first + " " + people.name.last;
	} else {
	return people.name.first + " " + people.name.middle + " " + people.name.last;
	}
}


function longestName(people) {
  	//incomplete
}
