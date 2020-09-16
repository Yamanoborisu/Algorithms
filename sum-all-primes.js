//find all prime numbers from 2 to argument and return sum of all

function sumPrimes(num) {
  

function primeCheck(elem) {
 if (elem <= 1)
        return false;
    else if (elem === 2)
        return true;
    else {
        for (let i = 2; i < elem; i++){
            if (elem % i === 0) {
                return false;
            }
        }
        return true;
    }
}

  let wholeNumArr = [];
  for (let j = 2; j <= num; j++) {
    wholeNumArr.push(j);
    }
  
  let primes = wholeNumArr.filter(primeCheck);
  console.log(primes);

  let result = primes.reduce((a,b) => a + b)
  console.log(result);   
  return result;
}

sumPrimes(10);
