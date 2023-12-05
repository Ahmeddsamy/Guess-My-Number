'use strict';
// Random Number Generator
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // First Scenario if no number entered
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';
    score--;
    document.querySelector('.score').textContent = score;
  }
  // Second Scenario of number is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
  }
  // Third Scenario if guess is greater than number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The game';
    }
  }
  // Final Scenario if guess is less than number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The game';
    }
  }
});
