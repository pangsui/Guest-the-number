'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const userInput = document.querySelector('.guess');
  const btn = document.querySelector('.check');
  const score = document.querySelector('.score');
  const reset = document.querySelector('.again');
  const number = document.querySelector('.number');
  const message = document.querySelector('.message');
  const body = document.querySelector('body');

  let rand = Math.trunc(Math.random() * 20) + 1;
  let highscore1 = 0;

  const resetGame = function () {
    score.textContent = 20;
    userInput.value = '';
    body.style.background = '#000';
    number.textContent = '?';
    message.textContent = 'Start guessing...';
    message.style.color = '#fff';
    userInput.style.pointerEvents = 'auto';
    btn.style.display = 'block';
    rand = Math.trunc(Math.random() * 20) + 1;
  };

  btn.addEventListener('click', function () {
    let userNum = Number(userInput.value);
    let scoreValue = Number(score.textContent);

    const manipulation = function (text) {
      scoreValue--;
      score.textContent = scoreValue;
      message.textContent = text;
      message.style.color = '#fff';
    };

    if (userNum > 0 && userNum < 21) {
      if (rand === userNum) {
        message.textContent = '😍Correct Number!';
        number.textContent = userNum;
        userInput.style.pointerEvents = 'none';
        body.style.background = 'green';
        if (scoreValue > highscore1) {
          highscore1 = scoreValue;
          document.querySelector('.highscore').textContent = scoreValue;
        }

        btn.style.display = 'none';
      } else if (scoreValue === 0) {
        message.textContent = '😖You Lost the Game!';
        message.style.color = 'red';
        btn.style.display = 'none';
      } else if (userNum > rand) {
        manipulation('☝Too High');
      } else {
        manipulation('👇Too Low');
      }
    } else {
      message.textContent = '👎Invalid Number!';
      message.style.color = 'red';
    }
  });
  reset.addEventListener('click', resetGame);
});
