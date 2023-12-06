'use strict';
// Random Number Generator
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Reset Button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
////////////////////////////////////////////////////////////////
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // First Scenario if no number entered
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number !';
    displayMessage('No Number !');
    score--;
    document.querySelector('.score').textContent = score;
  }
  // Second Scenario of number is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }

    //Third Scenario if guess is not secret number
  } else if (guess !== secretNumber) {
    // document.querySelector('.message').textContent =
    // guess > secretNumber ? 'Too High !' : 'Too Low !';
    displayMessage(guess > secretNumber ? 'Too High !' : 'Too Low !');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You Lost The game';
    document.querySelector('.score').textContent = 0;
  }
  // // Third Scenario if guess is greater than number
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost The game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // Final Scenario if guess is less than number
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost The game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
