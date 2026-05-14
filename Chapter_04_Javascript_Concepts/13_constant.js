// ===================================
// CONST - CONSTANT DECLARATION EXAMPLES
// ===================================

// SCENARIO 1: Basic const - must be initialized and cannot be reassigned
const BASE_URL = "https://app.thetestingacademy.com/student/my-process";
console.log("--- Scenario 1: Basic const ---");
console.log("BASE_URL:", BASE_URL); // Expected: https://app.thetestingacademy.com/student/my-process
// BASE_URL = "https://app-qa.thetestingacademy.com/student/my-process"; // TypeError - cannot reassign

// SCENARIO 2: Block Scope - const is block scoped like let
function testBlockScope() {
    if (true) {
        const name = "Alice";
        console.log("Inside block:", name); // Expected: "Alice"
    }
    // console.log("Outside block:", name); // Error: ReferenceError - name is not defined
}

console.log("\n--- Scenario 2: Block Scope ---");
testBlockScope();

// SCENARIO 3: Must Initialize - const requires a value at declaration
console.log("\n--- Scenario 3: Must Initialize ---");
const initialized = 100; // OK
console.log("Initialized:", initialized);
// const notInitialized; // Error: SyntaxError - Missing initializer in const declaration

// SCENARIO 4: Primitive Values - const makes primitives immutable
console.log("\n--- Scenario 4: Primitive Values ---");
const age = 25;
const name = "Bob";
const isActive = true;
const count = null;
const notDefined = undefined;

console.log("Primitives:", { age, name, isActive, count, notDefined });
// age = 30; // Error: TypeError - Assignment to constant variable
// name = "Alice"; // Error: TypeError

// SCENARIO 5: Object Properties - const object reference is constant, but properties can change
console.log("\n--- Scenario 5: Object Properties (Mutable) ---");
const person = {
    name: "John",
    age: 30
};

console.log("Original:", person);

person.name = "Jane"; // OK - modifying property
person.city = "NYC"; // OK - adding property
console.log("Modified:", person); // Expected: { name: 'Jane', age: 30, city: 'NYC' }

// person = {}; // Error: TypeError - cannot reassign the reference

// SCENARIO 6: Array Elements - const array reference is constant, but elements can change
console.log("\n--- Scenario 6: Array Elements (Mutable) ---");
const colors = ["red", "green", "blue"];
console.log("Original array:", colors);

colors.push("yellow"); // OK - modifying array
colors[0] = "pink"; // OK - changing element
console.log("Modified array:", colors); // Expected: ['pink', 'green', 'blue', 'yellow']

// colors = []; // Error: TypeError - cannot reassign the reference

// SCENARIO 7: Object.freeze() - Make object truly immutable
console.log("\n--- Scenario 7: Object.freeze() for True Immutability ---");
const frozenPerson = Object.freeze({
    name: "Alice",
    age: 25
});

console.log("Frozen object:", frozenPerson);
frozenPerson.name = "Bob"; // Silently fails (strict mode throws error)
frozenPerson.city = "LA"; // Silently fails
console.log("After modification attempt:", frozenPerson); // Expected: unchanged

// SCENARIO 8: Nested Object Mutability - freeze is shallow
console.log("\n--- Scenario 8: Nested Objects (Shallow Freeze) ---");
const company = Object.freeze({
    name: "TechCorp",
    address: {
        city: "NYC",
        zip: "10001"
    }
});

// company.name = "NewCorp"; // Fails - frozen
company.address.city = "LA"; // OK - nested object not frozen
console.log("Nested mutation:", company); // Expected: city changed to "LA"

// SCENARIO 9: No Re-declaration in same scope
console.log("\n--- Scenario 9: No Re-declaration ---");
const color = "red";
console.log("First declaration:", color);
// const color = "blue"; // Error: SyntaxError - Identifier already declared

// SCENARIO 10: Different blocks - same name allowed
console.log("\n--- Scenario 10: Same Name in Different Blocks ---");
{
    const message = "Block 1";
    console.log("Block 1:", message);
}
{
    const message = "Block 2"; // Different scope - OK
    console.log("Block 2:", message);
}

// SCENARIO 11: const in loops - for...of and for...in
console.log("\n--- Scenario 11: const in Loops ---");
const fruits = ["apple", "banana", "orange"];

console.log("for...of with const:");
for (const fruit of fruits) {
    console.log("  Fruit:", fruit); // OK - new binding each iteration
}

console.log("for...in with const:");
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(`  ${key}: ${obj[key]}`); // OK - new binding each iteration
}

// SCENARIO 12: const in traditional for loop - limited use
console.log("\n--- Scenario 12: const in Traditional For Loop ---");
// for (const i = 0; i < 3; i++) { // Error: Assignment to constant variable (i++)
//     console.log(i);
// }

// Workaround: use let for counter
for (let i = 0; i < 3; i++) {
    const squared = i * i; // OK - new const each iteration
    console.log(`${i} squared is ${squared}`);
}

// SCENARIO 13: Closures with const
console.log("\n--- Scenario 13: Closures ---");
function testClosure() {
    const funcs = [];

    for (const i of [0, 1, 2]) {
        funcs.push(() => console.log("Closure value:", i));
    }

    funcs[0](); // Expected: 0
    funcs[1](); // Expected: 1
    funcs[2](); // Expected: 2
}
testClosure();

// SCENARIO 14: const with function declarations
console.log("\n--- Scenario 14: const with Functions ---");
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Expected: Hello, Alice!
// greet = function() {}; // Error: TypeError - cannot reassign

// Arrow function with const
const add = (a, b) => a + b;
console.log("add(5, 3):", add(5, 3)); // Expected: 8

// SCENARIO 15: const in try-catch
console.log("\n--- Scenario 15: Try-Catch Block Scope ---");
try {
    const tryVar = "in try";
    console.log("Try block:", tryVar);
    throw new Error("Test error");
} catch (e) {
    const catchVar = "in catch";
    console.log("Catch block:", catchVar);
    // console.log(tryVar); // Error: ReferenceError - block scoped
}
// console.log(catchVar); // Error: ReferenceError - block scoped

// SCENARIO 16: const with destructuring
console.log("\n--- Scenario 16: Destructuring ---");
const [first, second, third] = [10, 20, 30];
console.log("Array destructuring:", { first, second, third });

const { name: userName, age: userAge } = { name: "Bob", age: 40 };
console.log("Object destructuring:", { userName, userAge });

// SCENARIO 17: const with spread operator
console.log("\n--- Scenario 17: Spread Operator ---");
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Creates new array
console.log("Spread array:", arr2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // Creates new object
console.log("Spread object:", obj2);

// SCENARIO 18: Deep freeze utility
console.log("\n--- Scenario 18: Deep Freeze Utility ---");
function deepFreeze(obj) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach(prop => {
        if (obj[prop] !== null
            && (typeof obj[prop] === "object" || typeof obj[prop] === "function")
            && !Object.isFrozen(obj[prop])) {
            deepFreeze(obj[prop]);
        }
    });
    return obj;
}

const deepFrozenObj = deepFreeze({
    name: "Test",
    nested: {
        value: 100
    }
});

deepFrozenObj.nested.value = 200; // Silently fails
console.log("Deep frozen:", deepFrozenObj); // Expected: value still 100

// SCENARIO 19: const with classes
console.log("\n--- Scenario 19: const with Classes ---");
const MyClass = class {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello from ${this.name}`;
    }
};

const instance = new MyClass("TestClass");
console.log(instance.greet());
// MyClass = class {}; // Error: TypeError - cannot reassign

// ===================================
// ERROR SCENARIOS
// ===================================

console.log("\n=== ERROR SCENARIOS ===\n");

// ERROR 1: Declaration without initialization
console.log("--- Error 1: Missing Initialization ---");
try {
    eval("const missing;"); // Using eval to catch syntax error
} catch (error) {
    console.log("Error:", error.message); // Expected: Missing initializer in const declaration
}

// ERROR 2: Reassignment
console.log("\n--- Error 2: Reassignment ---");
try {
    const x = 10;
    x = 20; // TypeError
} catch (error) {
    console.log("Error:", error.message); // Expected: Assignment to constant variable
}

// ERROR 3: Re-declaration in same scope
console.log("\n--- Error 3: Re-declaration ---");
try {
    eval("const duplicate = 1; const duplicate = 2;");
} catch (error) {
    console.log("Error:", error.message); // Expected: Identifier already declared
}

// ERROR 4: Accessing outside block scope
console.log("\n--- Error 4: Block Scope Access ---");
try {
    {
        const blockScoped = "inside";
    }
    console.log(blockScoped);
} catch (error) {
    console.log("Error:", error.message); // Expected: blockScoped is not defined
}

// ERROR 5: Using const in traditional for loop
console.log("\n--- Error 5: const in Traditional For Loop ---");
try {
    for (const i = 0; i < 3; i++) { // i++ tries to reassign
        console.log(i);
    }
} catch (error) {
    console.log("Error:", error.message); // Expected: Assignment to constant variable
}

// ERROR 6: Mixing const with var/let same name
console.log("\n--- Error 6: Mixing with var/let ---");
try {
    eval("var mixed = 1; const mixed = 2;");
} catch (error) {
    console.log("Error:", error.message); // Expected: Identifier already declared
}

// ===================================
// BEST PRACTICES
// ===================================

console.log("\n=== CONST BEST PRACTICES ===\n");

// 1. Use const by default
const API_KEY = "abc123"; // Configuration values
const MAX_RETRIES = 3; // Constants
const CONFIG = { timeout: 5000 }; // Configuration objects

// 2. Use UPPER_SNAKE_CASE for true constants
const API_ENDPOINT = "https://api.example.com";
const DEFAULT_TIMEOUT = 3000;

// 3. Use const for functions that won't be reassigned
const calculateTotal = (price, tax) => price + (price * tax);

// 4. Use Object.freeze() for immutable config
const IMMUTABLE_CONFIG = Object.freeze({
    apiUrl: "https://api.example.com",
    version: "1.0.0"
});

console.log("Best practices demonstrated:");
console.log("- Use const by default");
console.log("- UPPER_SNAKE_CASE for true constants");
console.log("- Object.freeze() for immutable objects");
console.log("- Use let only when reassignment is needed");

// ===================================
// SUMMARY
// ===================================
console.log("\n=== CONST SUMMARY ===");
console.log("1. Block scoped (like let)");
console.log("2. Must be initialized at declaration");
console.log("3. Cannot be reassigned");
console.log("4. Object/Array: reference is constant, contents are mutable");
console.log("5. Use Object.freeze() for true immutability");
console.log("6. Works with for...of and for...in loops");
console.log("7. Cannot be used in traditional for loop (i++)");
console.log("8. Preferred for values that won't be reassigned");
console.log("9. Use const by default, let when reassignment needed");
console.log("10. For hoisting behavior, see 16_Hoisting.js");
