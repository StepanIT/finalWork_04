'use strict';

const createMarbleGame = () => {
  let userMarbles = 5;
  let botMarbles = 5;
  const evenNumber = 'четное';
  const oddNumber = 'нечетное';


  const evenOrOdd = (number) => {
    if (number % 2 === 0) {
      return evenNumber;
    } else {
      return oddNumber;
    }
  };


  const playRound = () => {
    alert(`у вас ${userMarbles} шариков. У бота ${botMarbles} шариков`);
    if (userMarbles <= 0) {
      alert('У вас закончились шарики. Бот выиграл');
      return;
    } else if (botMarbles <= 0) {
      alert('У бота закончились шарики. Вы победили');
      return;
    }
    const userMove = () => {
      let userGuessNumber;
      while (true) {
        userGuessNumber = parseInt(prompt(`Введите количество шариков, которое вы хотите загадать от 1 до ${userMarbles}:`));
        if (userGuessNumber >= 1 && userGuessNumber <= userMarbles) {
          break;
        } else {
          alert(`Введите число от 1 до ${userMarbles}.`);
        }
      }

      const actualParity = evenOrOdd(userGuessNumber);

      const botGuess = Math.random() < 0.5 ? evenNumber : oddNumber;
      alert(`Бот думает, что ваше число ${botGuess}.`);

      if (botGuess === actualParity) {
        alert(`Бот угадал! Он забирает ${userGuessNumber} шариков.`);
        userMarbles -= userGuessNumber;
        botMarbles += userGuessNumber;
      } else {
        alert(`Бот не угадал! Вы забираете ${userGuessNumber} шариков.`);
        userMarbles += userGuessNumber;
        botMarbles -= userGuessNumber;
      }
    };
    userMove();

    if (userMarbles <= 0 || botMarbles <= 0) {
      return playRound();
    }
    const botMove = () => {
      const botGuessNumber = Math.floor(Math.random() * botMarbles) + 1;
      const actualParity = evenOrOdd(botGuessNumber);

      alert('Бот загадал количество шариков. Угадайте, четное или нечетное это число.');


      let userChoice;
      while (true) {
        userChoice = prompt(`Введите ваше предположение: ${evenNumber} или ${oddNumber}`).toLowerCase();
        if (userChoice === evenNumber || userChoice === oddNumber) {
          break;
        } else {
          alert(`Пожалуйста, введите ${evenNumber} или ${oddNumber}.`);
        }
      }

      if (userChoice === actualParity) {
        alert(`Вы угадали! Вы забираете ${botGuessNumber} шариков.`);
        userMarbles += botGuessNumber;
        botMarbles -= botGuessNumber;
      } else {
        alert(`Вы не угадали! Бот забирает ${botGuessNumber} шариков.`);
        userMarbles -= botGuessNumber;
        botMarbles += botGuessNumber;
      }
    };
    botMove();
  };


  return {
    playRound,
    getUserMarbles() {
      return userMarbles;
    },
    getBotMarbles() {
      return botMarbles;
    },
  };
};


const marbleGame = createMarbleGame();


while (marbleGame.getUserMarbles() > 0 && marbleGame.getBotMarbles() > 0) {
  marbleGame.playRound();
}
