//1. Represent our solar system
var solarSystem = {
    ageOfSolarSystem: 4.568 * Math.pow(10, 9), //value in years
    distanceFromCenterOfGalaxy: 27000, //value in light years
    numberOfKnownComets: 3406,
    Planets: [
        {
            name: "Mercury",
            size: 0.055,
            distanceFromSun: 0.4,
            moons: 0
        },
        {
            name: "Venus",
            size: 0.815,
            distanceFromSun: 0.7,
            moons: 0
        },
        {
            name: "Earth",
            size: 1,
            distanceFromSun: 1,
            moons: 1
        },
        {
            name:"Mars",
            size: 0.107,
            distanceFromSun: 1.5,
            moons: 2,
        },
        {
            name: "Jupiter",
            size: 318,
            distanceFromSun: 5.2,
            moons: 67
        },
        {
            name: "Saturn",
            size: 95,
            distanceFromSun: 9.5,
            moons: 62
        },
        {
            name: "Uranus",
            size: 14,
            distanceFromSun: 19.2,
            moons: 27,
        },
        {
            name: "Neptune",
            size: 17,
            distanceFromSun: 30.1,
            moons: 14
        }
    ]
};


//2
function range(start, end) {
    var arrayOfWholeNums = [];
    for(var i = start; i < end; i++) {
        arrayOfWholeNums.push(i);
    }
    return arrayOfWholeNums;
}


//3
function longestNamePerson(people) {
    return people.reduce(function(longestNamePersonSoFar, person) {
        if(lengthOfName(longestNamePersonSoFar) < lengthOfName(person)) {
            return person;
        }
        else {
            return longestNamePersonSoFar;
        }
    });
}

function lengthOfName(person) {
	var fullName = "";
    if(person.name.middle !== undefined) {
        fullName = person.name.first + person.name.middle + person.name.last;
        console.log(fullName);
    } else {
        fullName = person.name.first + person.name.last;
    }

    return fullName.length;
}
