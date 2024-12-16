const arr = ["Jay","Ajay","Ravi"]
const arr2 = ["BMW","AUDI","Thar"]
// // arr3=[88]

// // console.log(arr.push(arr2),arr.push(arr3))   
// // Push() Push array into array but it not concate OR ADD array it add the next index of array
// // console.log(arr)

newArray = arr.concat(arr2)  // Those method add array and extend prevois array based on new array size
console.log(newArray)


//  Spiting Concept are also used to concate array but is esilay add more than 3 array element 
//  It also used to merge array

split = [...arr, ...arr2]
console.log(split)

/*
`   If we have array of array and you want to it in one array at that time we use flat() method 
    AND those method take input as number You want to go into depth of that array 
    We also provide 
    */

  num = [1,2,3,4,5,[6,7,8,[9,10]]]
  console.log(num.flat(Infinity))


/*
   In JavaScript We can easily convert data into array by using Array.from(value) and Array.of(value) methods.
 */

   car=Array.from("BMW")  // Single Value Support only
   console.log(car)

   name = Array.of("AKASH","Raj")   // provide 2 or more values
   console.log(name)

  obj = Array.from({name:'Akash', age :20})
  console.log(obj)

  
  obj2 = Array.of({name:'Akash'},{ name:'Amol', age:24})
  console.log(obj2)






