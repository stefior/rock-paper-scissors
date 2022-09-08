"use strict";

function getComputerChoice() {
  let chooser = Math.random();
  if (chooser <=.33) {
    return 'rock';
  } else if (chooser <= .66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      return 'Tie';
    } else if (computerSelection === 'paper') {
      computerScore++;
      return 'You lose. Paper beats rock';
    } else if (computerSelection === 'scissors') {
      playerScore++;
      return 'You win. Rock beats scissors';
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++;
      return 'You win. Paper beats rock';
    } else if (computerSelection === 'paper') {
      return 'Tie';
    } else if (computerSelection === 'scissors') {
      computerScore++;
      return 'You lose. Scissors beats paper';
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      computerScore++;
      return 'You lose. Rock beats scissors';
    } else if (computerSelection === 'paper') {
      playerScore++;
      return 'You win. Scissors beats paper';
    } else if (computerSelection === 'scissors') {
      return 'Tie';
    }
  }
}

const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
results.style.cssText = 'white-space: pre;';
let playerScore = 0;
let computerScore = 0;
buttons.forEach((button) => button.addEventListener('click', () => {
  if (playerScore === 5) {
    results.textContent = 'The winner is you!';
  } else if (computerScore === 5) {
    results.textContent = 'The winner is computer!';
  } else {
  results.textContent = `\n${playRound(button.textContent, getComputerChoice())}\n
Your score: ${playerScore}
Computer's score: ${computerScore}`;
  }
}));
