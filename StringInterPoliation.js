name = "Akash"
no = 50

console.log("Hello my namne is "+ name + ". My Repository Count is "+ no)
//  Print same as it but without using  + Opeatory 
// We use Backtic(``) and used ${VarNam} in StringInterpoliation 
console.log(`Hello my name is ${name}.My repository Count is ${no}`);

/*      2 Way To Create String In Javascript 
              1. str="Value"
              2.  str = new String("Value")
*/

//  String Functions .
str="Hello World"
console.log(str.length);  // It Not A Function
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.charAt(2));
console.log(str.indexOf('l'));
console.log(str.valueOf());

str="   Hello    World    "
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.trimRight());
console.log(str.trimLeft());

console.log(str.split(1));


num = 123.899
console.log(num.toPrecision(5));












