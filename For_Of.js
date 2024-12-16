const arr=[1,2,3,4,5]

for (const element of arr) {
    // console.log(element); 
}

const language ={
    cpp:'C++',
    js:'Java Script',
    py:'Pythone'
}

// for (const [key,val] of language) {
//     console.log(key, ':-', val);
    
// }

for (const key in language) {
    // console.log(`${key} Full Form is -> ${language[key]}`);
}

//  Map 
//   Map is Colooection of key and value pair formate, Map follow insertion order ANd is not allowed duplicate.
const map = new Map();
// console.log(map);

map.set('MH','Maharashtra')
map.set('DL','Delhi')
map.set('MU','Mumbai')

// console.log(map);
for (const [k ,v] of map) {
    // console.log(`${k} Full Form is ${v}`);
}

for (const key in map) {
  console.log(key);
}

programming =["JS","CPP","PY","Java"]
for (const [k,v] in programming) {
    console.log(k,"-: ",v);
    console.log(programming[k]);
    
    
}


