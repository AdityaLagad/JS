const arrayNum =  [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

arrayNum.forEach((num,index) => console.log(`element at indes ${index}: ${num}`));

const positiveNum = [];
arrayNum.forEach(num => {
    if(num > 0){
        positiveNum.push(num);
    }
})
console.log(positiveNum);
console.log("*************************************************");
const negitiveNum = [];
arrayNum.filter(num => {
    if(num < 0){
        negitiveNum.push(num);
    }
})
console.log(negitiveNum);
console.log("*************************************************");

const evenNum = [];
arrayNum.forEach(num => {
    if(num%2 == 0){
        evenNum.push(num);
    }
})
console.log(evenNum);

console.log("*************************************************");

const sum = arrayNum.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  
  console.log("the sum is :",sum);

  console.log("*************************************************");

arrayNum.forEach((Number,index) => {
    if (index%2===0){
        console.log(Number);
    }
    
});
