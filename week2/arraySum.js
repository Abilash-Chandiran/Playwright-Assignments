//array with numeric values
let numbers = [10, 20, 30, 40, 50];

//variable to store sum
let sum = 0;

//Iterating the array using for loop
for (let i = 0; i < numbers.length; i++) {

    // Adding each array element to the sum
    sum = sum + numbers[i];
}

// Printing final sum
console.log("Array Elements:", numbers);
console.log("Total Sum:", sum);