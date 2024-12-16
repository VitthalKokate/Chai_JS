// this

user ={
    name :"XYZ",
    Des:"IT",
    loc:"Pune",

    welcome:function(){
        console.log(`${this.name}, Welcome.`);
        console.log(this)
        
    }
}

// user.welcome()
// user.name = "ABC"
// user.welcome()

// console.log(this)

const m1 = function(){
    console.log("M1()");
}

m1()
const m2 = ()=>{
    console.log("m2()");
}

m2()

const m3 = ()=> console.log("m3()"); // Implicit return arrow function

m3()

const add = (a,b)=> (a+b)
console.log(add(5,2));


