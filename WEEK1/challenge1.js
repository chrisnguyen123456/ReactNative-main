//Bai1,2
//Data 1:
let heightMark = 1.69;
let weightMark = 78;
let BMIMark = weightMark / (heightMark ** 2);

let heightJohn = 1.95;
let weightJohn = 92;
let BMIJohn = weightJohn / (heightJohn ** 2);

markHigherBMI = BMIMark > BMIJohn;
if (markHigherBMI) {
    console.log("Mark's BMI (" + BMIMark + ") is higher than John's BMI (" + BMIJohn + ")")
} else {
    console.log("John's BMI (" + BMIJohn +
        ") is higher than Mark's BMI (" + BMIMark + ")")
}

//Data 2:-
heightMark = 1.88;
weightMark = 95;
BMIMark = weightMark / (heightMark ** 2);

heightJohn = 1.76;
weightJohn = 85;
BMIJohn = weightJohn / (heightJohn ** 2);

markHigherBMI = BMIMark > BMIJohn;

if (markHigherBMI) {
    console.log("Mark's BMI (" + BMIMark + ") is higher than John's BMI (" + BMIJohn + ")")
} else {
    console.log("John's BMI (" + BMIJohn +
        ") is higher than Mark's BMI (" + BMIMark + ")")
}