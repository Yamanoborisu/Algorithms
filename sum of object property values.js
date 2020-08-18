let someNumbers = {
  A: 100,
  B: 160,
  C: 130
}

function valuesSum (obj) {
let sum = 0;
for (let key in obj) {
sum += obj[key];   //  .key won't work
}
return sum;
}

console.log(valuesSum(someNumbers) );
