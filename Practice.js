let a = 12345
// console.log(typeof a,a);

let b = Symbol('a')
// console.log(`Type of B -> ${typeof b} And their value -> ${b}`);
// console.log(b);

let ob = Object([{name:'ABC',age:23},{name:'XYZ',age:29}]);
// console.log(ob);

let str = "Hello"
// console.log(`Original Value ${str}`);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.trimEnd());
// console.log(str.trimStart());

// console.log(str.charAt(0));
// console.log(str.indexOf('H'));
// console.log(str.length);

// console.log(str.includes("L"));
// console.log(str.concat(" World"));
// console.log(str.match("e"));


/*   Numbers   
*/

no = 123.89694

// console.log( no.toString());
// console.log(no.toFixed(2));
// console.log(no.toFixed(1));
// console.log(no.toFixed(3));

// console.log( no.toPrecision(3));
// console.log( no.toPrecision(5));
// console.log( no.toPrecision(4));
no = 1000000
// console.log( no.toLocaleString());
// console.log( no.toLocaleString('en-In'));


/**
    Math
 */

    // console.log(Math.PI);

// console.log(Math.abs(-123.89));  // Return Absulute value remove (-) that means convert negative value to positive

// console.log(Math.round(2.456));
// console.log(Math.round(2.67));

// console.log(Math.ceil(4.785)); // Select Upper Value
// console.log(Math.ceil(6.1456));

// console.log(Math.floor(4.878)); // Select As it value Neglate value after decimal
// console.log(Math.floor(7.353));

// console.log(Math.sqrt(9));// Return Square root of provided value   // OP-> 3
// console.log(Math.sqrt(9.4));

arr=[3,5,6,2,1,5,7,8,9]
// console.log(Math.max(...arr)); // Return Maximum value from Array
// console.log(Math.min(...arr)); // Return Minimum value from Array


// console.log(Math.random()); // get only 0 to 1 value loke 0.2,0.456,etc
// get value 0 to 9
// console.log(Math.random()*10);  
// console.log(Math.floor(Math.random()*3+1));  // get value from 1 to 3
// get val 11 to 20
min = 10
max = 20
// console.log(Math.floor(Math.random()*(max-min+1)+ min));


/*     DATE AND TIME
 */

let date = new Date();
// console.log(date); // Display date but it not readable form 
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());  
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getFullYear());

let createdDate = new Date("01-14-23")
// console.log(createdDate.toLocaleString());
// console.log(createdDate.getFullYear());

let timeStamp = Date.now();
// console.log(timeStamp); // Display milisecond from 1 jan 1970 mid night
// console.log(timeStamp.toString());


/**
  Array : If WE want to represent group of object into single entity then we used array. JS array are store different datatype element.
 */

//   const arr2 = new Array(1,5,6,7,2,3,4);
//   console.log(arr2);

//   console.log(arr2.push(77)); // add elemnrt at end and return their index number.
//   console.log(arr2);
  
//   console.log(arr2.pop()); // Remove the last element of array and Return it .
//   console.log(arr2);

//   console.log(arr2.unshift(100)); // ADD element at starting of the array. ANd It return total size of array
//   console.log(arr2);

//   console.log(arr2.shift()); // Remove the value at starting of the array. 
//   console.log(arr2);
  
// console.log(arr2.includes(5)); // Check given number present in array or not and return true if present otherwise return false.
  
// console.log(arr2.indexOf(1)); // Those methode return index of provided value. If value is not present then return -1. 

// console.log(arr2.join()); // It convert all arrray into string

// const arr2 = new Array(1,5,6,7,2,3,4);

// console.log(arr2.slice(0,3)); // it return array from start to end -1 index .it not include last range. It not change to original array.
// console.log(arr2);

// console.log(arr2.splice(0,3));// It return array from start to end index. It incude last index . It Change to original array
// console.log(arr2);


nm = ["Jay","Amol","Ravi","Ramesh"]
car=["BMW","AUDI","Buggati"]

// console.log(nm.push(car)); // When push another array then it not merge it create array of array
// console.log(nm);
// console.log(nm[4][2]);  // Access Second Array

// nmcar = nm.concat(car) // It Merge Two Array into 1 . It Not change original array it return new array.
// console.log(nmcar); 
// console.log(nm);

// console.log([...nm,...car]); // It Also merge array it similar to concate . but it merge many array at a time.

a =[1,2,[3,4,5],[6,[7,8],9]];
// If we have array of array and we need to seprate it then we used flat() method to Spread it.

// flat(depth) // Those methos also get input as how many indepth go .like 2, 3  ... sub array . We also provide infinity to those methos
// console.log(a.flat(Infinity));

// console.log(a);

// createdArr = Array.from('Hello')// Thode methode creatre array of provided value.
// console.log(createdArr);

createdArr2 = Array.of("Hello","World",2345) // Those method also create array of provided value.

console.log(createdArr2);





  
  
  
  
































    
















