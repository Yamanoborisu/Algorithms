// check if given property return true (or exist) in given obj 

function truthCheck(collection, pre) {
  let forCheck = [];
  for (let i = 0; i < collection.length; i++) {
    forCheck.push(collection[i][pre])
  }
  // console.log(forCheck);
  if (forCheck.length < collection.length) {
    return false
  } else {
    return forCheck.every(elem => Boolean(elem));
  }

}

console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat"));
