function discount(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(discount(10)(20)(30));