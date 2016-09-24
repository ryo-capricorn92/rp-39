// PROBLEM 1

var solarSystem = {
    age: 4568000000,
    distanceFromCenter: "27000 ± 1000 ly",
    comets: 3406,
    planets: [
        {name: "Mercury", size: 0.055, distanceFromSun: 0.4, satellites: 0},
        {name: "Venus", size: 0.815, distanceFromSun: 0.7, satellites: 0},
        {name: "Earth", size: 1, distanceFromSun: 1, satellites: 1},
        {name: "Mars", size: 0.107, distanceFromSun: 1.5, satellites: 2},
        {name: "Jupiter", size: 318, distanceFromSun: 5.2, satellites: 67},
        {name: "Saturn", size: 95, distanceFromSun: 9.5, satellites: 62},
        {name: "Uranus", size: 14, distanceFromSun: 19.2, satellites: 27},
        {name: "Neptune", size: 17, distanceFromSun: 30.1, satellites: 14},
    ]
}


// PROBLEM 2

function range (start, end) {
    var rangeArray = [];
    for (var i = start; i < end; i++) {
        rangeArray.push(i)
    }
    return rangeArray;
}


// PROBLEM 3

function fullName(person) {
    if (!person.name.middle) {
        return person.name.first + " " + person.name.last;
    }
    return person.name.first + " " + person.name.middle + " " + person.name.last;
}

function longestName (arrayOfPeople) {
    var longest = arrayOfPeople[0];
    for (var i = 1; i < arrayOfPeople.length; i++) {
        if (fullName(arrayOfPeople[i]).length > fullName(longest).length)
            longest = arrayOfPeople[i];
    }
    return longest;
}
