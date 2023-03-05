//Question no 1
console.log("*******Que no 1*******");
function technologyStack(){
    console.log("My technology stack is:Angular");
}
technologyStack();

function skills(){
    console.log("My skills are : Frontend Developer");
}
skills();

//Question no 2
console.log("*******Que no 2*******");

function personalDetails(firstName,lastName,collegeName){
console.log("First Name :",firstName);
console.log("Last Name :",lastName);
console.log("college Name:",collegeName);
}
personalDetails("aditya","Lagad"," DY patil");

//Question no 3
console.log("*******Que no 3*******");

function swapValuesDude(value1,value2){
    console.log("Before Swap: ", value1, "|", value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, "|", value2);
}
swapValuesDude("virat","Anushka");
console.log("---------------------------------");
swapValuesDude(1000,2000);

// Question 4
console.log("*******Que no 4*******");

function addThreeValues(num1,num2,num3){
var foo = num1 + num2 + num3;
return foo
}

result = addThreeValues(10.23,600,40)
console.log("Addition of values :",result);

result = addThreeValues("hello","good","morning")
console.log("Addition of values :",result);