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
      return 'tie';
    } else if (computerSelection === 'paper') {
      computerScore++;
      return 'you lose. paper beats rock';
    } else if (computerSelection === 'scissors') {
      playerScore++;
      return 'you win. rock beats scissors';
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++;
      return 'you win. paper beats rock';
    } else if (computerSelection === 'paper') {
      return 'tie';
    } else if (computerSelection === 'scissors') {
      computerScore++;
      return 'you lose. scissors beats paper';
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      computerScore++;
      return 'you lose. rock beats scissors';
    } else if (computerSelection === 'paper') {
      playerScore++;
      return 'you win. scissors beats paper';
    } else if (computerSelection === 'scissors') {
      return 'tie';
    }
  }
}

const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
results.style.cssText = 'white-space: pre;';
let playerScore = 0;
let computerScore = 0;
buttons.forEach((button) => button.addEventListener('click', () => {results.innerHTML = `${playRound(button.textContent, getComputerChoice())}\r\n
your score: ${playerScore}\r\n
computer's score: ${computerScore}`}));
