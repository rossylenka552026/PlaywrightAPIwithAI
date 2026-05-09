/*
JAVASCRIPT COMMENTS: TYPES AND SHORTCUTS
*/

// ═══════════════════════════════════════════════════════════════════════════════════════
// QUICK REFERENCE: COMMENT SHORTCUTS TABLE
// ═══════════════════════════════════════════════════════════════════════════════════════

// ACTION                          macOS              Windows
// ──────────────────────────────  ─────────────────  ─────────────────
// Toggle Line Comment             Cmd + /            Ctrl + /
// Toggle Block Comment            Opt + Shift + A    Shift + Alt + A
// Comment Out Selection           Cmd + /            Ctrl + /
// Uncomment Selection             Cmd + /            Ctrl + /
// Add Multi-line Comment          Opt + Shift + A    Shift + Alt + A
// Quick Comment Toggle            Cmd + /            Ctrl + /

// HOW TO USE:
// 1. Select the lines you want to comment or uncomment
// 2. Press the shortcut for your operating system
// 3. The selected lines will be toggled (commented/uncommented)

// ═══════════════════════════════════════════════════════════════════════════════════════
// 1. SINGLE-LINE COMMENTS
// ═══════════════════════════════════════════════════════════════════════════════════════

// SINGLE-LINE COMMENTS          macOS              Windows
// ──────────────────────────────  ─────────────────  ─────────────────
// Syntax: //
// Toggle Shortcut                 Cmd + /            Ctrl + /
// Best For: Quick notes on code
// Example: var x = 5; // value

// This is a single-line comment
// It explains what the code does
// You can use multiple lines with //

// Example 1: Simple variable declaration
var userName = "John";  // User's name stored as string

// Example 2: Explaining logic
var age = 25;  // Age in years

// Example 3: Marking sections
// TODO: Need to add validation
// FIXME: This might cause issues
// NOTE: Remember to update this later

console.log( "Single-line comments are great for quick explanations" );

// ═══════════════════════════════════════════════════════════════════════════════════════
// 2. MULTI-LINE COMMENTS (BLOCK COMMENTS)
// ═══════════════════════════════════════════════════════════════════════════════════════

// MULTI-LINE COMMENTS          macOS              Windows
// ────────────────────────────  ─────────────────  ─────────────────
// Syntax: multi-line block
// Toggle Shortcut               Opt + Shift + A    Shift + Alt + A
// Best For: Longer explanations
// Can span multiple lines
// Cannot be nested

/*
  This is a multi-line comment (block comment).
  It can span multiple lines.
  Use it for longer explanations.
  Great for function descriptions.
*/

/*
 * You can also use asterisks for formatting
 * This is a common style convention
 * Makes the comment more readable and visually distinct
 */

/*
Example: Multi-line comment usage
- Line 1: Can include bullet points
- Line 2: Organize complex information
- Line 3: Easier to understand
*/

console.log( "Multi-line comments for detailed explanations" );

// ═══════════════════════════════════════════════════════════════════════════════════════
// 3. JSDoc COMMENTS (DOCUMENTATION COMMENTS)
// ═══════════════════════════════════════════════════════════════════════════════════════

// JSDoc COMMENTS                macOS              Windows
// ────────────────────────────  ─────────────────  ─────────────────
// Syntax: JSDoc block
// Toggle Shortcut               Opt + Shift + A    Shift + Alt + A
// Best For: Function documentation
// Used for IDE autocomplete
// Includes @param, @returns, etc
// Great for generating docs

/**
 * Calculates the sum of two numbers
 * @param {number} num1 - The first number
 * @param {number} num2 - The second number
 * @returns {number} The sum of num1 and num2
 * 
 * @example
 * const result = addNumbers(5, 10);
 * console.log(result);  // Output: 15
 */
function addNumbers( num1, num2 ) {
  return num1 + num2;
}

/**
 * Retrieves user data from the database
 * @async
 * @param {string} userId - The user ID to fetch
 * @returns {Promise<Object>} User object with name, email, and phone
 * @throws {Error} If user is not found
 * 
 * @example
 * try {
 *   const user = await getUserData("user123");
 *   console.log(user.name);
 * } catch (error) {
 *   console.error("User not found:", error);
 * }
 */
async function getUserData( userId ) {
  // Placeholder implementation
  return { id: userId, name: "John", email: "john@example.com" };
}

/**
 * User profile class
 * @class
 * @classdesc Represents a user profile with personal information
 * @property {string} name - User's full name
 * @property {string} email - User's email address
 * @property {number} age - User's age in years
 */
class UserProfile {
  /**
   * Creates a new UserProfile instance
   * @constructor
   * @param {string} name - User's full name
   * @param {string} email - User's email address
   * @param {number} age - User's age in years
   */
  constructor( name, email, age ) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  /**
   * Gets user's display name with title
   * @returns {string} Formatted display name
   */
  getDisplayName() {
    return `User: ${ this.name }`;
  }
}

console.log( "JSDoc comments for IDE autocomplete and documentation" );

// ═══════════════════════════════════════════════════════════════════════════════════════
// 4. SPECIAL COMMENT MARKERS
// ═══════════════════════════════════════════════════════════════════════════════════════

// SPECIAL MARKERS               macOS              Windows
// ────────────────────────────  ─────────────────  ─────────────────
// TODO: Task to be done          Cmd + /            Ctrl + /
// FIXME: Bug that needs fixing   Cmd + /            Ctrl + /
// NOTE: Important information    Cmd + /            Ctrl + /
// XXX: Critical issue            Cmd + /            Ctrl + /
// HACK: Temporary quick fix      Cmd + /            Ctrl + /
// BUG: Known bug                 Cmd + /            Ctrl + /
// DEPRECATED: Old/removed code   Cmd + /            Ctrl + /
// OPTIMIZE: Needs optimization   Cmd + /            Ctrl + /
// REVIEW: Needs code review      Cmd + /            Ctrl + /
// WARN: Be careful with this     Cmd + /            Ctrl + /

// TODO: Implement login functionality
// This is something that needs to be done

// FIXME: The calculation is incorrect
// This bug needs to be fixed

// NOTE: This is important information
// Remember this for later reference

// XXX: Critical issue here
// Needs immediate attention

// HACK: Quick fix - should be refactored
// Temporary solution that needs improvement

// BUG: This causes issues when input is empty
// Reported by user on 2024-05-09

// DEPRECATED: Use newFunction() instead
// This function will be removed in v2.0

// OPTIMIZE: Can be made more efficient
// Consider using a different algorithm

// REVIEW: Please check this logic
// Needs code review before merging

// WARN: Be careful with this
// May have unintended side effects

console.log( "Special markers help organize TODO items" );

// ═══════════════════════════════════════════════════════════════════════════════════════
// 5. COMMENTED-OUT CODE
// ═══════════════════════════════════════════════════════════════════════════════════════

// COMMENTED-OUT CODE              macOS              Windows
// ──────────────────────────────  ─────────────────  ─────────────────
// Single Line                      Cmd + /            Ctrl + /
// Multiple Lines + Select          Cmd + /            Ctrl + /
// Block Comment                    Opt + Shift + A    Shift + Alt + A
// Best Practice: Use Git instead
// Don't leave in production code

// Example: Commented-out code
// var oldFunction = function() {
//   return "This is old code";
// };

/*
// Multiple lines commented out at once
var x = 10;
var y = 20;
var z = x + y;
console.log(z);
*/

// Best Practice: Don't leave commented-out code in production
// Use version control (Git) to keep track of changes instead

console.log( "Use version control instead of commenting out code" );

// ═══════════════════════════════════════════════════════════════════════════════════════
// 6. INLINE COMMENTS
// ═══════════════════════════════════════════════════════════════════════════════════════

// INLINE COMMENTS                 macOS              Windows
// ──────────────────────────────  ─────────────────  ─────────────────
// Format: code // comment
// On same line as code
// Keep short and concise
// Use for quick clarifications
// Best for single statements

var totalPrice = 100 + 50;  // Calculate total price

function calculateDiscount( price, discountPercent ) {
  return price * ( 1 - discountPercent / 100 );  // Return discounted price
}

var result = calculateDiscount( 100, 10 );  // 10% discount

console.log( "Inline comments on the same line as code" );

// ═══════════════════════════════════════════════════════════════════════════════════════
// 7. SECTION DIVIDER COMMENTS
// ═══════════════════════════════════════════════════════════════════════════════════════

// SECTION DIVIDERS                macOS              Windows
// ──────────────────────────────  ─────────────────  ─────────────────
// Format: // ── SECTION NAME ──
// Organizes large files
// Improves readability
// Makes navigation easier
// Clear visual separation

// ─────────────────────────────────────────────────────────────────────────────────────
// SECTION 1: USER MANAGEMENT
// ─────────────────────────────────────────────────────────────────────────────────────

function createUser( name, email ) {
  return { name, email };
}

// ─────────────────────────────────────────────────────────────────────────────────────
// SECTION 2: DATA VALIDATION
// ─────────────────────────────────────────────────────────────────────────────────────

function validateEmail( email ) {
  return email.includes( "@" );
}

console.log( "Section dividers organize large files" );

// ═══════════════════════════════════════════════════════════════════════════════════════
// 8. COMMENT TYPES COMPARISON TABLE
// ═══════════════════════════════════════════════════════════════════════════════════════

// COMMENT TYPE    SYNTAX         USE CASE          macOS SHORTCUT      WINDOWS SHORTCUT
// ──────────────  ─────────────  ────────────────  ──────────────────  ──────────────────
// Single-line     //             Quick notes       Cmd + /             Ctrl + /
// Multi-line      block comment  Long text         Opt + Shift + A     Shift + Alt + A
// JSDoc           JSDoc block    Documentation     Opt + Shift + A     Shift + Alt + A
// Inline          code // cmt    Same line note    Cmd + /             Ctrl + /
// Section div.    // ──────      File sections     Cmd + /             Ctrl + /
// Markers         // TODO:       Task tracking     Cmd + /             Ctrl + /

// ═══════════════════════════════════════════════════════════════════════════════════════
// 9. COMPREHENSIVE SHORTCUT REFERENCE
// ═══════════════════════════════════════════════════════════════════════════════════════

// ACTION: Toggle Single-Line Comment
// macOS:   Cmd + /
// Windows: Ctrl + /
// 
// Steps:
// 1. Select the line(s) you want to comment
// 2. Press Cmd + / (macOS) or Ctrl + / (Windows)
// 3. The line(s) will be prefixed with //
// 4. Press the same shortcut again to uncomment

// ─────────────────────────────────────────────────────────────────────────────────────

// ACTION: Toggle Block Comment (Multi-line)
// macOS:   Opt + Shift + A
// Windows: Shift + Alt + A
//
// Steps:
// 1. Select the block of code you want to comment
// 2. Press Opt + Shift + A (macOS) or Shift + Alt + A (Windows)
// 3. The entire selection will be wrapped in a block comment
// 4. Press the same shortcut again to remove the block comment

// ═══════════════════════════════════════════════════════════════════════════════════════
// 10. BEST PRACTICES SUMMARY
// ═══════════════════════════════════════════════════════════════════════════════════════

// DO:
// - Write clear, concise comments explaining WHY
// - Keep comments up-to-date with code changes
// - Use comments for complex logic only
// - Use proper spacing for readability
// - Use TODO/FIXME markers for important items
// - Use JSDoc for function documentation
// - Comment section dividers in large files

// DON'T:
// - Write obvious comments for obvious code
// - Leave commented-out code (use Git instead)
// - Write comments longer than the code
// - Use comments instead of good naming
// - Forget to update comments when code changes
// - Mix multiple languages in comments

// ═══════════════════════════════════════════════════════════════════════════════════════
// 11. PRACTICAL EXAMPLES
// ═══════════════════════════════════════════════════════════════════════════════════════

/**
 * Formats a phone number to (XXX) XXX-XXXX format
 * @param {string} phoneNumber - The raw phone number
 * @returns {string} Formatted phone number
 * @example
 * formatPhone("1234567890") // Returns "(123) 456-7890"
 */
function formatPhone( phoneNumber ) {
  // Remove non-numeric characters
  const cleaned = phoneNumber.replace( /\D/g, "" );

  // Check if valid length
  if ( cleaned.length !== 10 ) {
    return "Invalid phone number";  // Length check failed
  }

  // Format as (XXX) XXX-XXXX
  return `(${ cleaned.slice( 0, 3 ) }) ${ cleaned.slice( 3, 6 ) }-${ cleaned.slice( 6 ) }`;
}

/*
Example usage:
const phone = formatPhone("5551234567");
console.log(phone);  // Output: (555) 123-4567
*/

// Another example: TODO: Add error handling for edge cases
function calculateAge( birthYear ) {
  // Get current year
  const currentYear = new Date().getFullYear();

  // Calculate age
  const age = currentYear - birthYear;  // Simple calculation

  return age;
}

// FIXME: This function needs to handle null/undefined values
function safeCalculateAge( birthYear ) {
  if ( birthYear === null || birthYear === undefined ) {
    return "Birth year is required";  // Validation failed
  }

  return calculateAge( birthYear );
}

console.log( "✓ All comment types and shortcuts demonstrated" );

// ═══════════════════════════════════════════════════════════════════════════════════════
// FINAL SUMMARY
// ═══════════════════════════════════════════════════════════════════════════════════════

// Comment Types and Their Shortcuts:
//
// 1. SINGLE-LINE (//)
//    macOS:  Cmd + /
//    Windows: Ctrl + /
//
// 2. MULTI-LINE (block comment)
//    macOS:  Opt + Shift + A
//    Windows: Shift + Alt + A
//
// 3. JSDOC (JSDoc block)
//    macOS:  Opt + Shift + A
//    Windows: Shift + Alt + A
//
// KEY TAKEAWAY:
// Good code is self-documenting. Comments should explain WHY you did something,
// not WHAT the code does (that should be obvious from reading the code itself).
//
// SHORTCUT CHEAT SHEET:
// Operation       macOS           Windows
// ──────────────  ──────────────  ───────────────
// Comment         Cmd + /         Ctrl + /
// Block           Opt+Shift+A     Shift+Alt+A
