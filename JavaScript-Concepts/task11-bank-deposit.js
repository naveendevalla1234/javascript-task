// Task 11 - Bank Deposit System

function deposit(balance, amount) {
    return balance + amount;
}

let accountHolder = "Naveen";
let currentBalance = 15000;
let depositAmount = 5000;

let updatedBalance = deposit(currentBalance, depositAmount);

console.log("===== Bank Deposit System =====");
console.log("Account Holder  :", accountHolder);
console.log("Current Balance :", currentBalance);
console.log("Deposit Amount  :", depositAmount);
console.log("Updated Balance :", updatedBalance);