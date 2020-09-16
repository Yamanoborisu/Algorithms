//make Fibonacchi array, from 1 to given number, and sum all elements


function sumFibs(num) {
  
  function makeFibonacchiArray(num) {
  let fibArr = [1];
  let i = 1;
  let arrCount = 1;
  while (i <= num) {
  fibArr.push(i);
  i = i + fibArr[arrCount-1];
  arrCount++
  }
  return fibArr;
  }
  

  function isOdd(elem) {
    if (elem % 2) {return true}
  }


  let oddFibonacchi = makeFibonacchiArray(num).filter(isOdd);
  console.log("oddFibonacchi array = " + oddFibonacchi);

  let result = oddFibonacchi.reduce((a, b) => a + b);
  console.log("sum of all elements is " + result);
  
  return result;
}

sumFibs(4);
