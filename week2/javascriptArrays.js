// array
let fruits = ["Apple", "Orange", "Mango"];
console.log("Original Array:", fruits);

// push() - Add element at the end
let numbers = [10, 20, 30];
numbers.push(40);
console.log("After push():", numbers);

// pop() - Remove last element
numbers.pop();
console.log("After pop():", numbers);

// shift() - Remove first element
numbers.shift();
console.log("After shift():", numbers);

// unshift() - Add element at the beginning
numbers.unshift(5);
console.log("After unshift():", numbers);

// includes() - Check whether element exists
console.log("Includes 20:", numbers.includes(20));

// indexOf() - Find index position
console.log("Index of 30:", numbers.indexOf(30));

// join() - Convert array into string
console.log("After join():", numbers.join("-"));

// reverse() - Reverse the array
console.log("After reverse():", numbers.reverse());

// sort() - Sort array elements
let sortNumbers = [30, 10, 20];
console.log("After sort():", sortNumbers.sort((a, b) => a - b));

// slice() - Extract elements without modifying original array
let sliceNumbers = [10, 20, 30, 40, 50];
let slicedArray = sliceNumbers.slice(1, 4);

console.log("Original Array:", sliceNumbers);
console.log("After slice():", slicedArray);

// splice() - Remove elements from original array
let spliceNumbers = [10, 20, 30, 40];
spliceNumbers.splice(1, 2);

console.log("After splice():", spliceNumbers);