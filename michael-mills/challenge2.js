var solSystem = {
    age:4600000000,
    distFromGalCoreLY:26500,
    numOfComets:3406,
    planets: {
        mercury:{
            dist:0.4,
            mass:0.055,
            sats:0
        },
        venus:{
            dist:0.7,
            mass:0.815,
            sats:0
        },
        earth:{
            dist:1,
            mass:1,
            sats:1
        },
        mars:{
            dist:1.5,
            mass:0.107,
            sats:2
        },
        jupiter:{
            dist:5.2,
            mass:318,
            sats:67
        },
        saturn:{
            dist:9.5,
            mass:95,
            sats:62
        },
        uranus:{
            dist:19.2,
            mass:14,
            sats:27
        },
        neptune:{
            dist:30.1,
            mass:17,
            sats:14
        }
    }
};
function range(start, end){
    if (end > start){
        var x = end;
        end = start;
        start = x;
    }
    var answer = [start];
    for (var i = 0; i < end; i ++){
        answer.push(i);
    }
    return answer;
}
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];
function longestName(people){
    var answer = {};
    var longest = '';
    for (var i=0; i<people.length; i++){
        var test = (people[i].name['first'] + ' ' + people[i].name['middle'] + ' ' + people[i].name['last']).length
        if (test> longest.length){
            answer = people[i].name;
        }
    }
    return answer;
}
