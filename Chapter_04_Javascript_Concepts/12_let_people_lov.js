//let - modern way of changing values, can be reassigned and not redeclared

let l = 10;
let retrycount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log( "Retry attempt:", retryCount );

//let retryCount = 5; //no error but errors out during compiletime -syntax - as it cannot be declared

let testStatus = "Pending";
if ( testStatus ) {
    let executionTime = 1200;
    console.log( "Inside Block", executionTime );
}
console.log( executionTime ); //ExecutionError - inside block