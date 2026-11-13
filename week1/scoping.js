// global variable
let genderType = "female";

function printGender() {

    // function-level variable
    let color = "brown";

    // Checking genderType starts with "female"
    if (genderType.startsWith("female")) {

        // variable declared using var
        var age = 30;

        // block-scoped variable declared using let
        let color = "pink";

        // Printing color inside the if block
        console.log("Color inside if block:", color);
    }

    // Printing variables outside if block
    console.log("Age outside if block:", age);
    console.log("Color outside if block:", color);
}

// function call
printGender();

// printing global variable
console.log("Global Gender Type:", genderType);