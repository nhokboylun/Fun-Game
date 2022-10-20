'use strict';
/* guess number game
let lastHighScore = 0;
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let notWin = true;
document.querySelector('.check').addEventListener('click', function () {
  if (score > 1 && notWin) {
    let guess = Number(document.querySelector('.guess').value);
    if (guess <= 20 && guess >= 1) {
      if (guess !== secretNumber) {
        document.querySelector('.message').textContent =
          guess < secretNumber ? 'Too low' : 'Too high';
        document.querySelector('.label-score').textContent =
          '💯 Score: ' + --score;
      } else {
        notWin = false;
        document.querySelector('.message').textContent = 'BINGO!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.label-score').textContent =
          '💯 Score: ' + score;
        if (score > lastHighScore) {
          lastHighScore = score;
          document.querySelector('.highscore').textContent = lastHighScore;
        }
      }
    } else {
      document.querySelector('.message').textContent = 'Invalid input number';
    }
  } else if (score === 1) {
    document.querySelector('.label-score').textContent = '💯 Score: ' + --score;
    document.querySelector('.message').textContent =
      'U dead, click again button if u want to play again';
    document.querySelector('body').style.backgroundColor = 'red';
  } else {
    document.querySelector('.label-score').textContent = '💯 Score: ' + score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  notWin = true;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.label-score').textContent = '💯 Score:  ' + score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
*/
