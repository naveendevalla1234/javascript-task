// Task 11: Product Discount Calculator

let productName = "Laptop";
let originalPrice = 50000;
let discountPercentage = 10;

let discountAmount = (originalPrice * discountPercentage) / 100;
let finalPrice = originalPrice - discountAmount;

console.log("===== Product Discount =====");
console.log("Product Name      :", productName);
console.log("Original Price    : ₹" + originalPrice);
console.log("Discount          :", discountPercentage + "%");
console.log("Discount Amount   : ₹" + discountAmount);
console.log("Final Price       : ₹" + finalPrice);