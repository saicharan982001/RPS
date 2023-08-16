const totalScore = { computerScore: 0, playerScore: 0 }

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  let score;  
  if (playerChoice == computerChoice) {
    score = 0
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  } else {
    score = -1
  }
  // return score
  return score
}

// ** showResult `You Win!` or `You Lose!` or `It's a Draw!` based on the score.
function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  if (score == -1) {
    resultDiv.innerText = 'You Lose!'
  } else if (score == 0) {
    resultDiv.innerText = "It's a tie!"
  } else {
    resultDiv.innerText = 'You Won!'
  }

  handsDiv.innerText = `🤵: ${playerChoice} vs 🤖: ${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
}

// ** Calculate the score and shows winner **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons respond for a click and do assigned task once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons[0].onclick = () => {
      return console.log(rpsButtons[0].value);
  }

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
}

playGame()