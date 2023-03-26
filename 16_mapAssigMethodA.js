
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

const newArray = arrayNumbers.map((num) => num + 10);
console.log(newArray);


const newMul = arrayNumbers.map((num) => num ** 2);
console.log(newMul);

const indexArry = arrayNumbers.map((num, index) => num + index);
console.log(indexArry);
