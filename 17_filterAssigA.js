const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const greaterThan50 = arrayNumbers.filter((num) => num > 50);
console.log("the numbers which are greater than 50:",greaterThan50);

const evenNumbers = arrayNumbers.filter((num) => num % 2 === 0);
console.log("all the even numbers",evenNumbers);

const oddNumbers = arrayNumbers.filter((num) => num % 2 !== 0);
console.log("all the odd numbers",oddNumbers);

const multipleOf5 = arrayNumbers.filter((num) => num % 5 === 0);
console.log("all the numbers which are multiple of 5",multipleOf5);

const between20And50 = arrayNumbers.filter((num) => num > 20 && num < 50);
console.log("all numbers which are between 20 and 50:",between20And50);