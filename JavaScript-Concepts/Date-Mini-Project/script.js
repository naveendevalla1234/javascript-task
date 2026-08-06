// ==============================
// Task 1 - Flight Ticket Booking
// ==============================

let passengerName = "Naveen";
let flightName = "IndiGo";
let ticketCost = 4200;
let passengers = 2;

let flightDate = new Date();

flightDate.setFullYear(2026);
flightDate.setMonth(9); // October
flightDate.setDate(20);
flightDate.setHours(8);
flightDate.setMinutes(45);
flightDate.setSeconds(0);

let totalCost = ticketCost * passengers;

console.log("----------------------------");
console.log("FLIGHT TICKET BOOKING");
console.log("----------------------------");
console.log("Passenger :", passengerName);
console.log("Flight :", flightName);
console.log("Passengers :", passengers);
console.log("Ticket Cost :", ticketCost);
console.log("Total Cost :", totalCost);
console.log("Travel Date :", flightDate.getDate());
console.log("Travel Month :", flightDate.getMonth() + 1);
console.log("Travel Year :", flightDate.getFullYear());
console.log("Travel Time :", flightDate.getHours() + ":" + flightDate.getMinutes());


// ==============================
// Task 2 - Hospital Appointment
// ==============================

function hospitalAppointment() {

    let patientName = "Rahul";
    let doctorName = "Dr. Kumar";
    let fee = 700;

    let appointment = new Date();

    appointment.setFullYear(2026);
    appointment.setMonth(8);
    appointment.setDate(18);
    appointment.setHours(11);
    appointment.setMinutes(30);
    appointment.setSeconds(0);

    console.log("----------------------------");
    console.log("HOSPITAL APPOINTMENT");
    console.log("----------------------------");
    console.log("Patient :", patientName);
    console.log("Doctor :", doctorName);
    console.log("Consultation Fee :", fee);
    console.log("Date :", appointment.getDate());
    console.log("Month :", appointment.getMonth() + 1);
    console.log("Year :", appointment.getFullYear());
    console.log("Time :", appointment.getHours() + ":" + appointment.getMinutes());
    console.log("Appointment Confirmed");
}

hospitalAppointment();


// ==============================
// Task 3 - Online Food Order
// ==============================

function foodOrder() {

    let customer = "Naveen";
    let food = "Chicken Biryani";
    let quantity = 3;
    let price = 250;

    let orderDate = new Date();

    let total = quantity * price;

    console.log("----------------------------");
    console.log("ONLINE FOOD ORDER");
    console.log("----------------------------");
    console.log("Customer :", customer);
    console.log("Food :", food);
    console.log("Quantity :", quantity);
    console.log("Total :", total);
    console.log("Order Date :", orderDate.getDate());
    console.log("Month :", orderDate.getMonth() + 1);
    console.log("Year :", orderDate.getFullYear());
    console.log("Time :", orderDate.getHours() + ":" + orderDate.getMinutes());

    if (orderDate.getHours() < 12) {
        console.log("Breakfast Time");
    } else if (orderDate.getHours() < 18) {
        console.log("Lunch Time");
    } else {
        console.log("Dinner Time");
    }
}

foodOrder();


// ==============================
// Task 4 - Hotel Room Booking
// ==============================

let customerName = "Naveen";
let hotelName = "Grand Palace";
let roomCharge = 1800;
let days = 3;

let bookingDate = new Date();

bookingDate.setFullYear(2026);
bookingDate.setMonth(10);
bookingDate.setDate(12);
bookingDate.setHours(2);
bookingDate.setMinutes(15);
bookingDate.setSeconds(0);

let totalBill = roomCharge * days;

console.log("----------------------------");
console.log("HOTEL ROOM BOOKING");
console.log("----------------------------");
console.log("Customer :", customerName);
console.log("Hotel :", hotelName);
console.log("Days :", days);
console.log("Room Charge :", roomCharge);
console.log("Total Bill :", totalBill);
console.log("Booking Date :", bookingDate.getDate());
console.log("Month :", bookingDate.getMonth() + 1);
console.log("Year :", bookingDate.getFullYear());
console.log("Booking Time :", bookingDate.getHours() + ":" + bookingDate.getMinutes());
console.log("Room Booked Successfully");