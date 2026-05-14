var v = 10;
let l = 30;
const c = 3.14;

var browser = "chrome"; //defined and assigned
var browser = "firefox"; //redecalaration 
browser = "edge"; // re-assignment
var testcases = [ "login", "logout", "signup" ];

for ( var i = 0; i < testCases.length; i++ ) {
    console.log( "Running Test:", testCases[ i ] );
}

console.log( "Loop counter leaked outside" );

