class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  
  const emp_anil = new Employee(22, "Anil", "11", 50008, "TCS");
  const emp_radha = new Employee(33, "Radha", "", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47800, "TCS");
  const emp_sonal = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
  const emp_monika = new Employee(77, "Monika", "IT", 40008, "Viacom");
  const emp_vinay = new Employee(88, "Vinayak", "IT", 75008, "TCS");
  const emp_mahesh = new Employee(99, "Mahesh", "", 5000, "Infosys");
  
  const employees = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonal,
    emp_monika,
    emp_vinay,
    emp_mahesh,
  ];
  
  const tcsEmployees = employees.filter((employee) => employee.emp_company === "TCS");

tcsEmployees.forEach((employee) => {
  console.log(`Company name: ${employee.emp_company}, Employee name: ${employee.emp_name}`);
});
  
const wiproEmployees = employees.filter((employee) => employee.emp_company === "Wipro");
const wiproSalaries = wiproEmployees.map((employee) => employee.emp_salary);
const wiproAvgSalary = wiproSalaries.reduce((acc, salary) => acc + salary, 0) / wiproSalaries.length;

console.log(`The average salary of employees from Wipro is ${wiproAvgSalary}`);

const wiproAndInfosysEmployees = employees.filter((employee) => employee.emp_company === "Wipro" || employee.emp_company === "Infosys");
const wiproAndInfosysSalaries = wiproAndInfosysEmployees.map((employee) => employee.emp_salary);
const wiproAndInfosysAvgSalary = wiproAndInfosysSalaries.reduce((acc, salary) => acc + salary, 0) / wiproAndInfosysSalaries.length;

console.log(`The average salary of employees from Wipro and Infosys is ${wiproAndInfosysAvgSalary}`);

