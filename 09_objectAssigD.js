let professer = {
    firstName: "aditya",
    lastName: "Lagad",
    isWorking: true,
    age:22,
    collageName: "DYP",
     Degree : {
        Engg:"CSC",
        Masters:"IT",
        PhD:"Adv Computing"
    },
    certifi : ["hacker Rank","Certification in IFE"],
    showDegree: function()
    {
        return `engg${this.degrees.engg} & Masters ${this.degrees.masters} & PHD ${this.degrees.PHD}`
    }
};
console.log("***********step1***********");
console.log(professer);
console.log("***********step2***********");
console.log(professer.Degree);
console.log("***********step3***********");
console.log(professer.certifi);
console.log("***********step4***********");

professer.totalExperiance = "total Exp:14 years";
console.log(professer.totalExperiance);

console.log("***********step6***********");
professer.age = "modified Age:28";
console.log(professer.age);
console.log("***********step7***********");
professer.certifi.push("oracal");
console.log(professer.certifi[professer.certifi.length-1]);









