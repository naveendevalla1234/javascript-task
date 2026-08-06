// ==========================================
// EMPLOYEE MANAGEMENT SYSTEM
// ==========================================

// 1. Employee Details - Variables
let employeeId = 101;
let employeeName = "Naveen";
let department = "JavaScript";
let basicSalary = 30000;
let experience = 3;

// 2. Employee Skills - Array
let skills = ["JavaScript", "HTML", "CSS", "Node.js"];

// 3. Employee Information - Object
let employee = {
    id: employeeId,
    name: employeeName,
    department: department,
    salary: basicSalary,
    experience: experience,
    skills: skills
};

// 4. Calculate Salary
let hra = basicSalary * 0.20;
let bonus = basicSalary * 0.10;
let grossSalary = basicSalary + hra + bonus;

// 5. Check Employee Experience
let experienceMessage;

if (experience >= 3) {
    experienceMessage = "Experienced Employee";
} else {
    experienceMessage = "Fresher / Less Experienced";
}

// 6. Display Employee Details
console.log("========================================");
console.log("      EMPLOYEE MANAGEMENT SYSTEM");
console.log("========================================");

console.log("Employee ID       :", employee.id);
console.log("Employee Name     :", employee.name);
console.log("Department        :", employee.department);
console.log("Basic Salary      : ₹" + employee.salary);
console.log("Experience        :", employee.experience + " years");

console.log("----------------------------------------");

console.log("Employee Skills   :", employee.skills.join(", "));

console.log("----------------------------------------");

console.log("HRA (20%)         : ₹" + hra);
console.log("Bonus (10%)       : ₹" + bonus);
console.log("Gross Salary      : ₹" + grossSalary);

console.log("----------------------------------------");

console.log("Experience Status :", experienceMessage);

console.log("========================================");
console.log("       EMPLOYEE DETAILS COMPLETED");
console.log("========================================");