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
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      return 'tie';
    } else if (computerSelection === 'paper') {
      return 'you lose. paper beats rock';
    } else if (computerSelection === 'scissors') {
      return 'you win. rock beats scissors';
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'you win. paper beats rock';
    } else if (computerSelection === 'paper') {
      return 'tie';
    } else if (computerSelection === 'scissors') {
      return 'you lose. scissors beats paper';
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'you lose. rock beats scissors';
    } else if (computerSelection === 'paper') {
      return 'you win. scissors beats paper';
    } else if (computerSelection === 'scissors') {
      return 'tie';
    }
  }
}

function game(rounds) {
  if (rounds < 1 || isNaN(rounds)) {return 'incorrect input for rounds parameter';}
  let counter = 0;
  while (counter < Math.floor(rounds)) {
    const result = playRound(prompt('rock, paper, or scissors? '), getComputerChoice());
    if (result === 'canceled') {console.log('you quit the game'); break;}
    console.log(result);
    counter++;
  }
}