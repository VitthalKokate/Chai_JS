
// const promise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Asyn Task Completed");
//         resolve();
//     })
// })

// promise1.then(function(){
//     console.log("Promised Consumed");
// })


// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Asyn Task Completed");
//         resolve()
        
//     },2000)
// }).then(function(){
//     console.log("Promised Consume");
    
// })

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Asyn Task Completed ");
//         resolve({name:'Ajay',Email:'Ajay@3'})
//     },1000)
// })

// promise3.then((user)=>{
//     console.log(user);
    
// })

// const promise4 = new Promise((resolve,reject)=>{
//     error = false
    
//     setTimeout(()=>{
        
//         if(!error){
//             console.log("ASYN task completed.");
//             resolve({id:'R123',pass:'$321'})
            
//         }else{
//                 reject("ERROR : COME")
//         }
//     },2000)
// })

// promise4.then((data)=>{
//     console.log("Task Completed");
//     console.log(data);
//     return 4+4
    
    
// }).then((n)=>{
//     console.log(n);
    
// }).then(()=> console.log("Third THEN()")
// )

// promise4.catch((msg)=>{
//         console.log(msg);
// })

// promise4.finally(()=>{
//     console.log("Finally Always Executed");
    
// })


const promise5 = new Promise(function(resolve,reject){
   error2 = true;
  setTimeout(()=>{
    if(!error2){
        resolve({user:'JavaScript',pass:'Js123'})
       }else{
        reject("ERROR: JS Went Wrong")
       }
  },2000)
   
})

async function consumePromise5() {
try {
    const res = await promise5
    console.log(res);    
    
} catch (error) {
    console.log(error);
    
}   
}

consumePromise5()
