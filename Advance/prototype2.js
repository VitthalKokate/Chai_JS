user = function( name , price){
    this.name = name;
    this.price = price;
}

user.prototype.getData = function () {
 console.log(`User Name is ${this.name} And Price is ${this.price}`);
}

 first = new user("ABC",3400)
 second = new user("XYZZ",400)

//  first.getData();
//  second.getData();


str = "Hello        "

// console.log(str.length);   // 13

// create prototype who give you actual length by removing internally use trim function to remove blank spaces

String.prototype.giveLength =  function(){
    console.log(`Actual Length is ${str.trim().length}`);  
}

str.giveLength();

"Rahul      ".giveLength();






 