let telugu = 80;
let english = 75;
let maths = 90;

let total = telugu + english + maths;
let average = total / 3;

console.log("Total:", total);
console.log("Average:", average);

if (average >= 90) {
    console.log("Grade: A");
} else if (average >= 75) {
    console.log("Grade: B");
} else if (average >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}