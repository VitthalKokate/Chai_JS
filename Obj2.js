//Singletone Object 
 
userDetail = new Object() // Singletone Object are created using new KeyWords
 console.log(userDetail)
 userDetail2 = {}
 console.log(userDetail2); // Similar

 const regularUser ={
    id : 101,
    Name :{
        fullName:{
            name :"Jay",
            lastNm :"Roy"

        }
    },
    city : 'Pune'
 }

//  console.log(regularUser.Name.fullName)
//  console.log(regularUser.city);

 //  Merge Objects
 const obj1={1:'a',2:'b'} 
 const obj2={3:'A',4:'B'} 
 
 obj3 = Object.assign({},obj1,obj2)
//  console.log(obj3);

 // Sprade object 

 objSpread = {...obj1,...obj2}
 console.log(objSpread)

 // Get All Keys from Object
console.log(Object.keys(objSpread)); // It return array of keys present in object

val = Object.values(objSpread)
console.log(typeof val)
console.log(val);

// Check Given Property are present in array or not 
console.log(objSpread.hasOwnProperty('1'));

// crate array of array key and value pair array 
console.log(Object.entries(objSpread));   // [[k,v],[k,v]......]




 
