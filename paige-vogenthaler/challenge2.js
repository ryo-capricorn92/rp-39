//1.
var solarSystem = {
  age: "4.6 billion",
  distanceFromCenterOfGalaxy: "27,000 light years",
  numberOfComets: 5253,
  planets : [
    {
      name: "Mercury",
      size: 0.055,
      distanceFromSun: 0.4,
      satellites: 0
    },
    {
      name: "Venus",
      size: 0.815,
      distanceFromSun: 0.7,
      satellites: 0
    },
    {
      name: "Earth",
      size: 1,
      distanceFromSun: 1,
      satellites: 1
    },
    {
      name: "Mars",
      size: 0.107,
      distanceFromSun: 1.5,
      satellites: 2
    },
    {
      name: "Jupiter",
      size: 318,
      distanceFromSun: 5.2,
      satellites: 67
    },
    {
      name: "Saturn",
      size: 95,
      distanceFromSun: 9.5,
      satellites: 62
    },
    {
      name: "Uranus",
      size: 14,
      distanceFromSun: 19.2,
      satellites: 27
    },
    {
      name: "Neptune",
      size: 17,
      distanceFromSun: 30.1,
      satellites: 14
    }
  ]
}


//2.
function range(start, end) {
  var array = [];
  for (var i = start; i < end; i++) {
    array.push(i);
  }
  return array;
}


//3.
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function fullName(obj) {
  obj.name.middle = obj.name.middle || "";
  if (obj.name.middle[1] === ".") {
    obj.name.middle = obj.name.middle.slice(0, 1)
  }
  return obj.name.first + obj.name.middle + obj.name.last;
}

function longestName(arr) {
  var length = 0;
  var name = {};
  for (var i = 0; i < arr.length; i++) {
    if (fullName(arr[i]).length > length) {
      length = fullName(arr[i]).length;
      name = arr[i];
    }
  }
  return name;
}
