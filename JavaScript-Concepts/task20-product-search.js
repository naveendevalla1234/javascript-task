let products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Speaker"
];

let search = "Monitor";

if (products.includes(search)) {
    console.log("Product Available");
} else {
    console.log("Out of Stock");
}