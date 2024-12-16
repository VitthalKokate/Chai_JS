const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#Weight').value);
   
   const res = document.querySelector('.result');
   console.log(res);
   

   if(height == '' || height < 0|| isNaN(height)){
    res.innerHTML = `Please give a valid height  ${height}`;
   }else if(weight == '' || weight < 0|| isNaN(weight)){
    res.innerHTML = `Please give a valid weight  ${weight}`;
   }else{
       const bmi =  (weight /((height*height)/10000)).toFixed(2)
       res.innerHTML = `<span> ${bmi}</span>`
   }



})
