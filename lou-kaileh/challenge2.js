//Challenge 1
var solarSystem = {
    age: "4.568 billion",
    distance: "27,000 light years",
    comets: 3406,
    planets: {
        Mercury: { size: "0.055 Earth Masses", distance_to_sun: "0.4AU", satellites: 0},
        Venus: { size: "0.815 Earth Masses", distance_to_sun: "0.7AU", satellites: 0},
        Earth: { size: "1 Earth Masses", distance_to_sun: "1AU", satellites: 1},
        Mars: { size: "0.107 Earth Masses", distance_to_sun: "1.5AU", satellites: 2},
        Jupiter: { size: "318 Earth Masses", distance_to_sun: "5.2AU", satellites: 67},
        Saturn: { size: "95 Earth Masses", distance_to_sun: "9.5AU", satellites: 62},
        Uranus: { size: "14 Earth Masses", distance_to_sun: "19.2AU", satellites: 27},
        Neptune: { size: "17 Earth Masses", distance_to_sun: "30.1AU", satellites: 14},
    }
};

//Challenge 2
function range(start, end) {
    result = [];
    for(i = start; i < end; i++) {
        result.push(i);

    }
    return result
}

//Challenge 3
var people = [
 {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
 {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
 {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
 {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
 {name: {first: "Louis", last: "Reasoner"}, age: 21}
];



function longestName(people) {
    var longest = 0;
    var count = 0;
    for(i = 0; i < people.length; i++) {
        var total = people[i].name.first.length + people[i].name.middle.length + people[i].name.last.length;
        if(total > count) {
            longest = i;
            count = total;
        }

    }
    return people[longest];
}
