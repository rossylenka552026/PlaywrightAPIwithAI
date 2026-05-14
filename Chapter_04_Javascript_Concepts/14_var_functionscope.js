// ===================================
// VAR - FUNCTION SCOPE EXAMPLES
// ===================================

// SCENARIO 1: Function Scope - var is scoped to the function
function testFunctionScope() {
    var name = "Alice";
    console.log(name); // Expected: "Alice"
}
testFunctionScope();
// console.log(name); // Error: ReferenceError - name is not defined (outside function scope)

console.log("--- Scenario 1: Function Scope ---");
testFunctionScope();

// SCENARIO 2: No Block Scope - var ignores block boundaries
function testBlockScope() {
    if (true) {
        var age = 25;
        console.log("Inside block:", age); // Expected: 25
    }
    console.log("Outside block:", age); // Expected: 25 (var ignores block scope!)
}

console.log("\n--- Scenario 2: No Block Scope ---");
testBlockScope();

// SCENARIO 3: Loop Variable Leaking - var in loops leaks outside
function testLoopLeak() {
    for (var i = 0; i < 3; i++) {
        console.log("Inside loop:", i);
    }
    console.log("After loop:", i); // Expected: 3 (var leaks out of loop!)
}

console.log("\n--- Scenario 3: Loop Variable Leaking ---");
testLoopLeak();

// SCENARIO 4: Re-declaration - var allows re-declaration (no error)
function testRedeclaration() {
    var color = "red";
    console.log("First declaration:", color); // Expected: "red"

    var color = "blue"; // No error - var allows re-declaration
    console.log("Re-declared:", color); // Expected: "blue"
}

console.log("\n--- Scenario 4: Re-declaration ---");
testRedeclaration();

// SCENARIO 5: Global Scope Pollution
var globalVar = "I'm global";

function testGlobalScope() {
    console.log("Inside function:", globalVar); // Expected: "I'm global"
    var globalVar = "I'm local"; // This creates a new local variable
    console.log("After local declaration:", globalVar); // Expected: "I'm local"
}

console.log("\n--- Scenario 5: Global Scope ---");
testGlobalScope();
console.log("Outside function:", globalVar); // Expected: "I'm global" (unchanged)

// SCENARIO 6: Closure with var - Common Interview Question
function testClosureIssue() {
    var funcs = [];

    for (var i = 0; i < 3; i++) {
        funcs.push(function() {
            console.log("Value of i:", i);
        });
    }

    console.log("Expected: All print 3 (due to var scope)");
    funcs[0](); // Expected: 3 (not 0!)
    funcs[1](); // Expected: 3 (not 1!)
    funcs[2](); // Expected: 3 (not 2!)
}

console.log("\n--- Scenario 6: Closure Issue with var ---");
testClosureIssue();

// SCENARIO 7: var in nested functions
function outerFunction() {
    var outerVar = "outer";

    function innerFunction() {
        console.log("Inner accessing outer:", outerVar); // Expected: "outer"
        var innerVar = "inner";
        console.log("Inner var:", innerVar); // Expected: "inner"
    }

    innerFunction();
    // console.log(innerVar); // Error: ReferenceError - innerVar not defined here
}

console.log("\n--- Scenario 7: Nested Functions ---");
outerFunction();

// SCENARIO 8: var with try-catch
function testTryCatch() {
    try {
        var errorVar = "in try";
        console.log("In try:", errorVar); // Expected: "in try"
        throw new Error("Test error");
    } catch (e) {
        console.log("In catch, errorVar still accessible:", errorVar); // Expected: "in try"
        var catchVar = "in catch";
    }
    console.log("Outside try-catch, catchVar accessible:", catchVar); // Expected: "in catch"
}

console.log("\n--- Scenario 8: Try-Catch ---");
testTryCatch();

// ===================================
// ERROR SCENARIOS
// ===================================

console.log("\n=== ERROR SCENARIOS ===\n");

// ERROR 1: Accessing var from outside its function
function errorScenario1() {
    var localOnly = "function scoped";
}
errorScenario1();

console.log("--- Error 1: Accessing outside function ---");
try {
    console.log(localOnly);
} catch (error) {
    console.log("Error:", error.message); // Expected: localOnly is not defined
}

// ERROR 2: Using var before function is called (not hoisted globally)
console.log("\n--- Error 2: Using var before function execution ---");
try {
    console.log(notYetDeclared);
} catch (error) {
    console.log("Error:", error.message); // Expected: notYetDeclared is not defined
}

function declareItLater() {
    var notYetDeclared = "too late";
}

// ERROR 3: Implicit global (no var keyword) - dangerous!
function errorScenario3() {
    implicitGlobal = "oops, no var!"; // Creates global variable (bad practice!)
}

console.log("\n--- Error 3: Implicit Global (no var) ---");
errorScenario3();
console.log("Accessible globally:", implicitGlobal); // Expected: "oops, no var!" (dangerous!)

// ===================================
// SUMMARY
// ===================================
console.log("\n=== VAR SUMMARY ===");
console.log("1. Function scoped (not block scoped)");
console.log("2. Can be re-declared");
console.log("3. Leaks from loops and blocks");
console.log("4. Creates closures issues in loops");
console.log("5. Prefer 'let' and 'const' in modern JavaScript");
console.log("6. For hoisting behavior, see 16_Hoisting.js");
