// ===================================
// HOISTING IN JAVASCRIPT
// ===================================
// Hoisting: JavaScript's behavior of moving declarations to the top
// of their scope during the compilation phase, before execution.

// ===================================
// VAR HOISTING
// ===================================

console.log("=== VAR HOISTING ===\n");

// SCENARIO 1: var is hoisted with value 'undefined'
console.log("--- Scenario 1: var Hoisting with undefined ---");
console.log("Before declaration:", x); // Expected: undefined (not an error!)
var x = 10;
console.log("After declaration:", x); // Expected: 10

// Behind the scenes, JavaScript does this:
// var x;                    // Declaration hoisted to top
// console.log(x);           // undefined
// x = 10;                   // Assignment stays in place

// SCENARIO 2: var in function scope
console.log("\n--- Scenario 2: var Function Scope Hoisting ---");
function testVarHoisting() {
    console.log("Inside function, before:", score); // Expected: undefined
    var score = 100;
    console.log("Inside function, after:", score); // Expected: 100
}
testVarHoisting();

// SCENARIO 3: var with conditional blocks (still hoisted!)
console.log("\n--- Scenario 3: var in Conditional (Still Hoisted) ---");
function testConditionalHoisting() {
    console.log("Before if:", value); // Expected: undefined (hoisted!)

    if (false) {
        var value = "never executed";
    }

    console.log("After if:", value); // Expected: undefined (declared but not assigned)
}
testConditionalHoisting();

// SCENARIO 4: Multiple var declarations
console.log("\n--- Scenario 4: Multiple var Hoisting ---");
console.log("a:", a); // undefined
console.log("b:", b); // undefined
var a = 1;
var b = 2;
console.log("After:", a, b); // 1, 2

// SCENARIO 5: var in loops
console.log("\n--- Scenario 5: var in Loops ---");
function testLoopHoisting() {
    console.log("Before loop:", i); // Expected: undefined
    for (var i = 0; i < 3; i++) {
        // loop runs
    }
    console.log("After loop:", i); // Expected: 3 (hoisted and leaked)
}
testLoopHoisting();

// ===================================
// LET HOISTING (with TDZ)
// ===================================

console.log("\n=== LET HOISTING (Temporal Dead Zone) ===\n");

// SCENARIO 6: let is hoisted but stays in TDZ
console.log("--- Scenario 6: let with TDZ ---");
function testLetHoisting() {
    // console.log(y); // Error: ReferenceError - Cannot access before initialization
    let y = 20;
    console.log("After declaration:", y); // Expected: 20
}
testLetHoisting();

// SCENARIO 7: TDZ span
console.log("\n--- Scenario 7: TDZ Span ---");
{
    // TDZ starts here for 'name'
    // console.log(name); // ReferenceError - in TDZ
    // const greeting = name; // ReferenceError - in TDZ
    let name = "Alice"; // TDZ ends here
    console.log("After declaration:", name); // OK - "Alice"
}

// SCENARIO 8: let in nested scopes
console.log("\n--- Scenario 8: let in Nested Scopes ---");
let outer = "outer";
function testNestedLet() {
    console.log("Outer accessible:", outer); // OK
    // console.log("Inner before:", inner); // ReferenceError - TDZ
    let inner = "inner";
    console.log("Inner after:", inner); // OK
}
testNestedLet();

// SCENARIO 9: typeof with TDZ
console.log("\n--- Scenario 9: typeof with TDZ ---");
console.log("typeof undeclared:", typeof undeclaredVar); // "undefined" (safe)
// console.log("typeof in TDZ:", typeof letInTDZ); // ReferenceError (in TDZ)
let letInTDZ = "value";

// ===================================
// CONST HOISTING (with TDZ)
// ===================================

console.log("\n=== CONST HOISTING (Temporal Dead Zone) ===\n");

// SCENARIO 10: const behaves like let (TDZ)
console.log("--- Scenario 10: const with TDZ ---");
function testConstHoisting() {
    // console.log(z); // Error: ReferenceError - Cannot access before initialization
    const z = 30;
    console.log("After declaration:", z); // Expected: 30
}
testConstHoisting();

// SCENARIO 11: const in block scope
console.log("\n--- Scenario 11: const in Block ---");
{
    // console.log(PI); // ReferenceError - TDZ
    const PI = 3.14159;
    console.log("PI:", PI); // Expected: 3.14159
}

// ===================================
// FUNCTION HOISTING
// ===================================

console.log("\n=== FUNCTION HOISTING ===\n");

// SCENARIO 12: Function declarations are fully hoisted
console.log("--- Scenario 12: Function Declaration Hoisting ---");
console.log("Result:", add(5, 3)); // Expected: 8 (works before declaration!)

function add(a, b) {
    return a + b;
}

// Behind the scenes:
// function add(a, b) { return a + b; } // Entire function hoisted
// console.log(add(5, 3));

// SCENARIO 13: Function expressions are NOT hoisted (uses var/let/const)
console.log("\n--- Scenario 13: Function Expression (NOT Hoisted) ---");
// console.log(subtract(10, 3)); // Error: TypeError - subtract is not a function

var subtract = function(a, b) {
    return a - b;
};
console.log("After declaration:", subtract(10, 3)); // Expected: 7

// Behind the scenes:
// var subtract;                    // Only var hoisted with undefined
// console.log(subtract(10, 3));    // subtract is undefined (not a function)
// subtract = function(a, b) {...}  // Assignment happens here

// SCENARIO 14: Arrow functions (NOT hoisted)
console.log("\n--- Scenario 14: Arrow Function (NOT Hoisted) ---");
// console.log(multiply(2, 3)); // Error: TypeError or ReferenceError

const multiply = (a, b) => a * b;
console.log("After declaration:", multiply(2, 3)); // Expected: 6

// SCENARIO 15: Function in conditionals
console.log("\n--- Scenario 15: Function in Conditionals ---");
console.log("greet() before if:", greet()); // Expected: "Hello!"

if (true) {
    function greet() {
        return "Hello!";
    }
}
// Note: Behavior can be inconsistent across environments

// ===================================
// CLASS HOISTING
// ===================================

console.log("\n=== CLASS HOISTING ===\n");

// SCENARIO 16: Classes are hoisted but in TDZ (like let/const)
console.log("--- Scenario 16: Class Hoisting with TDZ ---");
// const dog = new Animal("Dog"); // Error: ReferenceError - Cannot access before initialization

class Animal {
    constructor(name) {
        this.name = name;
    }
}

const cat = new Animal("Cat");
console.log("After declaration:", cat.name); // Expected: "Cat"

// SCENARIO 17: Class expressions (NOT hoisted)
console.log("\n--- Scenario 17: Class Expression (NOT Hoisted) ---");
// const car = new Vehicle("Car"); // Error: ReferenceError or TypeError

const Vehicle = class {
    constructor(type) {
        this.type = type;
    }
};

const bike = new Vehicle("Bike");
console.log("After declaration:", bike.type); // Expected: "Bike"

// ===================================
// HOISTING ORDER & PRIORITY
// ===================================

console.log("\n=== HOISTING ORDER & PRIORITY ===\n");

// SCENARIO 18: Variable vs Function with same name
console.log("--- Scenario 18: Variable vs Function Name Conflict ---");
console.log("typeof foo:", typeof foo); // Expected: "function" (function wins!)

var foo = "I am a variable";
function foo() {
    return "I am a function";
}

console.log("foo:", foo); // Expected: "I am a variable" (assignment happens after)

// Behind the scenes:
// function foo() { return "I am a function"; } // Function hoisted first
// var foo;                                      // var declaration (ignored, already declared)
// console.log(typeof foo);                      // "function"
// foo = "I am a variable";                      // Assignment overwrites
// console.log(foo);                             // "I am a variable"

// SCENARIO 19: Multiple function declarations
console.log("\n--- Scenario 19: Multiple Function Declarations ---");
console.log("Result:", duplicate()); // Expected: "Second" (last one wins!)

function duplicate() {
    return "First";
}

function duplicate() {
    return "Second";
}

// ===================================
// HOISTING WITH DIFFERENT SCOPES
// ===================================

console.log("\n=== HOISTING WITH DIFFERENT SCOPES ===\n");

// SCENARIO 20: Global vs Local scope
console.log("--- Scenario 20: Global vs Local Scope ---");
var globalVar = "global";

function testScope() {
    console.log("Inside function:", globalVar); // Expected: undefined (local shadows global)
    var globalVar = "local";
    console.log("After local declaration:", globalVar); // Expected: "local"
}
testScope();
console.log("Outside function:", globalVar); // Expected: "global"

// SCENARIO 21: Nested function hoisting
console.log("\n--- Scenario 21: Nested Function Hoisting ---");
function outer() {
    console.log("Inner function:", inner()); // Works - inner() hoisted within outer

    function inner() {
        return "I'm hoisted in outer scope";
    }
}
outer();
// console.log(inner()); // Error: inner is not defined (scoped to outer)

// ===================================
// HOISTING PITFALLS & COMMON MISTAKES
// ===================================

console.log("\n=== HOISTING PITFALLS ===\n");

// PITFALL 1: Expecting let/const to behave like var
console.log("--- Pitfall 1: TDZ with let/const ---");
try {
    console.log(temp);
    let temp = "value";
} catch (error) {
    console.log("Error:", error.message); // Cannot access before initialization
}

// PITFALL 2: Function expression vs declaration
console.log("\n--- Pitfall 2: Function Expression Confusion ---");
try {
    console.log(notHoisted());
    var notHoisted = function() {
        return "not hoisted";
    };
} catch (error) {
    console.log("Error:", error.message); // notHoisted is not a function
}

// PITFALL 3: Class before initialization
console.log("\n--- Pitfall 3: Class Before Initialization ---");
try {
    const obj = new MyClass();
    class MyClass {}
} catch (error) {
    console.log("Error:", error.message); // Cannot access before initialization
}

// PITFALL 4: Loop variable hoisting confusion
console.log("\n--- Pitfall 4: Loop Variable Confusion ---");
function loopPitfall() {
    console.log("i before loop:", i); // undefined (hoisted)
    for (var i = 0; i < 3; i++) {
        // loop
    }
    console.log("i after loop:", i); // 3 (leaked)
}
loopPitfall();

// ===================================
// BEST PRACTICES
// ===================================

console.log("\n=== BEST PRACTICES TO AVOID HOISTING ISSUES ===\n");

// 1. Declare variables at the top of their scope
function bestPractice1() {
    let a, b, c; // Declare at top
    a = 1;
    b = 2;
    c = a + b;
    console.log("1. Declare at top:", c);
}
bestPractice1();

// 2. Use const by default, let when needed, avoid var
const CONSTANT_VALUE = 100;
let mutableValue = 50;
console.log("2. Use const/let:", CONSTANT_VALUE, mutableValue);

// 3. Use function declarations for utility functions
function utilityFunction() {
    return "Available everywhere in scope";
}
console.log("3. Function declaration:", utilityFunction());

// 4. Use function expressions for conditional functions
const conditionalFunc = true ? () => "Option A" : () => "Option B";
console.log("4. Conditional function:", conditionalFunc());

// 5. Initialize variables when declaring
const initialized = 10; // Good
// let uninitialized; // Avoid if possible
console.log("5. Initialize when declaring:", initialized);

// ===================================
// VISUAL SUMMARY
// ===================================

console.log("\n=== HOISTING SUMMARY ===\n");
console.log("VAR:");
console.log("  - Hoisted: YES");
console.log("  - Initialized: undefined");
console.log("  - Accessible before declaration: YES (returns undefined)");
console.log("  - Scope: Function/Global");

console.log("\nLET:");
console.log("  - Hoisted: YES");
console.log("  - Initialized: NO (TDZ)");
console.log("  - Accessible before declaration: NO (ReferenceError)");
console.log("  - Scope: Block");

console.log("\nCONST:");
console.log("  - Hoisted: YES");
console.log("  - Initialized: NO (TDZ)");
console.log("  - Accessible before declaration: NO (ReferenceError)");
console.log("  - Scope: Block");

console.log("\nFUNCTION DECLARATION:");
console.log("  - Hoisted: YES (fully)");
console.log("  - Initialized: YES (entire function)");
console.log("  - Accessible before declaration: YES");
console.log("  - Scope: Function/Global");

console.log("\nFUNCTION EXPRESSION:");
console.log("  - Hoisted: Depends on var/let/const");
console.log("  - Initialized: Like the variable type used");
console.log("  - Accessible before declaration: NO");
console.log("  - Scope: Depends on var/let/const");

console.log("\nCLASS DECLARATION:");
console.log("  - Hoisted: YES");
console.log("  - Initialized: NO (TDZ)");
console.log("  - Accessible before declaration: NO (ReferenceError)");
console.log("  - Scope: Block");

console.log("\nCLASS EXPRESSION:");
console.log("  - Hoisted: Depends on var/let/const");
console.log("  - Initialized: Like the variable type used");
console.log("  - Accessible before declaration: NO");
console.log("  - Scope: Depends on var/let/const");
