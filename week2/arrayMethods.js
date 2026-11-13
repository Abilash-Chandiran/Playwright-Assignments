// Initial array
let fruits = ["Apple", "Banana", "Mango"];

console.log("Initial Array:", fruits);

//push() - Add an element at the end
fruits.push("Orange");
console.log("After push():", fruits);

//pop() - Remove the last element
fruits.pop();
console.log("After pop():", fruits);

//shift() - Remove the first element
fruits.shift();
console.log("After shift():", fruits);

//unshift() - Add an element at the beginning
fruits.unshift("Grapes");
console.log("After unshift():", fruits);

//includes() - Check whether an element exists
console.log("Includes Mango:", fruits.includes("Mango"));

//indexOf() - Find the position of an element
console.log("Index of Mango:", fruits.indexOf("Mango"));

//join() - Convert array into a string
let fruitString = fruits.join(", ");
console.log("After join():", fruitString);

//reverse() - Reverse the array
fruits.reverse();
console.log("After reverse():", fruits);

//sort() - Sort the array alphabetically
fruits.sort();
console.log("After sort():", fruits);