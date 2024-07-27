'use strict';

const createMarbleGame = () => {

  let userMarbles = 5;
  let botMarbles = 5;

  const evenOrOdd = (number) => {
    if (number % 2 === 0) {
      return 'четное';
  } else {
      return 'нечетное';
  }
};

const playRound = () => {
  alert(`у вас ${userMarbles} шариков. У бота ${botMarbles} шариков`);

  if(userMarbles <= 0) {
    alert("У вас закончились шарики. Бот выиграл");
    return;
  } else if(botMarbles <= 0){
    alert("У бота закончились шарики. Вы победили");
    return;
  }
}

const guessNumber = (guessNumberrr) => {
  while(true) {
    guessNumberrr = prompt(`Введите количество шариков, которое вы хотите загадать от 1 до ${userMarbles}:`);
    if(guessNumber >= 1 && guessNumber <= this.userMarbles) {
      return;
    } else {
      alert(`Введите число от 1 до ${userMarbles}`);
    }
  }
}

// guessNumber();
let botGuess;
if (Math.random() < 0.5) {
  botGuess = 'четное';
  alert('Бот думает, что ваше число четное.');
  return playRound();
} else {
  botGuess = 'нечетное';
  alert('Бот думает, что ваше число нечетное.');
  return playRound();
};


const actualParity = evenOrOdd(guessNumber);
        if (botGuess === actualParity) {
            console.log(`Бот угадал! Он забирает ${guessNumber} шариков.`);
            userMarbles -= guessNumber;
            botMarbles += guessNumber;
        } else {
            console.log(`Бот не угадал! Вы забираете ${guessNumber} шариков.`);
            userMarbles += guessNumber;
            botMarbles -= guessNumber;
        }
    

  
    return {
        playRound: playRound(),
        getUserMarbles: () => userMarbles,
        getBotMarbles: () => botMarbles
    };


const marbleGame = createMarbleGame();

while (marbleGame.getUserMarbles() > 0 && marbleGame.getBotMarbles() > 0) {
    marbleGame.playRound();
};






};

createMarbleGame();