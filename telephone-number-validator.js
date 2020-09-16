//this function check given string for compliance with US telephone number standards


function telephoneCheck(str) {
  let findNonDigit = /[^\s0-9()-]/ig;
  let findDigit = /\d/g;

  var countDigits = function(str) {
    return str.match(findDigit).length;
  }
  let before = str.indexOf("(");
  let after = str.indexOf(")")


  if (countDigits(str) < 10) {
    console.log("match1");
    return false
  } else if (countDigits(str) > 11) {
    console.log("match2");
    return false
  } else if (findNonDigit.test(str)) {
    console.log("match3");
    return false
  } else if (countDigits(str) == 11 &&str.match(findDigit)[0] !== '1') {
    console.log("match4");
    return false
  } else if (str[0] === "-") {
    console.log("match5");
    return false
  } else if (before >= 0 && str[before+4] !== ")" ) {
    console.log("match6");
    return false
  } else if (after >= 0 && str[after-4] !== "(" ) {
    console.log("match7");
    return false
  }
    return true;

  }
  
  
  

telephoneCheck("1 555)555-5555");
