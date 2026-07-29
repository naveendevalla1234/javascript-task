// Task 2 - Online Shopping Bill

let productPrice = 2500;
let quantity = 3;

let total = productPrice * quantity;
let discount = total > 5000 ? total * 0.10 : 0;
let finalPrice = total - discount;

console.log("===== Online Shopping Bill =====");
console.log("Product Price :", productPrice);
console.log("Quantity      :", quantity);
console.log("Total         :", total);
console.log("Discount      :", discount);
console.log("Final Price   :", finalPrice);