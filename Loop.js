//  for

// for (let i = 0; i < 10; i++) {
//     console.log(i)
    
// }

// for (let i = 1; i <=10; i++) {
//     console.log(`Outer Loop Value of i :${i}`);
    
//   for (let j = 1; j <=10; j++) {
//     // console.log(`Inner Loop Value of j :${j} And outer Loop ${i}`);

//     console.log(`${i} * ${j} = ${i*j}`);
    
    
//   }   
// }

//  Continue And Break

for (let i = 1; i <= 10; i++) {
   if(i == 5){
     console.log("5 Detected");
     break
   }
   console.log(i);  
}

for (let i = 1; i <= 10; i++) {
    if(i == 5){
      console.log("5 Detected");
    continue
    }
    console.log(i);  
 }