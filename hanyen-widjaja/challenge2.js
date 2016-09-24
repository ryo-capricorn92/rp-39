var solarSystem = {
	age: 4568000000000,
	mass: 1.0014,
	star: 1,
	distance: 27000,
	comets: 3406,
	satelites: 470,
	orbitalSpeed: 220,
	planets:{
		mercury: {
			mass: 0.055,
			distanceFromSun:46000000,
			satelites: 0
		},
		venus: {
			mass: 0.815,
			distanceFromSun:108000000,
			satelites: 0
		},
		earth: {
			mass: 1,
			distanceFromSun:150000000,
			satelites: 3
		},
		mars: {
			mass: 0.107,
			distanceFromSun:230000000,
			satelites: 2
		},
		jupiter: {
			mass: 317.8,
			distanceFromSun:778000000,
			satelites: 67
		},
		saturn: {
			mass: 95.159,
			distanceFromSun:1400000000,
			satelites: 62
		},
		uranus: {
			mass: 34,
			distanceFromSun:345,
			satelites: 3
		},
		neptune: {
			mass: 34,
			distanceFromSun:345,
			satelites: 3
		}
	}
};



function range (start, end) {
	var result =[];
	for (start; start<end; start++) {
		result.push(start);
	}
	return result;
}




var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Lou", last: "Reasoner"}, age: 21}
];

function longestName(peopleArray) {
  // TODO: Your code here
  var fullNameString="";
  var lengthArray=[];
  var longestObj = peopleArray[0]; //set 1st element as the longest
  var longestChar = fullName(peopleArray[0]).length; //pass 1st object and get the length

  for (var i=1; i<peopleArray.length; i++) {
  	//call fullName function to concatenate and then capture it in a new var
  	fullNameString = fullName(peopleArray[i]);

  	if (fullNameString.length>longestChar) {
  		longestObj = peopleArray[i];
  	}
  } return longestObj;
}

function fullName(personObject) {
	//concatenate name
	//NEED TO CHECK IF MIDDLE NAME EXIST
	if (personObject.name.middle !== undefined) {
		return personObject.name.first+personObject.name.middle+personObject.name.last;
	} else {
		return personObject.name.first+personObject.name.last;
	}
}
