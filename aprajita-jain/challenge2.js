//your code here!
//1
var solaeSystem={
    ageSolarSystem:'4.568 billion years',
    distanceGalaxy: '50 AU',
    numberComets:   3,406 ,
    thePlanet:[{
        name:'mercury',
        size: 0.055 ,
        distanceOfSun:'0.4 AU',
        numberSatelites: 'no'
    },
    {
        name:'jupiter',
        size: '318',
        distanceOfSun:'5.2 AU',
        numberSatelites: 67
    },
    {
        name:'venus',
        size: 0.815 ,
        distanceOfSun:'0.7 AU',
        numberSatelites: 'no'
    }
    ]
}
//2
function range(start, end){
    var arrRange=[]
    for(var i = start; i<end; i++){
        arrRange.push(i)
    }
    return arrRange
}
range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []
//3
var people = [
  {
    name: {
        first: "Alyssa",
        middle: "P.",
        last: "Hacker"
    },
    age: 26
  },
  {
    name: {
        first: "Ben",
         last: "Bitdiddle"
        },
        age: 34
    },
  {
    name: {
        first: "Eva",
        middle: "Lu",
        last: "Ator"
    },
    age: 40},
  {
    name: {
        first: "Lem",
        middle: "E.",
        last: "Tweakit"
    },
    age: 45
  },
  {
    name: {
        first: "Louis",
        last: "Reasoner"
    },
    age: 21
  }
];
function longestName(people) {
    var length1 = 0;

    for (var i = 0; i < people.length; i++) {
        if (length1 < (people[i].name.first + " " + people[i].name.middle + " " + people[i].name.last).length) {
        length1 = (people[i].name.first + " " + people[i].name.middle + " " + people[i].name.last).length
    }
}
return (people[i].name.first + " " + people[i].name.middle + " " + people[i].name.last)
}
console.log(longestName(people));
