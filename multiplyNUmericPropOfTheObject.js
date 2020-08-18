let parameter = {
  width: 200,
  height: 300,
  title: "My room"
};

function multiplyNumeric (obj) {
for (let key in obj) {
if (typeof obj[key] == "number") {
obj[key] *= 2}  
}
}

multiplyNumeric(parameter);

console.log(parameter);
