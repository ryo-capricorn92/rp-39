// Using your knowledge of JavaScript data types (i.e. numbers, strings, booleans,
// arrays and objects), represent our solar system as data (hint: the link is to a Wikipedia article – you should use it).
// You can include as many attributes as you like, but the following are required:
var sol = [];

function planetMake(name, size, dist, moons) {
	return {
		name: name,
		size: size,
		dist: dist,
		moons: moons
	}
}
//innner
sol.push(planetMake("Mercury", 0.055, 0.4, "none"));
sol.push(planetMake("Venus", 0.815, 0.7, "none"));
sol.push(planetMake("Earth", 1, 1, "Luna"));
sol.push(planetMake("Mars", .107, 1.5, ["Deirmos", "Phobos"]));
// outer
sol.push(planetMake("Jupiter", 318, 5.2, ["Ganymede", "Callisto", "Io", "Europa"]));
sol.push(planetMake("Saturn", 95, 9.5, ["Titan", "Encladus"]));
sol.push(planetMake("Uranus", 14, 19.2, [ "Titania", "Oberon", "Umbriel", "Ariel", "Miranda"]));
sol.push(planetMake("Neptune", 17, 30.1, "Triton"));

function range(start, end) {
	var range = [];
  for (var i = start; i < end; i++) {
  	range.push(i);
  }
  return range;
}
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];
// people[0]["name"]["first"]; //"Alyssa"

function fullName(person) {
	var fullNamez = ""
	for (var i = 0; i < people.length; i++) {
		if (person === person[i].name.first) {
			fullNamez = person[i].name.first + " " + person[i].name.middle + " " + person[i].name.last;
		}
	}
	return fullNamez;
}

function longestName(people) {
  var longestName ="";
  for (var i = 0; i < people.length; i++) {
  		var conjName = fullName(people[i]);
  	if ( conjName > longestName) {
  		longestName = people[key].name;
  	}
  }
  return longestName;
}
