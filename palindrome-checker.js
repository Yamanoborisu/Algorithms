function palindrome(str) {
let low = str.toLowerCase();
let regex = /[^a-z0-9]/g;

let onlyLetters = low.replaceAll(regex, "");


let arr = onlyLetters.split('');
let reverceStr = arr.reverse().join('');

console.log(onlyLetters);
console.log(reverceStr);

  return (onlyLetters == reverceStr) 
}



palindrome("1 eye for of 1 eye.");
