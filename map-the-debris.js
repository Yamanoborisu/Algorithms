//calculate orbital period of [Earth] satellite by given average altitude 

function orbitalPeriod(arr) {
  
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let newArr = [];
  let getOrbPeriod = function(obj) {
    let a = 2 * Math.PI;
    let c = Math.pow(earthRadius + obj.avgAlt, 3);
    let b = Math.sqrt(c/GM);
    let orbPeriod = Math.round(a * b);
    console.log(orbPeriod);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj
  } 

for (var elem in arr) {
  newArr.push(getOrbPeriod(arr[elem]))
}
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
