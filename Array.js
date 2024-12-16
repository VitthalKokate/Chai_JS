const arr = [1,2,3,4,5,6,7]

console.log(arr)

arr.push(100)
console.log(arr);

console.log(arr.pop());
console.log(arr);

arr.unshift(200)
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(arr.includes(7));

console.log(arr.indexOf(4));

console.log(arr.toString());


// Slice ()  // Last Range not include and NOT change Original Array
// console.log(arr.slice(1,4))
console.log("Original ARRAY ->",arr)
;

// Splice () // Last Range include And It Change Or Remove element from ARRAY
console.log(arr.splice(1,4));
console.log(arr)










