let units = 150;
let bill;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = units * 4;
} else {
    bill = units * 6;
}

console.log("Units :", units);
console.log("Total Bill : ₹" + bill);