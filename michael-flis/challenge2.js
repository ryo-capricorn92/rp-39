//your code here!


//CHALLENGE 2

//EXERCISE 1

function makeSolarSystem (age, distanceToCenter, comets, planets) {
    return {
        age: age,
        distanceToCenter: distanceToCenter,
        comets: comets,
        planets: planets {
            name: name,
            size: size,
            distanceSun: distanceSun,
            satellites: satellites
        }
    }
}

var solar = makeSolarSystem("4.568 billion years", 2700, 3406, []);

function makePlanets (planetNum) {
    return makeSolarSystem.planets[];
}

var planet1 = makePlanet("mercury", , , );
var planet2 = makePlanet("venus", , , );
var planet3 = makePlanet("earth", , , );
var planet4 = makePlanet("mars", , , );
var planet5 = makePlanet("jupiter", , , );
var planet6 = makePlanet("venus", , , );
var planet7 = makePlanet("uranus", , , );
var planet8 = makePlanet("neptune", , , );



//not completed, not correct, ran out of time....




//EXERCISE 2

function range(start, end) {
  var result = [];
  for (i = 0; i<= end; i++) {
    result.push(start + i);
  }
  return result;
}


range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []

//not completed, not correct, ran out ot time
