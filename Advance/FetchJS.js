 fetch('https://api.github.com/users/hiteshchoudhary')
.then((res)=>{
       return res.json()
}).then((data)=>{
      console.log(data)
})
.catch((e)=>console.log('**************',e))

const user = {
      username : "ABC",
      age :28,
      salary:50000
}


// console.log(user['age']);

function createUser(username,score){
      this.username =  username;
      this.score = score;

      // console.log(this.username);
      // console.log(this.score);

      // console.log(this)         
}

// console.log(createUser());
// console.log("**********");

console.log(createUser.power);
// console.log(createUser.prototype);

