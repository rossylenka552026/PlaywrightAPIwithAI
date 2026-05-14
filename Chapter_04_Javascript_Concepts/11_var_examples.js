
var a = 10;   // global/function scope
console.log( a );
function printHello() {
    console.log( "Hiiiiii" );
    var a = 20;  //local scope 
    console.log( a ); // print value will be 20
    if ( true ) {
        var a = 30;
        console.log( a ); // value printed will be 30
    }

} //doesn't print yet

printHello(); //call to print
