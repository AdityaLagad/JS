class car {
    constructor(Company,Model,Year,Color,Price){
        this.Company = Company;
        this.Model = Model;
        this.Year = Year;
        this.Color = Color;
        this.Price = Price;
    }
}
const tata = new car ("tata","vista","2015","white","6L");
console.log(tata);
const BMW = new car ("BMW","S-Class","2015","white","60L",);
console.log(BMW);
const KIA = new car ("KIA","Sonet","2019","Black","16L",);
console.log(KIA);
const Tesla = new car ("Tesla","X","2024","Red","80L",);
console.log(Tesla);
const VW = new car ("VW","Polo","2017","Blue","15L",);
console.log(VW);

console.log("*****************************************Que2*******************************************");


class college {
    
    constructor(college,type,Year,location,pincode){
        this.college = college;
        this.type = type;
        this.Year = Year;
        this.location = location;
        this.pincode = pincode;
    }
}
const clg = new college ("DYP","ACS","1993","Pimpri","411018");

const clg2 = new college ("COEP","Engg","1949","ShivajiNagar","411000");

const clg3 = new college ("Devgiri","HSC","2000","SambhajiNagar","431501");


function traverseObject(obj) {
    for (let key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
   traverseObject(clg);
   console.log("*********************************");
   traverseObject(clg2);
   console.log("*********************************");

   traverseObject(clg3);
  

   console.log("****************Que 3*****************");

let num = 4;
if (num < 2) {
    var result = `This ${num} is not a prime number`;
} else {
    let isPrime = true;
    for (let index = 2; index < num; index++) {
        if (num % index == 0 ) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        var result = `This ${num} is a prime number`;
    } else {
        var result = `This ${num} is not a prime number`;
    }
}
console.log(result);

let num2 = 11;
if (num2 < 2) {
    var result = `This ${num2} is not a prime number`;
} else {
    let isPrime = true;
    for (let index = 2; index < num2; index++) {
        if (num2 % index == 0 ) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        var result = `This ${num2} is a prime number`;
    } else {
        var result = `This ${num2} is not a prime number`;
    }
}
console.log(result);
