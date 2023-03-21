
const arrayNums = [20, 3, 4, 56, 90, 400, 49];
const amayNums = arrayNums.slice();
amayNums.push(55, 66);
console.log("********************STEP 1 ********************");

console.log("Original array:", arrayNums);
console.log("Cloned array after push:", amayNums);
console.log("********************STEP 2 ********************");

// Deep clone
const amyblume = [...arrayNums];
amyblume.push(10, 25);

console.log("Original array:", arrayNums);
console.log("Cloned array after push:", amyblume);
console.log("********************STEP 3 ********************");

// Given other array
const Even = [2, 30, 14, 8];
const yum = ["101", "103", "106"];

// Merge or concat
const mergedArray = [Even, yum];

console.log("Merged array:", mergedArray);
console.log("********************STEP 4 ********************");

// Employee info object
const employee = {
  name: "Aditya Lagad",
  address: {
    street: "JM Rode",
    locality: "JM Mandir",
    city: "pune",
    state: "MH",
    country: "India",
  },
  mobileNumbers: ["9689483436"],
  salary: {
    january: 50000,
    february: 55000,
    march: 60000,
    april: 55000,
    may: 60000,
    june: 65000,
    july: 70000,
    august: 75000,
    september: 80000,
    october: 75000,
    november: 80000,
    december: 85000,
  },
};
console.log("emp Details:");
console.log(`Address: ${employee.address.locality}, ${employee.address.city}, ${employee.address.state} and ${employee.address.country}`);
console.log("Mobile numbers:", employee.mobileNumbers);

// Deep copy using JSON.stringify()
const clonedEmployee = JSON.parse(JSON.stringify(employee));

// Update July monthy salary to 80K on cloned object
clonedEmployee.salary.july = 80000;

// Update country to United Kingdom on original object
employee.address.country = "India++++++++++++++++++++++++++++++++++++++";
console.log("********************STEP 1 ********************");

// Log updated values for original and cloned object
console.log("Original object:", employee);
console.log("Cloned object:", clonedEmployee);
