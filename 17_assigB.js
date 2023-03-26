

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  
  const arrayEmployees = [
    new Employee(22, "Anil", "IT", 50000, "TCS"),
    new Employee(33, "Radha", "", 74000, "Wipro"),
    new Employee(55, "Rishi", "Finance", 47000, "TCS"),
    new Employee(66, "Sonali", "Finance", 45000, "Infy"),
    new Employee(77, "Monika", "IT", 40000, "Wipro"),
    new Employee(88, "Vinayak", "IT", 75000, "TCS"),
    new Employee(99, "Mahesh", "H", 65000, "Infy")
  ];
  
  // 1. Sort by employee ID in ascending order
  arrayEmployees.sort((a, b) => a.emp_id - b.emp_id);
  console.log("Sorted by ID in ascending order:");
  arrayEmployees.forEach(emp => console.log(`${emp.emp_id}, ${emp.emp_name}, ${emp.emp_dept}`));
  
  // 2. Sort by department in ascending order
  arrayEmployees.sort((a, b) => a.emp_dept.localeCompare(b.emp_dept));
  console.log("Sorted by department in ascending order:");
  arrayEmployees.forEach(emp => console.log(`${emp.emp_id}, ${emp.emp_dept}, ${emp.emp_company}`));
  
  // 3. Sort by salary in descending order
  arrayEmployees.sort((a, b) => b.emp_salary - a.emp_salary);
  console.log("Sorted by salary in descending order:");
  arrayEmployees.forEach(emp => console.log(`${emp.emp_name}, ${emp.emp_salary}, ${emp.emp_company}`));
  