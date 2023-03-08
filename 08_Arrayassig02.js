console.log("original array");
const arrayNum = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNum);
"-------------------------------------------------------------"
console.log("****step1****");
console.log("total element avilable in array:",arrayNum.length); 

console.log("****step2****");
const first = arrayNum[0];
console.log("first element is:",first);
const last = arrayNum[arrayNum.length-1];
console.log("last element is:",last);

console.log("****step 3****");
const Tlast = arrayNum[arrayNum.length-3];
console.log("last element is:",Tlast);

console.log("****step 4****");
var index=0
while (index<arrayNum.length) {
    const element = arrayNum[index]
    if (element%2==0) {
        console.log(element);
    }
    index++;
}


console.log("****step 5****");
var index=0
while (index<arrayNum.length) {
    const element = arrayNum[index]
    if (element%2==1) {
        console.log(element);
    }
    index++;
}

console.log(`****** Step 6 *****`);
let evenSum = 0;
for (let index = 0; index < arrayNum.length; index++) {
  const element = arrayNum[index];
  if (element % 2 == 0) {
    evenSum = evenSum + element;
  }
}
console.log(`Sum of all even elements is: ${evenSum}`);

console.log(`****** Step 7 *****`);
let oddSum = 0;
for (let index = 0; index < arrayNum.length; index++) {
  const element = arrayNum[index];
  if (element % 2 != 0) {
    oddSum = oddSum + element;
  }
}
console.log(`Sum of all odd elements is: ${oddSum}`);

console.log(`****** Step 8 *****`);
allNumsSum = 0;
for (let index = 0; index < arrayNum.length; index++) {
  const element = arrayNum[index];
  allNumsSum = allNumsSum + element;
}
console.log(`Sum of all elements is: ${allNumsSum}`);

console.log("****step 9****");

const multiplesOfFive = [];

for (let i = 0; i < arrayNum.length; i++) {
  if (arrayNum[i] % 5 === 0) {
    multiplesOfFive.push(arrayNum[i]);
  }
}

console.log("the numbers which are multiple of 5:",multiplesOfFive);

console.log("****step 10****");

const numberToCheck = 115;
const isNumberAvailable = arrayNum.includes(numberToCheck);
console.log("Is number 115 available in arrayNumbers:",isNumberAvailable);

console.log("****step 11****");

console.log(`Is number 23 available in arrayNumbers:": ${arrayNum.includes(23)}`);


console.log("****step 12****");

arrayNum.splice(3, 0, 55, 66);
console.log(arrayNum);

console.log("****step 13****");


arrayNum.splice(4, 3);
console.log(arrayNum);