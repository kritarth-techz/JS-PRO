// ARRAY


const myHeros = ["spiderman","ironman","thor"]
    console.log(myHeros[1]);
const myArr = [1,2,3,4,5]
console.log(myArr[3]);


// ARRAY METHODS

myArr.push(6)
// // myArr.push(7)
// // myArr.pop()

// // myArr.unshift(9)
// myArr.shift()
console.log(myArr.includes(9));
console.log(myArr);

// slice, splice

const myArr2 = [1,2,3,4,5]
const myn1 = myArr2.slice(1, 4)
console.log("A", myn1);

const myn2 = myArr2.splice(1,4)
console.log("B", myn2);


const myMarvelH = ["spiderman","ironman","thor"]

const myDcH = ["batman","superman","flash"]
myMarvelH.push(myDcH)

const allheros= myDcH.concat(myMarvelH)
console.log(myMarvelH);
console.log(allheros);

const all_new_heros = [...myMarvelH, ...myDcH]
console.log(all_new_heros);

console.log(Array.from("kritarth"));