console.log(`******Question no 1******`);
function squareOfWordLength(value){
    console.log("------Word------");
    console.log(`The Given Word is :${value}`);
   var lengthOfWord = value.length;
   console.log(`Length of Word is :${lengthOfWord}`);
   var squareOfLength = lengthOfWord ** 2;
   return squareOfLength;
}
result = squareOfWordLength("JavaScript")
 console.log(`Square of length is :${result}`);
result2 = squareOfWordLength("Google Chrome")
console.log(`Square of length is :${result2}`);
result3 = squareOfWordLength("Developer Smart")
console.log(`Square of length is :${result3}`);

console.log(`*******Question no 2*******`);

console.log(`******Problem no 1******`);
function profile(){
    var string = "I am Angular Developer"
    var lengthOfString = string.length;
    console.log(`Length Of string is :${lengthOfString}`);
    var words = string.split(" ");
    var wordLength = words.length;
    console.log(`length of Word is :${wordLength}`);
    var result = lengthOfString / wordLength;
    var foo = lengthOfString * wordLength;
    console.log(`After dividing String by words is : ${result} \nAfter multiplying String by word : ${foo}`);
}
profile()

