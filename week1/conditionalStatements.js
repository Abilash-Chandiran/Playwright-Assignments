
//Launch Browser
function launchBrowser(browserName) {

    if (browserName === "chrome") {
        console.log("Launching Chrome browser");
    } 
    else {
        console.log("Launching other browser");
    }
}

function runTests(testType) {

    switch (testType) {

        case "smoke":
            console.log("Executing Smoke Tests");
            break;

        case "sanity":
            console.log("Executing Sanity Tests");
            break;

        case "regression":
            console.log("Executing Regression Tests");
            break;

        default:
            console.log("Executing Smoke Tests");
            break;
    }
}

launchBrowser("chrome");
runTests("regression");