function checkCashRegister(price, cash, cid) {
    const currencyValues = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
    
    let changeDue = cash - price;
    let totalCID = 0;
    for (let i = 0; i < cid.length; i++) {
      totalCID += cid[i][1];
    }
    if (totalCID < changeDue) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    if (totalCID === changeDue) {
      return {status: "CLOSED", change: cid};
    }
    let change = [];
    for (let i = cid.length - 1; i >= 0; i--) {
      const currencyName = cid[i][0];
      const currencyValue = currencyValues[currencyName];
      let currencyAmount = cid[i][1];
      let currencyToReturn = 0;
      while (changeDue >= currencyValue && currencyAmount > 0) {
        changeDue -= currencyValue;
        changeDue = Math.round(changeDue * 100) / 100;
        currencyAmount -= currencyValue;
        currencyToReturn += currencyValue;
      }
      if (currencyToReturn > 0) {
        change.push([currencyName, currencyToReturn]);
      }
    }
    if (changeDue > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    return {status: "OPEN", change: change};
  }
  
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);