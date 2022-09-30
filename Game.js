const computerDiv = document.querySelector('.computer')
const humanScoreDiv = document.querySelector('.human-score')
const computerScoreDiv = document.querySelector('.computer-score')
const displayWinner = document.querySelector('.display-win')


export default class Game {
  constructor(humanScore, computerScore) {
    this.humanScore = 0;
    this.computerScore = 0;
  }

  update(winner) {
    console.log("hi ??")
    console.log(winner)
    if (winner === "human") {
      
      this.humanScore += 1;
      humanScoreDiv.innerHTML = this.humanScore
    } if (winner === "computer") {
      this.computerScore += 1;
      computerScoreDiv.innerHTML = this.computerScore
    }
  }

  play(human, computer) {
 
    computerDiv.style.fontSize = "30px";
    if (computer === 0 && human.itemElement === 'papper') { 
      computerDiv.innerHTML = 'rock'
      displayWinner.innerHTML = 'WIN'
      return human.itemElement
    }
    if (computer === 0 && human.itemElement === 'scissors'){
      computerDiv.innerHTML = 'rock'
      displayWinner.innerHTML = 'LOSE'
      //displayWinner.classList.add('fade')
      return computer
    }
    if (computer === 0 && human.itemElement === 'rock'){
      computerDiv.innerHTML = 'rock'
      displayWinner.innerHTML = 'TIE'
      return 'tie'
    }
    if (computer === 1 && human.itemElement === 'rock'){
      computerDiv.innerHTML = 'papper'
      displayWinner.innerHTML = 'LOSE'
      return computer
    }
    if (computer === 1 && human.itemElement === 'scissors'){
      computerDiv.innerHTML = 'papper'
      displayWinner.innerHTML = 'WIN'
      return human.itemElement
    }
    if (computer === 1 && human.itemElement === 'papper'){
      computerDiv.innerHTML = 'papper'
      displayWinner.innerHTML = 'TIE'
      return 'tie'
    }
    if (computer === 2 && human.itemElement === 'rock'){
      computerDiv.innerHTML = 'scissors'
      displayWinner.innerHTML = 'WIN'
      return human.itemElement
    }
    if (computer === 2 && human.itemElement === 'papper'){
      computerDiv.innerHTML = 'scissors'
      displayWinner.innerHTML = 'LOSE'
      return computer
    }
    if (computer === 2 && human.itemElement === 'scissors'){
      computerDiv.innerHTML = 'scissors'
      displayWinner.innerHTML = 'TIE'
      return 'tie'
    }
    
  }
}


