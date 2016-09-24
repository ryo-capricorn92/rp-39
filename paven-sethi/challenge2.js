// Challenge 2

// 1

// An object, solarSystem, where each planet is it's own array
// totally forgot how to assign labels to the properties inside an array and then include them in an object


var solarSystem = {
    ageInBillions: 4.568,
    distanceFromCenter: 27000,
    numberKnownComets: 3406;
    planets: [name, size, distanceFromEachSun, numberKnownSatellites];
};

// 2

// parameters = two integers
// returns array containing whole numbers between them

function range(start, end){

    result = [];
    for (i = 0; i < end; i++) {
        return result + start;
    }
}


// 3

// add first, middle, last names of each array or possibly cut age out of the array and then do name.length?

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function longestName(people) {
    for (i = 0; i < people.length - 1; i++) {
        if ((first.name.length[i] + middle.name.length[i] + last.name.length[i]) > (first.name.length[i+1] +
            middle.name.length[i+1] + last.name[i+1].length)){
                return first.name[i] + middle.name[i] + last.name[i];
        } else if {
            ()
        }
    }
}
