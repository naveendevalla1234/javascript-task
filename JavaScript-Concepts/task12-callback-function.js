function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function thankYou() {
    console.log("Welcome to JavaScript");
}

greet("Naveen", thankYou);