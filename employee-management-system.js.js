// ======================================
// MINI PROJECT - EMPLOYEE MANAGEMENT SYSTEM
// ======================================

// Employee Details
let employee = {
    id: 101,
    name: "Naveen",
    age: 22,
    department: "IT",
    designation: "Software Developer",
    salary: 35000
};

// Display Employee Details
function displayEmployee(emp) {
    console.log("=================================");
    console.log(" EMPLOYEE MANAGEMENT SYSTEM");
    console.log("=================================");
    console.log("Employee ID      :", emp.id);
    console.log("Employee Name    :", emp.name);
    console.log("Age              :", emp.age);
    console.log("Department       :", emp.department);
    console.log("Designation      :", emp.designation);
    console.log("Salary           : ₹" + emp.salary);
}

// Calculate Bonus
function calculateBonus(salary) {
    return salary * 0.10;
}

// Calculate HRA
function calculateHRA(salary) {
    return salary * 0.20;
}

// Calculate PF
function calculatePF(salary) {
    return salary * 0.12;
}

// Calculate Net Salary
function calculateNetSalary(salary) {

    let bonus = calculateBonus(salary);
    let hra = calculateHRA(salary);
    let pf = calculatePF(salary);

    let netSalary = salary + bonus + hra - pf;

    console.log("---------------------------------");
    console.log("Bonus (10%)      : ₹" + bonus);
    console.log("HRA (20%)        : ₹" + hra);
    console.log("PF (12%)         : ₹" + pf);
    console.log("---------------------------------");
    console.log("Net Salary       : ₹" + netSalary);

    return netSalary;
}

// Employee Grade
function employeeGrade(salary) {

    if (salary >= 50000) {
        console.log("Employee Grade   : A");
    }
    else if (salary >= 40000) {
        console.log("Employee Grade   : B");
    }
    else if (salary >= 30000) {
        console.log("Employee Grade   : C");
    }
    else {
        console.log("Employee Grade   : D");
    }
}

// Main Program
displayEmployee(employee);

let finalSalary = calculateNetSalary(employee.salary);

employeeGrade(finalSalary);

console.log("=================================");
console.log("Project Completed Successfully");
console.log("=================================");