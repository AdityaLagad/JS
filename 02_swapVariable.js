// 1st Question
console.log("****** step 1 ******");

var sweety = "Sweety";
var cutie = "Cutie";
console.log("----- Before Swap -----");
console.log("value of Sweety:",sweety , "\nvalue of Cutie:",cutie);

var temp;
temp = sweety;
sweety = cutie;
cutie = temp;
console.log("----- After Swap -----");
console.log("value of Sweety:",sweety , "\nvalue of Cutie:",cutie);

// 2nd Question
console.log("****** step 2 ******");

var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log("----- Before Swap -----");
console.log("value of num1:",num1 , "\nvalue of num2:",num2 , "\nvalue of num3:",num3);

var foo;
foo = num1;
num1 = num2;
num2 = num3;
num3 = foo;
console.log("----- After Swap -----");
console.log("value of num1:",num1 , "\nvalue of num2:",num2 , "\nvalue of num3:",num3);