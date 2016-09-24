// 1

var solarSystem = {
	age: "4568 billion",
	distanceToGalCenter: "27,000 ± 1,000 ly",
	numbKnownCommets: 3406,
	thePlanets: {
		mercury: {
			size: "0.055 Earth masses",
			distanceFromSun: "0.4 AU",
			numbKnownSatellites: 0
		},
		venus: {
			size: "0.815 Earth masses",
			distanceFromSun: "0.7 AU",
			numbKnownSatellites: 0
		},
		earth: {
			size: "1 Earth masses",
			distanceFromSun: "1 AU",
			numbKnownSatellites: 1
		},
		mars: {
			size: "0.107 Earth masses",
			distanceFromSun: "1.5 AU",
			numbKnownSatellites: 2
		},
		jupiter: {
			size: "318 Earth masses",
			distanceFromSun: "5.2 AU",
			numbKnownSatellites: 67
		},
		saturn: {
			size: "95 Earth masses",
			distanceFromSun: "9.5 AU",
			numbKnownSatellites: 62
		},
		uranus: {
			size: "14 Earth masses",
			distanceFromSun: "19.2 AU",
			numbKnownSatellites: 27
		},
		neptune: {
			size: "17 Earth masses",
			distanceFromSun: "30.1 AU",
			numbKnownSatellites: 14
		}
	}
};

// 2
function range(start, end) {
	var result = [];
	for (var i = 0; i <= (end - start); i++) {
		if ((start + i) < end) {
			result.push(start + i);
		}
	}
	return result;
}

// 3
function fullName(i) {
	return people[i].name.first + " " + people[i].name.middle + " " + people[i].name.last;
}

function longestName(people) {
	var result = "";
	var newObj = {};
	for(var i = 0; i < people.length; i++) {
		if (fullName(i).length > result.length)
			result = fullName(i);
			newObj = people[i];
	}
	return newObj;
}
