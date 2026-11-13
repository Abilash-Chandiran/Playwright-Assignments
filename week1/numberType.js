function checkNumberType(number) {

    if (number > 0) {
        return "Positive";
    } 
    else if (number < 0) {
        return "Negative";
    } 
    else {
        return "Zero";
    }
}

let num = 25;

console.log("Given Number:", num);
console.log("Number Type:", checkNumberType(num));