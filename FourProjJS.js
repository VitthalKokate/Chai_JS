 let randomNumber = parseInt(Math.random()*100 + 1);
 console.log(`Random NO: ${randomNumber}`);
 
 const submit = document.querySelector('#subt')
 const userInput = document.querySelector('#guessField')
 let guessSlot = document.querySelector('.guesses')
 const lastRes = document.querySelector('.lastResult')
 const lowOrHi = document.querySelector('.lowOrHi')
 const startOver = document.querySelector('.resultParas')

 const p = document.createElement('p')

 let prevGuess = []
 let numGuess = 1

 let playGame = true

 if(playGame){
    submit.addEventListener('click',function(e){
      e.preventDefault();
      const guess = parseInt(userInput.value)
      console.log(guess);
      
      validateGuess(guess)
    })
 }

 function validateGuess (guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more THAN number')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    } else{
        prevGuess.push(guess)
        if(numGuess == 11){
            displayGuess(guess)
            displayMSG(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
 }

 function checkGuess(guess){
  if(guess == randomNumber){
    displayMSG(`You guessted it right`)
    endGame()
  } if(guess < randomNumber){
    displayMSG(`Number is TOOO low`)
  } if(guess > randomNumber){
    displayMSG(`Number is TOOO high`)
  }
 }

 function displayGuess(guess){
   userInput.value = ''
   guessSlot.innerHTML += `${guess},`
   numGuess ++
   lastRes.innerHTML = `${11 - numGuess}`
   
 }

 function displayMSG(msg){
 lowOrHi.innerHTML = `<h2>${msg}</h2>`
 }


 function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h1 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
 }

 function newGame(){
  const newGameBtn = document.querySelector('#newGame')
  newGameBtn.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100 + 1);
    console.log(`Random NO: ${randomNumber}`);
    
    prevGuess = [] 
    numGuess = 1
    guessSlot = ''
    lastRes.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
   playGame = true
  })
 }

