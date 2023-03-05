// Question no 1
console.log("*****Question no 1*****");
function greaterNumber(value1,value2){
var greaterNumber = value1 > value2 ? 10:-10;
console.log(`The Greater Number between both Number is ${greaterNumber}`);
}
greaterNumber(10,-10)
greaterNumber(800,899)

console.log("*****Question no 2*****");

function isEvenOrOddNum(num){
    var isEvenOrOddNum = num % 2 ==0 ? `The number ${num} is : true` : `The number ${num} is : false`;
    return isEvenOrOddNum
}
var result1 = isEvenOrOddNum(29);
console.log(result1);

var result2 = isEvenOrOddNum(44);
console.log(result2);

var result3 = isEvenOrOddNum(0);
console.log(result3);

var result4 = isEvenOrOddNum(101);
console.log(result4);

console.log("*****Question no 3******");

function wordLength(word){
    var wordLength = word.length;
    var wordIsEvenOdd = wordLength % 2 ==0 ? `The Word "${word}" length is "${wordLength}" and its :Even`: `The Word "${word}" length is "${wordLength}" and its  :Odd`;
    return wordIsEvenOdd
}
var wordIsEvenOdd = wordLength("JavaScript")
console.log(wordIsEvenOdd);

var wordIsEvenOdd = wordLength("Developer")
console.log(wordIsEvenOdd);

var wordIsEvenOdd = wordLength("Google")
console.log(wordIsEvenOdd);

