// Problem 1
var mercury = {
	name: "Mercury",
	size: .055,
	distancetoSun: 35980000,
	numSatellites: 0
};

var venus = {
	name: "Venus",
	size: .815,
	distancetoSun: 67240000,
	numSatellites: 0
};

var earth = {
	name: "Earth",
	size: 1,
	distancetoSun: 92960000,
	numSatellites: 1
};

var mars = {
	name: "Mars",
	size: 0.107,
	distancetoSun: 141600000,
	numSatellites: 2
};

var jupiter = {
	name: "Jupiter",
	size: 317.8,
	distancetoSun: 483800000,
	numSatellites: 67
};

var saturn = {
	name: "Saturn",
	size: 95.16,
	distancetoSun: 888200000,
	numSatellites: 62
};

var uranus = {
	name: "Uranus",
	size: 14.54,
	distancetoSun: 1787000000,
	numSatellites: 27
};

var neptune = {
	name: "Neptune",
	size: 17.15,
	distancetoSun: 2795000000,
	numSatellites: 14
};

var solarSystem = {
	age: 4568000000,
	distanceToCenter: 27000,
	numComets: 3406,
	planets: [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]
};

// Problem 2
function range (start, end) {
	var array = [];
	if (start >= end) {
		return array;
	}
	else {
		for (i=start; i < end; i++)
		{
			array.push(i);
		}
	}
	return array;
}

// Problem 3
function fullName(person) {
	var middle = "";
	if (person.name.middle === undefined) {
		middle = " ";
	}
	else {
		middle = " " + person.name.middle + " ";
	}
	return person.name.first + middle + person.name.last;
}

function longestName(people) {
	var longPerson = people[0];
	for (i=0; i < people.length; i++) {
		if (fullName(people[i]).length > fullName(longPerson).length) {
			longPerson = people[i];
		}
	}
	return longPerson;
}
