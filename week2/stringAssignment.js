//Q1: Find length of last word
function lengthOfLastWord(s) {

    let words = s.split(" ");

    let lastWord = words[words.length - 1];

    return lastWord.length;
}

// Case 1
let str1 = "Hello World";
console.log("Input:", str1);
console.log("Length of Last Word:", lengthOfLastWord(str1));


// Q2: Handle leading, trailing and multiple spaces
function lengthOfLastWordWithSpaces(s) {

    let trimmedString = s.trim();

    let words = trimmedString.split(/\s+/);

    let lastWord = words[words.length - 1];

    return lastWord.length;
}

// Case 2
let str2 = " fly me to the moon ";
console.log("Input:", str2);
console.log("Length of Last Word:", lengthOfLastWordWithSpaces(str2));


// Q3: Check whether two strings are anagrams
function isAnagram(str1, str2) {

    // Remove spaces and convert to lowercase
    let string1 = str1.replace(/\s/g, "").toLowerCase();
    let string2 = str2.replace(/\s/g, "").toLowerCase();

    // Split strings into characters and sort them
    let sortedString1 = string1.split("").sort().join("");
    let sortedString2 = string2.split("").sort().join("");

    // Compare the sorted strings
    return sortedString1 === sortedString2;
}

// Case 3
console.log("Is Anagram (listen, silent):", isAnagram("listen", "silent"));

console.log("Is Anagram (hello, world):", isAnagram("hello", "world"));