const disp = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(disp);

// console.log(Object.defineProperty(Math,"PI" ,{
//     writable: true
// }))

const chai = {
    name : 'Giger Chai',
    price :250,
    isAvailable : true
}

// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

console.log(Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false,
}));

// console.log(chai['name']);
// console.log(chai.name = "Masala Chai");

// console.log(chai.name);




chai.name = "leamon Tea"/
// console.log(`After Use define Property Fun -> ${chai.name}`);
console.log(chai);

for (const [key,value] of Object.entries(chai)) {

    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    
        
    }
    
}








