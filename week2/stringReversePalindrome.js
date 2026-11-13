// Reverse a string
function reverseString(input) {

    // Convert string into array of characters
    let characters = input.split("");

    // Initialize empty string
    let reversedString = "";

    // Iterate through array in reverse direction
    for (let i = characters.length - 1; i >= 0; i--) {

        // Concatenate each character
        reversedString = reversedString + characters[i];
    }
    return reversedString;
}


// Check whether a string is palindrome or not
function isPalindrome(input) {

    let reversed = reverseString(input);

    // Compare input string with reversed string
    if (input === reversed) {
        return true;
    } else {
        return false;
    }
}


// Case 1
let str1 = "madam";
console.log("Original String:", str1);
console.log("Reversed String:", reverseString(str1));
console.log("Is Palindrome:", isPalindrome(str1));

console.log("--------------------");

// Case 2
let str2 = "hello";
console.log("Original String:", str2);
console.log("Reversed String:", reverseString(str2));
console.log("Is Palindrome:", isPalindrome(str2));

console.log("--------------------");

// Case 3
let str3 = "racecar";
console.log("Original String:", str3);
console.log("Reversed String:", reverseString(str3));
console.log("Is Palindrome:", isPalindrome(str3));