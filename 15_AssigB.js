class Employee {
    constructor(name, company, salary, dept) {
      this.name = name;
      this.company = company;
      this.salary = salary;
      this.dept = dept;
    }
  }
  
  const employees = [
    new Employee("AVI", "TCS", 80000, "IT"),
    new Employee("RADHA", "Wipro", 90000, "Finance"),
    new Employee("SHASHI", "TCS", 30000, "IT"),
    new Employee("JHON", "Infosys", 85000, "IT"),
    new Employee("MIAHI", "TCS", 75000, "Finance"),
    new Employee("RAVAN", "Infosys", 40000, "IT"),
  ];
  console.log("Employees working in TCS:");

  employees.forEach((emp) => {
    if (emp.company === "TCS") {
      console.log(`Name: ${emp.name}, Company: ${emp.company}`);
    }
  });
  console.log("***********Employees working in Finance Department************");
  employees.forEach((emp) => {
    if (emp.dept === "Finance"){
        console.log(`Dept: ${emp.dept} , Name:${emp.name} `);
    }
  });
  console.log("*********Employees whose name starts with 'R':***********");
  employees.forEach((emp) => {
    if (emp.name.startsWith("R")) {
      console.log(emp);
    }
  });

 console.log("**********Employees Sal is grater than 75K*********");
 const highEarners = employees.filter(emp => emp.salary > 75000);
  highEarners.forEach(emp => console.log(`${emp.name} from ${emp.company} has salary of ${emp.salary}`));

console.log("**********Employees Sal is grater than 50K & IT Dept*********");
const itEmps = employees.filter(emp => emp.salary >= 50000 && emp.dept === "IT")
itEmps.forEach(emp => { console.log(emp);
});
console.log("**********Employees From Infosys*********");
const infyEmps = employees.filter(emp =>emp.company === "Infosys");
infyEmps.forEach(emp => console.log(emp));