// ===================================
// LET - BLOCK SCOPE EXAMPLES
// ===================================

// SCENARIO 1: Block Scope - let is scoped to the block {}
function testBlockScope() {
    if (true) {
        let name = "Alice";
        console.log("Inside block:", name); // Expected: "Alice"
    }
    // console.log("Outside block:", name); // Error: ReferenceError - name is not defined
}

console.log("--- Scenario 1: Block Scope ---");
testBlockScope();

// SCENARIO 2: Function Scope - let is also function scoped
function testFunctionScope() {
    let age = 25;
    console.log("Inside function:", age); // Expected: 25
}
testFunctionScope();
// console.log(age); // Error: ReferenceError - age is not defined

console.log("\n--- Scenario 2: Function Scope ---");
testFunctionScope();

// SCENARIO 3: No Variable Leaking - let in loops stays in loop
function testLoopScope() {
    for (let i = 0; i < 3; i++) {
        console.log("Inside loop:", i);
    }
    // console.log("After loop:", i); // Error: ReferenceError - i is not defined
    console.log("Loop variable does not leak outside");
}

console.log("\n--- Scenario 3: No Loop Variable Leaking ---");
testLoopScope();

// SCENARIO 4: No Re-declaration - let does NOT allow re-declaration in same scope
function testNoRedeclaration() {
    let color = "red";
    console.log("First declaration:", color); // Expected: "red"

    // let color = "blue"; // Error: SyntaxError - Identifier 'color' has already been declared

    color = "blue"; // Re-assignment is OK
    console.log("Re-assigned:", color); // Expected: "blue"
}

console.log("\n--- Scenario 4: No Re-declaration ---");
testNoRedeclaration();

// SCENARIO 5: Different Blocks - same variable name in different blocks is OK
function testDifferentBlocks() {
    {
        let message = "Block 1";
        console.log("Block 1:", message); // Expected: "Block 1"
    }
    {
        let message = "Block 2"; // Different scope - OK!
        console.log("Block 2:", message); // Expected: "Block 2"
    }
}

console.log("\n--- Scenario 5: Same Name in Different Blocks ---");
testDifferentBlocks();

// SCENARIO 6: Closure with let - SOLVES the var problem!
function testClosureFix() {
    let funcs = [];

    for (let i = 0; i < 3; i++) {
        funcs.push(function() {
            console.log("Value of i:", i);
        });
    }

    console.log("Expected: Each prints its own value (0, 1, 2)");
    funcs[0](); // Expected: 0 (correct!)
    funcs[1](); // Expected: 1 (correct!)
    funcs[2](); // Expected: 2 (correct!)
}

console.log("\n--- Scenario 6: Closure Fix with let ---");
testClosureFix();

// SCENARIO 7: Nested Blocks - let respects nested block scope
function testNestedBlocks() {
    let outer = "outer";

    {
        let inner = "inner";
        console.log("Inner block, outer:", outer); // Expected: "outer"
        console.log("Inner block, inner:", inner); // Expected: "inner"

        {
            let deepest = "deepest";
            console.log("Deepest block, all accessible:", outer, inner, deepest);
        }
        // console.log(deepest); // Error: ReferenceError - not defined
    }
    // console.log(inner); // Error: ReferenceError - not defined
}

console.log("\n--- Scenario 7: Nested Blocks ---");
testNestedBlocks();

// SCENARIO 8: Switch Statement - let in switch needs explicit blocks
function testSwitch(value) {
    switch (value) {
        case 1: {
            let result = "One";
            console.log(result);
            break;
        }
        case 2: {
            let result = "Two"; // Different block - OK!
            console.log(result);
            break;
        }
        default: {
            let result = "Other";
            console.log(result);
        }
    }
}

console.log("\n--- Scenario 8: Switch with let ---");
testSwitch(1);
testSwitch(2);

// SCENARIO 9: let in try-catch blocks
function testTryCatch() {
    try {
        let errorVar = "in try";
        console.log("In try:", errorVar); // Expected: "in try"
        throw new Error("Test error");
    } catch (e) {
        // console.log("In catch, errorVar:", errorVar); // Error: ReferenceError - block scoped!
        let catchVar = "in catch";
        console.log("In catch:", catchVar); // Expected: "in catch"
    }
    // console.log(catchVar); // Error: ReferenceError - block scoped!
}

console.log("\n--- Scenario 9: Try-Catch Block Scope ---");
testTryCatch();

// SCENARIO 10: let in loops - each iteration gets its own binding
function testLoopBinding() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr.push(() => i);
    }

    console.log("Each iteration has its own 'i' binding:");
    console.log("arr[0]():", arr[0]()); // Expected: 0
    console.log("arr[1]():", arr[1]()); // Expected: 1
    console.log("arr[2]():", arr[2]()); // Expected: 2
}

console.log("\n--- Scenario 10: Loop Iteration Binding ---");
testLoopBinding();

// ===================================
// ERROR SCENARIOS
// ===================================

console.log("\n=== ERROR SCENARIOS ===\n");

// ERROR 1: Accessing let before declaration
console.log("--- Error 1: Accessing Before Declaration ---");
try {
    console.log(beforeDecl);
    let beforeDecl = "too early";
} catch (error) {
    console.log("Error:", error.message); // Expected: Cannot access 'beforeDecl' before initialization
}

// ERROR 2: Re-declaring let in same scope
console.log("\n--- Error 2: Re-declaration in Same Scope ---");
try {
    let duplicate = "first";
    let duplicate = "second"; // SyntaxError
} catch (error) {
    console.log("Error:", error.message); // Expected: SyntaxError (caught at parse time)
}

// ERROR 3: Accessing let from outside its block
console.log("\n--- Error 3: Accessing Outside Block ---");
try {
    {
        let blockOnly = "inside";
    }
    console.log(blockOnly);
} catch (error) {
    console.log("Error:", error.message); // Expected: blockOnly is not defined
}

// ERROR 4: Mixing let and var with same name in same scope
console.log("\n--- Error 4: Mixing let with var ---");
try {
    var mixedVar = "var";
    let mixedVar = "let"; // SyntaxError
} catch (error) {
    console.log("Error:", error.message); // Expected: Identifier 'mixedVar' has already been declared
}

// ERROR 5: Using let in loop without block (switch case common mistake)
console.log("\n--- Error 5: Switch without blocks ---");
function testSwitchError(value) {
    try {
        switch (value) {
            case 1:
                let x = 1; // First declaration
                console.log(x);
                break;
            case 2:
                let x = 2; // SyntaxError - already declared in same scope!
                console.log(x);
                break;
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
}
testSwitchError(1);

// ERROR 6: let in for loop header - common TDZ mistake
console.log("\n--- Error 6: TDZ in for loop ---");
try {
    for (let i = 0; i < arr.length; i++) { // arr not defined yet
        console.log(i);
    }
    let arr = [1, 2, 3];
} catch (error) {
    console.log("Error:", error.message); // Expected: arr is not defined
}

// ERROR 7: Accessing loop variable outside loop
console.log("\n--- Error 7: Loop Variable Outside Loop ---");
try {
    for (let j = 0; j < 3; j++) {
        // loop runs
    }
    console.log(j); // ReferenceError
} catch (error) {
    console.log("Error:", error.message); // Expected: j is not defined
}

// ===================================
// COMPARISON: let vs var
// ===================================

console.log("\n=== LET vs VAR COMPARISON ===\n");

function compareLetVar() {
    console.log("--- var leaks, let doesn't ---");
    if (true) {
        var varVariable = "leaks out";
        let letVariable = "stays in";
    }
    console.log("var outside block:", varVariable); // Works
    // console.log("let outside block:", letVariable); // Error

    console.log("\n--- var allows re-declaration, let doesn't ---");
    var redeclareVar = "first";
    var redeclareVar = "second"; // OK
    console.log("var re-declared:", redeclareVar);

    let noRedeclareLet = "first";
    // let noRedeclareLet = "second"; // SyntaxError
    noRedeclareLet = "second"; // Re-assignment OK
    console.log("let re-assigned:", noRedeclareLet);
}

compareLetVar();

// ===================================
// SUMMARY
// ===================================
console.log("\n=== LET SUMMARY ===");
console.log("1. Block scoped (respects {})");
console.log("2. Cannot be re-declared in same scope");
console.log("3. Does NOT leak from loops and blocks");
console.log("4. Each loop iteration gets its own binding");
console.log("5. Fixes closure issues from var");
console.log("6. Preferred over var in modern JavaScript");
console.log("7. For hoisting behavior, see 16_Hoisting.js");
