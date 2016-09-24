var solarSystem = {
    age: "4.568 billion years",
    distanceToGalacticCenter: "27,000 ly",
    numberOfKnownComets: 3406,
    planets: [
    {
        name: "Mercury",
        sizeInEarthMasses: 0.055,
        distanceFromSuninAU: .4,
        knownSatellites: 0
    },
    {
        name: "Venus",
        sizeInEarthMasses: .815,
        distanceFromSuninAU: .7,
        knownSatellites: 0
    },
    {
        name: "Earth",
        sizeInEarthMasses: 1,
        distanceFromSuninAU: 1,
        knownSatellites: 1
    },
    {
        name: "Mars",
        sizeInEarthMasses: .107,
        distanceFromSuninAU: 1.5,
        knownSatellites: 2
    },
    {
        name: "Jupiter",
        sizeInEarthMasses: 318,
        distanceFromSuninAU: 5.2,
        knownSatellites: 67
    },
    {
        name: "Saturn",
        sizeInEarthMasses: 95,
        distanceFromSuninAU: 9.5,
        knownSatellites: 62,
    },
    {
        name: "Uranus",
        sizeInEarthMasses: 14,
        distanceFromSuninAU: 19.2,
        knownSatellites: 27
    },
    {
        name: "Neptune",
        sizeInEarthMasses: 17,
        distanceFromSuninAU: 30.1,
        knownSatellites: 14
    }
    ]
}

function range (start, end) {
    var newArray = [];
    for (var i = start; i < (end - start); i++) {
        newArray.push(i);
    }
    return newArray;
}

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function fullName (person) {
    return person.name.first + " " + person.name.middle + " " + person.name.last;
}

function longestName (array) {
    var maxCount = 0;
    var longestName = " ";
    for (var i = 0; i < array.length; i++) {
        if (fullName(array[i]).length > maxCount) {
            maxCount = array[i].length;
            longestName = array[i];
        }
    }
    return longestName;
};
