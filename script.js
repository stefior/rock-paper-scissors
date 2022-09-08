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
  if (playerSelection === null) {return 'canceled';}
  if (['rock', 'scissors', 'paper'].indexOf(playerSelection) < 0) {return 'incorrect input for player\'s choice parameter';}
  switch (playerSelection === 'rock') {
    case (computerSelection === 'rock'):
      return 'tie';
    case (computerSelection === 'paper'):
      return 'you lose. paper beats rock';
    case (computerSelection === 'scissors'):
      return 'you win. rock beats scissors';
  }
  switch (playerSelection === 'paper') {
    case (computerSelection === 'rock'):
      return 'you win. paper beats rock';
    case (computerSelection === 'paper'):
      return 'tie';
    case (computerSelection === 'scissors'):
      return 'you lose. scissors beats paper';
  }
  switch (playerSelection === 'scissors') {
    case (computerSelection === 'rock'):
      return 'you lose. rock beats scissors';
    case (computerSelection === 'paper'):
      return 'you win. scissors beats paper';
    case (computerSelection === 'scissors'):
      return 'tie';
  }
}

function game() {
  console.log(playRound(prompt('rock, paper, or scissors? '), getComputerChoice()));
}