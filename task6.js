let orderAmount = 750;
let delivery = 0;

if (orderAmount >= 1000) {
    delivery = 0;
} else {
    delivery = 80;
}

let total = orderAmount + delivery;

console.log("Order Amount :", orderAmount);
console.log("Delivery :", delivery);
console.log("Total :", total);