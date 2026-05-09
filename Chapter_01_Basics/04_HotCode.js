console.log("Hotcode");

function add(a,b){
    return a+b;
}

let result;
for(let i=0;i<10000;i++){
    result = add(i,i+1)
}


console.log("After 1000 calls:", result);