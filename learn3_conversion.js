let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33abc" => NaN
// null => 0
let isLoggedIn = "kritarth"
let booleaIsLoggedIn = Boolean(isLoggedIn);
console.log(booleaIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "kritarth" => true

let someNumber =33

let stringNumber = String(someNumber)
console.log( stringNumber);
console.log(typeof stringNumber);


//************* OPERATION **************//

let value = 3
let negValue = -value
console.log(negValue);

let str1 ="kritarth"
let str2 = " mandle"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2 +2); // this not add that convert string

console.log(+true) // this is not good but example for  known