class Employee {
    constructor(id, name, dept, salary, company) {
      this.id = id;
      this.name = name;
      this.dept = dept;
      this.salary = salary;
      this.company = company;
    }
  }
  
  // Add all employee objects inside array
  const employees = [
    new Employee(27, "Anil", "IT", 10000, "TCS"),
    new Employee(33, "Radha", "HR", 74000, "WIPRO"),
    new Employee(55, "Rishi", "Finance", 47000, "TCS"),
    new Employee(66, "Sonali", "Finance", 45000, "InFy"),
    new Employee(77, "Monika", "IT", 40008, "WIPRO")
  ];
  
  // 1. Get the list of all employee names
  const employee = employees.map(emp => emp.name);
  console.log(employee);
  
  // 2. Get the list of departments
  const departments = [...new Set(employees.map(emp => emp.dept))];
  console.log(departments);
  
  // 3. Get the list of employee id's
  const employeeIds = employees.map(emp => emp.id);
  console.log(employeeIds);
  
  // 4. Get the list of employee names working in TCS
  const tcsEmployees = employees.filter(emp => emp.company === "TCS");
  const tcsEmployeeNames = tcsEmployees.map(emp => emp.name);
  console.log(tcsEmployeeNames);
  