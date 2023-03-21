function factorialOfNum(num){
    let factorial = 1;
    for (let index = num; index >= 1; index--) {
        if (num==undefined||num==null||isNaN(num)) {
            break;
        }else if (typeof num=="number") {

            factorial = factorial*index;
        }
    }
    return factorial
}

var result = factorialOfNum(5);
console.log(`The factorial of num "5" is "${result}"`);
var result = factorialOfNum(3);
console.log(`The factorial of num "3" is "${result}"`);
var result = factorialOfNum(null);
console.log(`The factorial of num "null" is Invalid`);
var result = factorialOfNum(8);
console.log(`The factorial of num "8" is "${result}"`);
var result = factorialOfNum(undefined);
console.log(`The factorial of num "undefined" is Invalid`);
var result = factorialOfNum(9);
console.log(`The factorial of num "9" is "${result}"`);
var result = factorialOfNum(0);
console.log(`The factorial of num "0" is Invalid`);
var result = factorialOfNum(NaN);
console.log(`The factorial of num "Non" is Invalid`);