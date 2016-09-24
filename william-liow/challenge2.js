//your code here!

//1
var solarSystem = {
    age: "4.6 billion years old",
    distanceFromCenter: "27000 ly",
    numberOfComets: 3406,
    planets: [
    {name: "Mercury",
    size: "7.48*10^7 km",
    distanceFromSun: "35.98 million mi",
    knownSatellites: "None"},
    {name: "Venus",
    size: "12,100 mi",
    distanceFromSun: "67.2 million mi",
    knownSatellites: "None"},
    {name: "Earth",
    size: "12,800 mi",
    distanceFromSun: "93 million mi",
    knownSatellites: 1381},
    {name: "Mars",
    size: "6,800 mi",
    distanceFromSun: "142 million mi",
    knownSatellites: 2},
    {name: "Jupiter",
    size: "143,000 mi",
    distanceFromSun: "484 million mi",
    knownSatellites: 67},
    {name: "Saturn",
    size: "125,000 mi",
    distanceFromSun: "887 million mi",
    knownSatellites: 62},
    {name: "Uranus",
    size: "51,100 mi",
    distanceFromSun: "1,784 million mi",
    knownSatellites: 27},
    {name: "Neptune",
    size: "49,500 mi",
    distanceFromSun: "2,794 million mi",
    knownSatellites: 14}
    ]
}

 //2
function range(start, end) {
    var arr = [];
    if(start>=end) {
        return arr;
    } for(var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

//3
function longestName(people) {
    var longestName=fullName()
}

function fullName(people) {
    for(var i = 0; i<people.length; i++) {
        var fullName = "";
        for (var key in people[i].name) {
            fullName += people[i].name[key]
        }

    }
}
