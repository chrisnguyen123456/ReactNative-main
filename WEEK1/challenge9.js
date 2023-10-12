var temperatures = [17, 21, 23]
var printForecast = (arr) => {
    var rs = '...'
    for(let i = 0; i < arr.length; i++) {
        rs += ` ${arr[i]}oC in ${i} days ...`
    }
    console.log(rs)
}
printForecast(temperatures)

var calcAverage = (arr) => {
    n = arr.length;
    sum = 0;
    for (i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum / n;
}
