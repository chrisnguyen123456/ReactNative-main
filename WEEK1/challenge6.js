function calcTip(meal) {
    if (meal > 50 && meal < 300) {
      const tip = meal * .15
      totalCost = tip + meal
      console.log("The meal will cost "+ meal + " and the tip will be " + tip + ". This means the total cost will be " + totalCost + ".");
  
    } else {
      const tip = meal * .20
      totalCost = tip + meal
      console.log("The meal will cost "+ meal + " and the tip will be " + tip + ". This means the total cost will be " + totalCost + ".");
  }
  }
  const bills = [125, 555, 44];
  const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
  const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
  
  console.log(bills);
  
  bills.push(122)
  tips.push(calcTip(bills[3]))
  
  
  bills.push(258)
  tips.push(calcTip(bills[4]))
  
  console.log(bills);
  
  bills.pop()
  
  console.log(bills);
  
  calcTip(bills[2])