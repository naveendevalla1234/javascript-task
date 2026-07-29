// Task 10 - Area Calculator Using Function

function calculateArea(length, width) {
    let area = length * width;
    return area;
}

let length = 15;
let width = 8;

let result = calculateArea(length, width);

console.log("===== Area Calculator =====");
console.log("Length :", length);
console.log("Width  :", width);
console.log("Area   :", result);