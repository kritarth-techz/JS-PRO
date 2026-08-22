const name = "kritarth"
const repoCount = 50

// console.log(name +  repoCount +"value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('kritarth')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'))

const newStrinng = gameName.substring(0,4)
console.log(newStrinng)

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString = ("   kritarth   ")
console.log(newString)
console.log(newString.trim())


const url = "https://kritarth.com/kritarth%20mandle"

console.log(url.replace('%20',' '))
console.log(url.replace('%20','_'))
console.log(url)