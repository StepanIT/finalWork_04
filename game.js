'use strict';

const rpsGame = () => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * 3);

  const start = () => {
    const chooseWinner = (playerChoice, computerChoice) => {
      if (playerChoice === computerChoice) {
        return 'Ничья!';
      } else if (
        (playerChoice === FIGURES_RUS[0] &&
            computerChoice === FIGURES_RUS[1]) ||
          (playerChoice === FIGURES_RUS[1] &&
            computerChoice === FIGURES_RUS[2]) ||
          (playerChoice === FIGURES_RUS[2] && computerChoice === FIGURES_RUS[0])
      ) {
        return 'Вы победили!';
      } else {
        return 'Компьютер победил!';
      }
    };

    const play = () => {
      let playerChoice = prompt('камень, ножницы или бумага?');

      if (playerChoice === null) {
        const confirmExit = confirm('Точно ли вы хотите выйти?');
        if (confirmExit) {
          return null;
        } else {
          return play();
        }
      }

      const emptyLine = playerChoice.trim();
      if (emptyLine === '') {
        alert('Сделайте свой выбор');
        return play();
      }

      playerChoice = FIGURES_RUS.find(item =>
        item.startsWith(playerChoice.toLowerCase()),
      );

      if (!FIGURES_RUS.includes(playerChoice) || playerChoice === '') {
        alert('Некорректный выбор. Попробуйте снова.');
        return play();
      }

      const computerChoice = FIGURES_RUS[getRandomIntInclusive()];

      alert(`Вы выбрали: ${playerChoice}`);
      alert(`Компьютер выбрал: ${computerChoice}`);
      const result = chooseWinner(playerChoice, computerChoice);
      alert(result);

      return result;
    };

    return play();
  };

  return start();
};

const createMarbleGame = firstPlayer => {
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
        userGuessNumber = prompt(
            `Введите количество шариков,
            которое вы хотите загадать от 1 до ${userMarbles}:`);

        if (userGuessNumber === null) {
          const confirmExit = confirm('Точно ли вы хотите выйти?');
          if (confirmExit) {
            throw stop;
          } else {
            continue;
          }
        }


        userGuessNumber = parseInt(userGuessNumber.trim());
        if (isNaN(userGuessNumber) || userGuessNumber <= 0) {
          alert('Некорректный ввод. Попробуйте снова.');
        } else if (userGuessNumber > userMarbles) {
          alert(`Введите число от 1 до ${userMarbles}.`);
        } else {
          break;
        }
      }

      const actualParity = evenOrOdd(userGuessNumber);

      const botGuess = Math.random() < 0.5 ? evenNumber : oddNumber;
      alert(`Бот думает, что ваше число ${botGuess}.`);

      if (botGuess === actualParity) {
        alert(`Бот угадал! Он забирает ${userGuessNumber} шариков.`);
        userMarbles -= userGuessNumber;
        botMarbles += userGuessNumber;
        if (userMarbles <= 0) {
          alert('У вас закончились шарики. Бот выиграл');
          return;
        } else if (botMarbles <= 0) {
          alert('У бота закончились шарики. Вы победили');
          return;
        }
      } else {
        alert(`Бот не угадал! Вы забираете ${userGuessNumber} шариков.`);
        userMarbles += userGuessNumber;
        botMarbles -= userGuessNumber;
        if (userMarbles <= 0) {
          alert('У вас закончились шарики. Бот выиграл');
          return;
        } else if (botMarbles <= 0) {
          alert('У бота закончились шарики. Вы победили');
          return;
        }
      }
    };


    const botMove = () => {
      const botGuessNumber = Math.floor(Math.random() * botMarbles) + 1;
      const actualParity = evenOrOdd(botGuessNumber);

      alert(
          `Бот загадал количество шариков.
          Угадайте, четное или нечетное это число.`);


      let userChoice;
      while (true) {
        userChoice = prompt(
            `Введите ваше предположение: ${evenNumber} или ${oddNumber}`);


        if (userChoice === null) {
          const confirmExit = confirm('Точно ли вы хотите выйти?');
          if (confirmExit) {
            throw stop;
          } else {
            continue;
          }
        }

        const emptyLine = userChoice.trim();
        if (emptyLine === '') {
          alert('Сделайте свой выбор');
          continue;
        }

        userChoice = userChoice.toLowerCase();

        if (
          userChoice.startsWith('ч', 'че', 'чет', 'четн', 'четно') ||
          userChoice.startsWith(evenNumber)
        ) {
          userChoice = evenNumber;
          break;
        } else if (
          userChoice.startsWith(
              'н', 'не', 'неч', 'нече', 'нечет', 'нечетн', 'нечетно') ||
          userChoice.startsWith(oddNumber)
        ) {
          userChoice = oddNumber;
          break;
        } else {
          alert(`Пожалуйста, введите ${evenNumber} или ${oddNumber}.`);
        }
      }

      if (userChoice === actualParity) {
        alert(`Вы угадали! Вы забираете ${botGuessNumber} шариков.`);
        userMarbles += botGuessNumber;
        botMarbles -= botGuessNumber;
        if (userMarbles <= 0) {
          alert('У вас закончились шарики. Бот выиграл');
          return;
        } else if (botMarbles <= 0) {
          alert('У бота закончились шарики. Вы победили');
          return;
        }
      } else {
        alert(`Вы не угадали! Бот забирает ${botGuessNumber} шариков.`);
        userMarbles -= botGuessNumber;
        botMarbles += botGuessNumber;
        if (userMarbles <= 0) {
          alert('У вас закончились шарики. Бот выиграл');
          return;
        } else if (botMarbles <= 0) {
          alert('У бота закончились шарики. Вы победили');
          return;
        }
      }
    };

    if (firstPlayer === 'Вы победили!') {
      userMove();
      if (userMarbles > 0 && botMarbles > 0) {
        botMove();
      }
    } else if (firstPlayer === 'Компьютер победил!') {
      botMove();
      if (userMarbles > 0 && botMarbles > 0) {
        userMove();
      }
    }
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

const playGame = () => {
  const rps = rpsGame();
  const rpsResult = rps;
  if (rpsResult === 'Ничья!') {
    return;
  }
  if (rpsResult) {
    const marbleGame = createMarbleGame(rpsResult);

    while (
      marbleGame.getUserMarbles() > 0 &&
      marbleGame.getBotMarbles() > 0
    ) {
      if (marbleGame.playRound()) {
        return;
      }
    }
  }
};

const startGame = () => {
  playGame();
  if (confirm('Хотите сыграть еще?')) {
    startGame();
  }
};

startGame();

window.RPSMarbles = startGame;
