let balance = 10000;
let withdraw = 4000;

if (withdraw <= balance) {
    balance = balance - withdraw;

    console.log("Transaction Success");
    console.log("Withdraw Amount :", withdraw);
    console.log("Remaining Balance :", balance);
} else {
    console.log("Insufficient Balance");
}