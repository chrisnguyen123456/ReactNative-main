var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
var tips = []
var totals = []
for(let i = 0; i < bills.length; i++) {
    var tip = calcTip(bills[i])
    tips.push(tip);
    totals.push(bills[i] + tip)
}
console.log(tips)
console.log(totals)
// use calcAverage task 5
var avg = calcAverage(totals)
console.log(avg)