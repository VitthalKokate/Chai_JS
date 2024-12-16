/**
 *   ONJECT
 */

const mySym = Symbol("Key")
const user={
    name:'AKASH',
    salary:70000,
    loc:'Pune',
    "Full_Name":"Akash Kokate",
    [mySym] : 'myKey1'  // Way to declare symbol in OBJ


}

// console.log(user);
// console.log(user.name);
// console.log(user.Full_Name);

// console.log(user['name']); // It is another way to access the object

// console.log(user.mySym); // It return undefined because SYMBOL Can accecc by using []

// console.log(user[mySym]); // Access Symbol Prperty

// console.log(user.salary = 80000);
// console.log(user.salary);
// Object.freeze(user)
// console.log(user.name = "XYZ");  // Changes not Apply to Objet because object are Freeze
// console.log(user.name);
// user.loc = 'Delhi'
// console.log(user.loc);


// user.greeting = function (){
//     console.log(`Hello JS User nmae : ${this.name}`);   
// }

// console.log(user.greeting);
// console.log(user.greeting());


/*    SYMBOL   
 It is bulit in object . Every type symbol value can be unique.
 */

 sym1 = Symbol()
 sym2 = Symbol('Foo')

// console.log(sym1);
// console.log(sym2);

sym3 = Symbol('Foo')

// console.log(sym2 == sym3);

n1 = Number(10)
n2 = Number(10)
// console.log(n1 == n2);


/*   Singletone Object 
       Constructor Through declare object are singletone object . It Is single instance with own identity
 */
const t1 = new Object();
// console.log(t1);

const t2 = new Object({'A':1,'B':2,'C':3})
// console.log(t2);

// Nested Object
const regularUser = {
email :'ABC123@gmail.com',
fullNm :{
    userFullNm :{
        firstName :'Sam', 
        lastName : 'Jog'
    }
}
}

// Access Nested Object by using .
// console.log(regularUser.fullNm.userFullNm.firstName);

ob1 = {1:'A', 2:'B'}
ob2 = {3:'a', 4:'b'}

// console.log(Object.assign(ob1,ob2));

ob3 = {...ob1,...ob2}
// console.log(ob3);

// Get All Keys into object 
// console.log(Object.keys(ob3));
// Get All Values into object
// console.log(Object.values(ob3));

// console.log(ob1.hasOwnProperty(1)); // Return boolean result based on Providede value
// console.log(Object.entries(ob3));

course = {
    name :'JS',
    price : 9999,
    instructor : 'Hitesh'
}

const {instructor} = course
// console.log(instructor);  // Access object value without using dot(.)  // Destructoring 

const {instructor : ins} = course  // Destruct the value.
// console.log(ins);

function add(n1 = 10, n2 = 10){
    return n1 + n2
}


// console.log(add());


function m1(...n1){  // It crearte array to retun the value bcoz we dont not the how many parameter are come freom calling function
    return n1
}

// console.log(m1(4));
// console.log(m1(1,2,3,4,5));

fnOb = {
    name : "xyz",
    price : 12334,
    year : 2022
}

function objAccess(o){
console.log(o);
}

// objAccess(fnOb);

// console.log({
//     name : "xyz",
//     price : 12334,
//     year : 2022
// }.name);

function arrFun(t1,t2){
    console.log(t1);
    console.log(t2);

    console.log(t1.indexOf(t2));
    
}

// arrFun([1,2,3,4,5],1)

let c= 30
if(true){
    let a = 10
    let b = 10
    let c = 10
}

// console.log(c);


// this
 user2 = {
    name : "xyz",
    age : 27,
    loc : "Mumbai",
    wlc : function(){
        console.log(this); // It Print all obj 
        console.log(`${this.name} Welcome`);
        
    }
}
// console.log(this);

// user2.wlc();
user2.name = "ABC"
// user2.wlc();

nm = "XYZ"
function m5(nm){
console.log(this.nm); // Pointing to the global value
console.log(nm);
}

// m5("AAAA")

// Arrow Function 
add = (a,b) => a+b
// console.log(add(5,5));

add2 = (a,b) => (a+b)
// console.log(add2(5,5));

add3 = (a,b) => {  return a+b}  // It required return statement bcoz we used {}
// console.log(add3(5,5));

//  IIFE  = Immediate Invoke Function Expression
// ( ()=>{
//     // console.log('ARROW FUNCTION BY USING IIFE');
    
// }) ();

// (function ch(){
//     console.log("Inside CH BLOck");
    
// })();

// Nullish colescing

// console.log( 5 ?? 10);
// console.log( 0 ?? 10);

// Ternary Operator

p = 80
// p >= 800 ? console.log("P is Greater than or Equalto 800") : console.log("P is Less than 800");

// for( let i=1;i<=5;i++){
//    let  pattern = ''
//     for(let j=1;j<=i;j++){
//         pattern +="*"
//     }     
// }

// For Of    : Used fro iterate ARRY
const a = ['A',"B",'C']
// for (const i of a) {
//     console.log(i); 
// }

// For  in used fro iterate object becuse it givs key by using it we can access their value

o={
    js:'JavaScript',
    py:'Pythone',
    cpp:'c++'
}

// for (const key in o) {
//   console.log(`Key is :${key} And Value:- ${o[key]}`);
  
// }
 
// When we applu it on array then we get index of particullar value
a2=[123,456,789,123]
// for (const key in a2) {
// console.log(key);
// }
// console.log(a2.length);

// a2.forEach((element,i,arr) => {
//     console.log(element , i , arr);
    
// });


// Channing
// const arr = a2.map((num) => num*10)
//               .map((num) => num+1)
// console.log(arr);

// reduce()
arr = [1,2,3,4,5]
const sum = arr.reduce( (a,c) => {
    console.log(`Accumulator -${a}  Current Val- ${c}`)
    return a+c
},0)

console.log(sum);





















