let productPrice = 4500;
let gst = 18;

let gstAmount = (productPrice * gst) / 100;
let finalAmount = productPrice + gstAmount;

console.log("GST Amount :", gstAmount);
console.log("Final Amount :", finalAmount);