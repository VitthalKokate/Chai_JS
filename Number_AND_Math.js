/*
   In Java Script We Define Numbers by Using 2 Ways
     1. num = 1000
     2. num = new Number(1000)
     */

let num = 100000

// console.log(num.toString())
// console.log(num.toFixed(2))
// console.log(num.toFixed(1))
// console.log(num.toLocaleString('en-IN'));

//  **********  MATH **********
// console.log(Math.PI)
 
console.log(Math.abs(-98))   // It Convert Negativ Value into Positive

console.log(Math.round(45.821)); // It Select the Round Figure Value . If Point Value Is Greater Then 5 then it increament by 1 otherwise it decrease
console.log(Math.round(21.489));

console.log(Math.ceil(4.245)); // It increment by one if point value Come
console.log(Math.ceil(4.985));

console.log(Math.floor(4.298)); // It Neglate Point Value . It return as it is value With remove value after point
console.log(Math.floor(4.973));

console.log(Math.random()); // random() select value between 0 to 1 .  like 0.11312..., 0.75242..,

console.log(Math.random()*10) // It Select the value between 0 to 9
console.log((Math.random()*10) + 1) // It Select the value between 1 to 10

// If You dont want point Value then You use floor() method
console.log(Math.floor((Math.random()*10)+1));

// If You need Value Between 10 to 20 

min = 10
max = 20
console.log(Math.floor((Math.random()* (max-min)+1)+min));












