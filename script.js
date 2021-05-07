// Connect "Guess" button to "random" function
document.getElementById('button').addEventListener('click', randomizer)

let randomNumber = 0
let userGuess = 0

function randomizer () {
  // Store number typed in by user and convert it to an integer
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  // Generate Random number between 1 and 6
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)

  // Compare user's guess with random number
  if (userGuess === randomNumber) {
    document.getElementById('answer').innerHTML = 'Congrats!!!'
  }
}
