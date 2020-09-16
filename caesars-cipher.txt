// ROT13 cipher decoder

function rot13(str) {
  let arr = str.split(" ");
  let decrypted = [];
  arr.forEach(function(element) {
    for (let i = 0; i < element.length; i++) {
      let x = element.charCodeAt(i);
     if (x < 65 || x > 90) {
       decrypted.push(String.fromCharCode(x));
     } else if (x - 13 < 65) {
        decrypted.push(String.fromCharCode(x-13+26));
      } else {
        decrypted.push(String.fromCharCode(x-13));
      }
    }
    decrypted.push(String.fromCharCode(32))
   
  });

  decrypted.pop();

  return decrypted.join("");
}


rot13("SERR CVMMN!");
