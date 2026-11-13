// 1. Declare a global variable using const
const browserVersion = "Chrome";

// 2. Create a function
function getBrowserVersion() {

    // 3. Check whether the browser is Chrome
    if (browserVersion === "Chrome") {

        // 4. Declare a local variable using var
        var browserVersion = "Firefox";
    }

    // 5. Print the local variable outside the if block
    console.log("Browser Version:", browserVersion);
}

// 6. Call the function
getBrowserVersion();
