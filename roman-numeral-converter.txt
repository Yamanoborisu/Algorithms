//can convert numbers to Roman from 1 to 3999, return string

function convertToRoman(num) {
 
 let romans = {     
  1 : {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
  },  
  2 : {
    1: "X",
    2: "XX",
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXX",
    8: "LXXX",
    9: "XC",
  },
  3 : {
    1: "C",
    2: "CC",
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCCC",
    9: "CM",
  }, 
  4 : {
    1: "M",
    2: "MM",
    3: "MMM",
    },     
};


 let arr = String(num).split('');
 let numberArr = [];
 arr.forEach((elem) => numberArr.push(Number(elem)))

 // because we will fill result arr, transforming original number from rigth to left, we need reverse an array
 let reversed = numberArr.reverse();

let romansArr = [];

for (let i = 1; i <= reversed.length; i++) {
  romansArr.unshift(romans[i][reversed[i-1]])
}

let result = romansArr.join('')



return result

}

convertToRoman(16);
