function isEmpty (obj) {
let propArray = Object.keys(obj);
return (propArray.length == 0) ? true : false;
}



or 

function isEmpty(obj) {
  for (let key in obj) {
    // if body is began to execute then prop exist
    return false;
  }
  return true;
}
