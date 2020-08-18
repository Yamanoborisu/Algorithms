function isEmpty (obj) {
let propArray = Object.keys(obj);
return (propArray.length == 0) ? true : false;
}