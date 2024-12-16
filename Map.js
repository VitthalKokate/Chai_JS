const myNum = [1,2,3,4,5]

// Add 10 in each element

// console.log(myNum.filter((n) => n+10));

// for (const n of myNum) {
//   console.log(n + 10);
  
// }

// console.log(myNum.map( (n) => n+10));

/*     Channing
  1st method execute and return and 2nd method take input of 1st methods return value and perform their operation similarly it execute at last method .And then last method return value to variable.

  .map().map().filter().map().filter();
 */

   num = [1,2,3,4,5,6,7,8,9,10]
   const newN = num
                    .map( (n) => n*10)
                    .map( (n) => n+1)
                    .filter( (n ) => n>=40)

// console.log(newN);

console.log(num.filter( (n, i , arr) => n , i , arr));



