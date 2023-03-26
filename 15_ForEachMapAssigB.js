class Employee {
    constructor(emp_id, emp_name, exp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.exp_dept = exp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74008, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000,"Win");
  const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahesh = new Employee(99, "Mahesh", "Finance", 64000, "Infy");
  
  const mapEmployees = new Map();
  mapEmployees.set(emp_anil.emp_id, emp_anil);
  mapEmployees.set(emp_radha.emp_id, emp_radha);
  mapEmployees.set(emp_rishi.emp_id, emp_rishi);
  mapEmployees.set(emp_sonali.emp_id, emp_sonali);
  mapEmployees.set(emp_monika.emp_id, emp_monika);
  mapEmployees.set(emp_vinayak.emp_id, emp_vinayak);
  mapEmployees.set(emp_mahesh.emp_id, emp_mahesh);
  
  mapEmployees.forEach((emp, emp_id) => {
    console.log(`${emp_id} ===> Name: ${emp.emp_name}, Dept: ${emp.exp_dept}, Company: ${emp.emp_company}, Salary: ${emp.emp_salary}`);
  });
  