// ====================================
// VALID IDENTIFIERS
// ====================================

// Letters, digits, underscore, dollar sign
var userName = "John";
var age_25 = 25;
var $price = 100;
var _private = true;

// Camel case (recommended)
let firstName = "Alice";
let lastName = "Smith";
let isActive = true;

// Pascal case (for constructors/classes)
function MyClass() {}

// Underscore prefix (convention for private variables)
let _internalValue = 50;

// Dollar sign (common in jQuery)
let $element = document.getElementById("id");

// Unicode characters (valid but not recommended)
let café = "coffee";  // Valid but can cause issues

// Numbers after first character
var var1 = 10;
var test123 = "hello";

// Single or double underscore (common conventions)
let __private = "secret";
let __proto__ = "prototype";


// ====================================
// INVALID IDENTIFIERS
// ====================================

/*

// 1. Cannot start with a number
var 1stVariable = 10;  // ❌ INVALID

// 2. Cannot contain spaces
var my variable = 20;  // ❌ INVALID

// 3. Cannot contain special characters (except $ and _)
var my-var = 30;  // ❌ INVALID (hyphen)
var my@var = 40;  // ❌ INVALID (@ symbol)
var my#var = 50;  // ❌ INVALID (# symbol)
var my!var = 60;  // ❌ INVALID (! symbol)

// 4. Cannot use reserved keywords as identifiers
var class = "test";  // ❌ INVALID (reserved keyword)
var function = 100;  // ❌ INVALID (reserved keyword)
var return = true;  // ❌ INVALID (reserved keyword)
var if = 5;  // ❌ INVALID (reserved keyword)

// 5. Incomplete Unicode escape sequences
let \u004 = "invalid";  // ❌ INVALID (needs 4 hex digits, e.g., \u0041)

// 6. Special/non-ASCII characters
let naïve = "test";  // ⚠️ Technically valid but problematic
let variable_ň = 10;  // ⚠️ May cause encoding issues

*/

// ====================================
// RESERVED KEYWORDS (Cannot be used as identifiers)
// ====================================

// Statements
// abstract, arguments, await, boolean, break, byte, case, catch, char, class, 
// const, continue, debugger, default, delete, do, double, else, enum, eval, 
// export, extends, false, final, finally, float, for, function, goto, if, 
// implements, import, in, instanceof, int, interface, let, long, native, new, 
// null, package, private, protected, public, return, short, static, super, 
// switch, synchronized, this, throw, throws, true, try, typeof, var, void, 
// volatile, while, with, yield

console.log("Valid identifiers are created above ✓");
