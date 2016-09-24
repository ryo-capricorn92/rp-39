//your code here!
//1
var solarSystem = { age: 4568000000,
                    "distance from center of galaxy": "27000 +/- 1000 ly",
                    comets: 3406,
                    planets: [  {   name: "Mercury",
                                    size: .055,
                                    distance: 29000000,
                                    satellites: 0
                                },
                                {   name: "Venus",
                                    size:.815,
                                    distance: 67000000,
                                    satellites: 0
                                },
                                {   name: "Earth",
                                    size: 1,
                                    distance: 93000000,
                                    satellites: 1
                                },
                                {   name: "Mars",
                                    size: .107,
                                    distance: 143000000,
                                    satellites: 2
                                },
                                {   name: "Jupiter",
                                    size:317.8,
                                    distance: 483800000,
                                    satellites: 67
                                },
                                {   name: "Saturn",
                                    size: 95.159,
                                    distance: 888200000,
                                    satellites: 62
                                },
                                {   name: "Uranus",
                                    size: 14.536,
                                    distance: 1787000000000,
                                    satellites: 27
                                },
                                {   name: "Neptune",
                                    size: 17.147,
                                    distance: 2795000000000,
                                    satellites: 14
                                }
                                ]
                };
console.log(solarSystem);
//2
function range(start,end){
    var arr =[];
    var num = start;
    if(start>=end){
        return arr;
    }
    for(var i =start;i<end;i++){
        arr.push(num++);
    }
    return arr;
}
//3
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];
function fullName(obj){
    if("middle" in obj["name"]){
    return obj["name"]["first"].length+obj["name"]["middle"].length+obj["name"]["last"].length;
}
else {
    return obj["name"]["first"].length+obj["name"]["last"].length;
}
}
function longestName(arr) {
  var name= 0;
  for(var i=0;i<arr.length;i++){
    if(fullName(arr[i])>name){
        name = fullName(arr[i]);
    }
    for(var j=0;j<arr.length;j++){
        if(fullName(arr[j]===name)){
            return arr[j];
        }
    }
  }
}
console.log(longestName(people));
