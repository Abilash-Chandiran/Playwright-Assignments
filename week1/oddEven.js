function isOddOrEven(number) {

    // Check whether the number is divisible by 2
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let num = 15;

console.log("Input Num:", num);
console.log("Result:", isOddOrEven(num));
