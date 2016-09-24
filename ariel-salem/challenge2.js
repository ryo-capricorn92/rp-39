function planets(name, mass, dist, satellites) {
    return {
        name: name,
        mass: mass,
        dist: dist,
        satellites: satellites
    }
};

var Mercury = planets("Mercury", 0.055, 0.4, 0);
var Venus = planets("Venus", 0.815, 0.7, 0);
var Earth = planets("Earth", 1, 1, 1);
var Mars = planets("Mars", 0.107, 1.5, 2);

var innerPlanets = [Mercury, Venus, Earth, Mars];

var solarsystem = {
    age: "4.6 billion",
    distance: "27,000,000 LY",
    comets: 3406,
    innerPlanets
}


//QUESTION 2 --> Not sure what's wrong
function range(start, end) {
    var array = [];
    for (i = 0; i < end; i++) {
        if (start === end || start > end) {
            return [];
        }
        else {
            array[i] = start + i;
        }
    }
    return array;
}

//QUESTION 3
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function longestName(people) {
    var longer = [];
    for (i = 0; i < people.length; i++) {
        if (people[i][name].length > people[name].length) {
            people[name].length = people[i][name].length;
            longer = people[name].length;
        }
    }
    return longer;
}

longestName(people);
