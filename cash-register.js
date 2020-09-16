//this function calculate change forom cash-mashine, and return names of coins and bills
// to return and amount of money which will be returned by each type of coin/bill

function checkCashRegister(price, cash, cid) {
  //create output object
  function StatusObj(a, b) {
    this.status = a;
    this.change = b;
  }
  //define variables for output
  let change = cash - price;
  let status = null;
  
  //calculate cash balance
  function sumAll(cid) {
    let result = 0;
    for (let i = 0; i < cid.length; i++) {
    result += cid[i][1]; 
  }
    return result.toFixed(2); //because of features of JS with decimal 
  }

  let cashAmount = sumAll(cid); //get cash ballance
 
  if (change > cashAmount) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else {

  let names = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  
 
  //make deep clone of cid
  let newCid = [];
  cid.forEach(function(elem) {
    let tempArr = elem.slice();
    newCid.push(tempArr);
    });

//rename text keys to coin denomination
  for (let i = 0; i < newCid.length; i++) {
    newCid[i][0] = names[newCid[i][0]];
  }
  //check can we use current coin for giving change or not will be performed from the large to tiny, so reverse it
  let reversedCid = newCid.reverse();

  //create another deep clone of cid for output
  //set "values" (arr[a][1]) to 0
  let changeArr = [];
  cid.forEach(function(elem) {
    let tempArr = elem.slice();
    changeArr.push(tempArr);
    });
  for (let a = 0; a < changeArr.length; a++) {
   changeArr[a][1] = 0;
 }
  changeArr = changeArr.reverse();



 
    let stillChange = change.toFixed(2);
   
    let c = 0;
    
    while (stillChange > 0&&c < newCid.length) {
       
          if (newCid[c][0] > stillChange) {
            c++;
            continue;
          } else {
            if (newCid[c][1] == 0) {
              c++;
              continue;
            } else {
              changeArr[c][1] = Number((changeArr[c][1] + newCid[c][0]).toFixed(2));
              newCid[c][1] -= newCid[c][0];
              stillChange = (stillChange - newCid[c][0]).toFixed(2);
              
              if (newCid[c][1] !== 0) {
                continue;

              } else {
                c++;
                continue;
              }
             
            }
          }


      
    } //while end



let amountAfterCalc = sumAll(newCid);
 if (amountAfterCalc == 0) {
   status = "CLOSED";
   change = changeArr.reverse();
 } else {
   status = "OPEN";
   let result = [];
    for (let k = 0; k < changeArr.length; k++) {
      if (changeArr[k][1] !== 0) {
        
        result.push(changeArr[k]);
      }
    }
   change = result;
 }

if (stillChange > 0) {
  status = "INSUFFICIENT_FUNDS";
  change = [];
}

} //end of else from 25 string 
 

 

  //call constructor, and output its result 
  let output = new StatusObj(status, change);
  return output;
  }

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
