const accountId =12333
let accountEmail = "kritarth@gmail.com"
var accountPassword = "220"
accountcity = "gunderdehi" // this is not a good practice to declare a variable without var, let or const. It will create a global variable and can lead to unexpected behavior in your code.//

// accountId =12 // not allowed because accountId is a constant

/*
comments are used to explain the code and make it more readable. They are ignored by the JavaScript engine and do not affect the execution of the code.
*/
console.log(accountId);

accountEmail = "krit@gmaikl.com"
accountPassword = "1234"
accountcity = "raipur"
let accountstate;
console.table([accountId, accountEmail, accountPassword, accountcity,accountstate]) // this will print the values of the variables in a table format in the console. It is a good practice to use console.table() for better visualization of data.//;