const myNum = [1,2,3,4]

// myTotal = myNum.reduce( (accu, currentV) => accu +currentV ,0)

myTotal = myNum.reduce( function (a , c){
    console.log(`Accumulator ${a}  and CurrentVal ${c}`);
      return a+c
},0)

// console.log(myTotal);

const shoppingCart =[
    {
        itemName :'JS Course',
        price : 2999
    },
    {
        itemName :'Pythone Course',
        price : 9999
    },
    {
        itemName :'Java Course',
        price : 20000
    },
    {
        itemName :'Data science Course',
        price : 12999
    },
]
 // Add price of shopping cart

//  console.log(shoppingCart.reduce( (acc ,item) =>acc + item.price,0));

 console.log(shoppingCart.reduce( (acc ,item)=>{
console.log(`Accoumulator ${acc} And item ${item.price}`);
   return acc+item.price              
 },0));
 
 