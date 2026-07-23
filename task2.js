let amount = 6500;
let discount = 0;
let finalAmount = 0;

if (amount >= 5000) {
    discount = amount * 20 / 100;
    finalAmount = amount - discount;

    console.log("20% Discount Applied");
    console.log("Discount Amount :", discount);
    console.log("Final Amount :", finalAmount);
} else {
    console.log("No Discount");
    console.log("Final Amount :", amount);
}