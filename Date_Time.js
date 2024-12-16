let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());  // day month year
console.log(myDate.toLocaleString());  //  mon/date/year

let mycreatedDate = new Date(2023, 0, 23)   // Set Date based on your requirement
console.log(mycreatedDate.toString());
console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(mycreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // get time is second



//  Date 




