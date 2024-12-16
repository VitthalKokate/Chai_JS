//  IIFE  -> Immediate Invoke function Expression

(function chai(){
    console.log(`DB CONNECTED`);
}) ();


( () =>{
    console.log(`DB CONNECTED 2`);
}) ();

((name) => {
    console.log(`Hellow ${name}, Welcome to Our Platform`);
    
}) ("Ravi");