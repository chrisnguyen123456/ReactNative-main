// BAI3
//Test data:
//§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
//§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
function calculateScore(score1, score2, score3) {
    let averageScore = (score1 + score2 + score3) / 3
    return averageScore
    console.log('The average score is ' + averageScore)
}

calculateScore(96, 108, 89)

let dolphinAverage = Math.round(calculateScore(96, 108, 89))
let koalaAverage = Math.round(calculateScore(109, 900, 106))
console.log(dolphinAverage, koalaAverage);

function checkWiner(dolphinAverage, koalaAverage) {
    if (dolphinAverage > koalaAverage && dolphinAverage > 100)
        console.log(`Dolphin's won! They have ${dolphinAverage} and koala's only have ${koalaAverage}`)
}
if (koalaAverage > dolphinAverage && koalaAverage > 100) {
    console.log(`Koala's won! They have ${koalaAverage} and dolphins only have ${dolphinAverage}.`)
} else {
    console.log("Looks like no one won, let's go again!")
}