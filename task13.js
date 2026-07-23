let age = 20;
let ticketPrice;

if (age < 5) {
    ticketPrice = 0;
} else if (age <= 18) {
    ticketPrice = 100;
} else {
    ticketPrice = 200;
}

console.log("Age :", age);
console.log("Ticket Price : ₹" + ticketPrice);