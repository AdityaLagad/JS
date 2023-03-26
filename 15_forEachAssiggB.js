class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayOfEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
 
console.log(`~~~~~~~~~~Employee Working in TCS~~~~~~~~~~~`);
const isWorking = ()=>{
    for (const employee of arrayOfEmployee) {
        if (employee.emp_company=="TCS") {
            console.log(`Name: ${employee.emp_name}, Company: ${employee.emp_company}`);
        }
    }
}
isWorking();
console.log(`~~~~~~~~~~ Finance dept Employee ~~~~~~~~~~~`);
const financedept = ()=>{
    for (const dept of arrayOfEmployee) {
        if (dept.emp_dept=="Finance") {
            console.log(`Department: ${dept.emp_dept},Name: ${dept.emp_name}`);
        }
    }
}
financedept();
console.log(`~~~~~~~~~~Employee Name starts with "R" ~~~~~~~~~~~`);
const empNameR = ()=>{
    for (const name of arrayOfEmployee) {
        if (name.emp_name.startsWith("R")) {
            console.log(
                `ID: ${name.emp_id},Name: ${name.emp_name},Department: ${name.emp_dept},Salary: ${name.emp_salary},Company:${name.emp_company}`);
        }
    }
}
empNameR();
console.log(`~~~~~~~~~~Employee salary greater than 70000 ~~~~~~~~~~~`);
const empSalary = ()=>{
    for (const sal of arrayOfEmployee) {
        if (sal.emp_salary > 70000) {
            console.log(`Name: ${sal.emp_name},Company: ${sal.emp_company},Salary: ${sal.emp_salary}`);
        }
    }
}
empSalary();
console.log(`~~~~~~~~~~Employee salary greater than 70000 ~~~~~~~~~~~`);
const empSalaryAndDept = ()=>{
    for (const key of arrayOfEmployee) {
        if (key.emp_salary>=50000 && key.emp_dept=="IT") {
            console.log(
                `ID:${key.emp_id},Name:${key.emp_name},Dept:${key.emp_dept},Salary:${key.emp_salary},Company:${key.emp_company}`);
        }
    }
}
empSalaryAndDept();
console.log(`~~~~~~~~~~Employee from Infy~~~~~~~~~~~`);
const empOfInfy = ()=>{
    for (const i of arrayOfEmployee) {
        if (i.emp_company=="Infy") {
            console.log(
                `ID:${i.emp_id},Name:${i.emp_name},Dept:${i.emp_dept},Salary:${i.emp_salary},Company:${i.emp_company}`);
        }
    }
}
empOfInfy();