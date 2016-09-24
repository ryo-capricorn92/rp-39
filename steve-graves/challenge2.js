var solarSystem = {
    age: 4568000000,
    distanceFromGalaxyCenter: "2700 light years",
    knownComets: 3406,
    mercury: {
        name: "Mercury",
        size: 0.055,
        distanceFromSun: 0.4,
        numberofSatellites: 0,
    },
    venus: {
        name: "Venus",
        size: 0.815,
        distanceFromSun: 0.7,
        numberofSatellites: 0
    },
    earth: {
        name: "Earth",
        size: 1,
        distanceFromSun: 1,
        numberofSatellites: 1
    },
    mars: {
        name: "Mars",
        size: 0.107,
        distanceFromSun: 1.5,
        numberofSatellites: 2
    },
    jupiter: {
        name: "Jupiter",
        size: 318,
        distanceFromSun: 5.2,
        numberofSatellites: 67
    },
    saturn: {
        name: "Saturn",
        size: 95,
        distanceFromSun: 9.5,
        numberofSatellites: 62
    },
    uranus: {
        name: "Uranus",
        size: 14,
        distanceFromSun: 19.2,
        numberofSatellites: 27,
    },
    neptune: {
        name: "Neptune",
        size: 17,
        distanceFromSun: 30.1,
        numberofSatellites: 14
    }
}
function range(start, end) {
    var newArray = [];
    while(start < end) {
        newArray.push(start);
        start++;
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
function fullName(person) {
    if(person.middle === undefined){
        return person.first + " " + person.last;
    } else {
        return person.first + " " + person.middle + " " + person.last;
    }

}
function longName(people) {
    var newObj = {name: {first: "", middle: "", last: ""}, age: 0};
    for(var key in people) {
        if(fullName(people[key].name).length > fullName(newObj.name).length) {
            newObj = people[key];
        }
    }
    return newObj;
}
