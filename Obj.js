
const symb = Symbol("Key1")  // Symbol declaration
user = {
    name:"Ram",
    age: 23,
    sal: 35000,
    loc: "Pune",
    [symb]:"myKey" 
}

console.log(user.name) 
console.log(user["name"]) // Acccess Without using dote (.) Operator but used "" . 

console.log(user[symb])

user.name = "Amol"
console.log(user)
Object.freeze(user) ; // Freaze the provided obj that means it object not change anyone

user.name = "Baubali" // Not Applied becoz obj are freeze
console.log(user.name);

user.greeting = function(){
    console.log(`Hello JS user ${this.name}`);
    
}

console.log(user.greeting) // Return the reference of the function because we need to call those fuction.
console.log(user.greeting());
