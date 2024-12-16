function setUserName(userName){
    this.userName = userName;
    console.log("Called...");
    // console.log(userName);
    
    
}

function createUser(userName, email,password){
    setUserName.call(this,userName);
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai","chai@fb","123")
console.log(chai);

