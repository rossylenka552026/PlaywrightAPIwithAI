/*
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│                           JAVASCRIPT NAMING CONVENTIONS TABLE                               │
├──────────────────────┬──────────────────────┬────────────────────┬────────────────────────┤
│   Convention Name    │      Pattern         │       Use Case     │      Recommended       │
├──────────────────────┼──────────────────────┼────────────────────┼────────────────────────┤
│ camelCase            │ firstWord lowercase  │ Variables &        │       ✓ YES - Best     │
│                      │ restCapitalized      │ functions in JS    │       for JS           │
│                      │ Example:             │                    │                        │
│                      │ userName, getUserId()│                    │                        │
├──────────────────────┼──────────────────────┼────────────────────┼────────────────────────┤
│ PascalCase           │ AllWordsCapitalized  │ Classes &          │       ✓ YES - Best     │
│                      │ NoSeparators         │ Constructors       │       for JS Classes   │
│                      │ Example:             │                    │                        │
│                      │ UserProfile, MyClass │                    │                        │
├──────────────────────┼──────────────────────┼────────────────────┼────────────────────────┤
│ snake_case           │ all_lowercase_words  │ Alternative        │   Sometimes            │
│ (UNIX naming)        │ separated_by_        │ (Python standard)  │   Used in JS           │
│                      │ underscores          │                    │                        │
│                      │ Example:             │                    │                        │
│                      │ user_name, is_active │                    │                        │
├──────────────────────┼──────────────────────┼────────────────────┼────────────────────────┤
│ SCREAMING_SNAKE_CASE │ ALL_UPPERCASE_WORDS  │ Constants          │       ✓ YES - Best     │
│ (CONSTANT naming)    │ SEPARATED_BY_        │ (Immutable values) │       for Constants    │
│                      │ UNDERSCORES          │                    │                        │
│                      │ Example:             │                    │                        │
│                      │ MAX_USERS, API_KEY   │                    │                        │
├──────────────────────┼──────────────────────┼────────────────────┼────────────────────────┤
│ kebab-case           │ all-lowercase-words  │ URLs, CSS classes, │   ✗ NO - Not for JS   │
│ (train-case)         │ separated-by-hyphens │ HTML attributes    │   Variables            │
│                      │ Example:             │ NOT for JS vars    │   (causes errors)      │
│                      │ user-name, get-data  │                    │                        │
├──────────────────────┼──────────────────────┼────────────────────┼────────────────────────┤
│ Hungarian Notation   │ typePrefix +         │ Older convention   │   ✗ NO - Outdated     │
│ (NOT Recommended)    │ camelCase            │ (C, VB, C++)       │   Not used in modern   │
│                      │ Example:             │ NOT modern JS      │   JavaScript           │
│                      │ strUserName, intAge  │                    │                        │
│                      │ boolIsActive         │                    │                        │
├──────────────────────┼──────────────────────┼────────────────────┼────────────────────────┤
│ flatcase             │ alllowercasewords    │ AVOID - Hard to    │       ✗ NO             │
│                      │ noseparators         │ read               │                        │
│                      │ Example:             │                    │                        │
│                      │ username, firstname  │                    │                        │
├──────────────────────┼──────────────────────┼────────────────────┼────────────────────────┤
│ _privatePrefix       │ _underscore +        │ Private methods &  │   ✓ Convention        │
│ (Privacy convention) │ camelCase            │ variables          │   (not enforced)       │
│                      │ Example:             │                    │                        │
│                      │ _privateVar()        │                    │                        │
└──────────────────────┴──────────────────────┴────────────────────┴────────────────────────┘

KEY DIFFERENCES:
───────────────

1. camelCase vs snake_case
   - camelCase: firstName, getUserData (standard JS)
   - snake_case: first_name, get_user_data (standard Python)

2. kebab-case (train-case) vs camelCase
   - kebab-case: first-name, user-profile (uses hyphens)
   - BUT: CANNOT use in JS variable names! first-name would be treated as "first" minus "name"
   - Used for: URLs, CSS, HTML attributes

3. Hungarian Notation - OUTDATED, NOT RECOMMENDED
   - Adds type prefix: strName (string), intAge (integer), boolIsActive (boolean)
   - Problems: Modern IDEs show types, makes code verbose, harder to refactor
   - Example: strUserName = "John", intTotal = 100

4. train-case = kebab-case
   - Same thing: uses hyphens between words
   - Example: first-name, user-profile
   - NOT valid for JavaScript variables

*/

// ====================================
// EXAMPLES OF EACH CONVENTION
// ====================================

// 1. camelCase - RECOMMENDED for variables and functions
var firstName = "John";
var lastName = "Doe";
var userAge = 25;
function getUserData() {}
function calculateTotalPrice() {}

// 2. PascalCase - RECOMMENDED for classes and constructors
class UserProfile {}
function MyComponent() {}
var MyClass = function() {};

// 3. snake_case - Alternative (Python style, not common in JS)
var first_name = "Bob";
var is_premium_member = false;
function get_user_data() {}

// 4. SCREAMING_SNAKE_CASE - RECOMMENDED for constants
const MAX_USERS = 100;
const API_KEY = "abc123";
const DATABASE_URL = "mongodb://localhost";
const DEFAULT_TIMEOUT = 5000;

// 5. kebab-case/train-case - NOT for JS variables (causes syntax errors)
// ❌ WRONG - This would cause an error:
// var first-name = "John";  // Error! Minus operator between words
// var user-profile = {};    // Error!

// ✓ Use kebab-case in HTML/CSS instead:
var htmlClass = "user-profile";       // kebab-case inside string
var cssSelector = ".user-info-box";   // kebab-case for CSS

// 6. Hungarian Notation - NOT RECOMMENDED (outdated)
// ❌ OLD/OUTDATED:
// var strUserName = "Alice";
// var intUserAge = 25;
// var boolIsActive = true;
// var arrUserList = [];

// ✓ MODERN (cleaner):
var userName = "Alice";       // Type is obvious in modern JS/IDEs
var userAge = 25;
var isActive = true;
var userList = [];

// 7. Private methods/variables (underscore prefix)
function _privateMethod() {}
var _internalState = {};

// ====================================
// QUICK REFERENCE: WHAT TO USE WHERE
// ====================================

// Variables & regular functions → camelCase
var totalPrice = 100;
var isLoggedIn = true;
function fetchUserData() {}

// Classes & Constructors → PascalCase
class UserManager {}
function UserFactory() {}

// Constants → SCREAMING_SNAKE_CASE
const MAX_ATTEMPTS = 3;
const API_ENDPOINT = "https://api.example.com";

// URLs, CSS classes, HTML attributes → kebab-case (NOT in JS vars!)
var url = "https://example.com/user-profile";  // in URLs
var cssClass = "user-info-box";                // CSS class names

// Private methods → _camelCase
function _calculateInternally() {}
var _cachedData = {};

console.log("✓ All naming conventions with differences explained!");