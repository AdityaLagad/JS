var fruits = ["banana","apple","oranges","mango","Kiwi"];
console.log("original array ");

console.log(fruits);
console.log("*********************1)1st****************************");

const valueAtIndex2 = fruits[0];
console.log(`first element is: ${valueAtIndex2}`);

console.log("*********************1)Last ****************************");

const valueAtIndex4 = fruits[4];
console.log(`last element is: ${valueAtIndex4}`);

console.log("************************2)Add papaya*************************");

var fruits = ["banana","apple","oranges","mango","Kiwi"];
fruits.unshift("papaya");
console.log(fruits);

console.log("**********************3) removeing mango***************************");
var fruits = ["banana","apple","oranges","mango","Kiwi"];
const splicedArray = fruits.splice(3,)
console.log(splicedArray);
console.log(fruits);

console.log("**********************4 ) inserting pineapple***************************");

fruits.push("pineapple");
console.log(fruits);

console.log("**********************5 ) inserting dragon fruit***************************");
var fruits = ["banana","apple","oranges","mango","Kiwi"];
fruits.splice( 4,0,"dragonfood")
console.log(fruits);

console.log("**********************6 ) replacing***************************");
var fruits = ["banana","apple","oranges","mango","Kiwi"];
fruits.splice(2,0,"chiku")
console.log(fruits);
console.log("***********************7) index from 1 to 4**************************");
var fruits = ["banana","apple","oranges","mango","Kiwi"];
const arrayFromIndex3 = fruits.slice(1)
console.log(arrayFromIndex3);
