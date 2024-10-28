const clock = document.getElementById('clock')
// clock = document.querySelector('#clock)
clock.innerHTML = "Hello"


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000)