const coding =["JS","Ruby","Pythone","Java","CPP"]

// coding.forEach( function(val){
//     console.log(val);
    
// })

coding.forEach(  (val)=>{
    //   console.log(val);
});


function printMe(val){
    console.log(val);
    
}
// coding.forEach(printMe)    // Only Pass Reference to function 


coding.forEach( (val , index, arr)=>{
//   console.log(val, index, arr);
  
})


const myCoding = [
    {
        languageName :"JavaScript",
        extension :"js"
    },
    {
        languageName :"TypeScript",
        extension :"ts"
    },   
     {
        languageName :"Java",
        extension :"java"
    }
]

myCoding.forEach( (item) =>{
    // console.log(item);
})

myCoding.forEach( (item) =>{
    console.log(item.languageName
    );
    
})

