'use strict';

const createMarbleGame = () => {

  let userMarbles = 5;
  let botMarbles = 5;
  let guessNumberrr;

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
  return guessNumber();
}


const guessNumber = () => {
  while(true) {
    guessNumberrr = prompt(`Введите количество шариков, которое вы хотите загадать от 1 до ${userMarbles}:`);
    if(guessNumberrr >= 1 && guessNumberrr <= userMarbles) {
      return;
    } else {
      alert(`Введите число от 1 до ${userMarbles}`);
    }
  }
}

guessNumber();
let botGuess;
if (Math.random() < 0.5) {
  botGuess = 'четное';
  alert('Бот думает, что ваше число четное.');
  
} else {
  botGuess = 'нечетное';
  alert('Бот думает, что ваше число нечетное.');
  
};


const actualParity = evenOrOdd();
  if (botGuess === actualParity) {
    alert(`Бот угадал! Он забирает ${guessNumberrr} шариков.`);
    userMarbles = userMarbles - guessNumberrr;
    botMarbles = botMarbles + guessNumberrr;
} else {
    alert(`Бот не угадал! Вы забираете ${guessNumberrr} шариков.`);
    userMarbles = userMarbles + guessNumberrr;
    botMarbles = botMarbles - guessNumberrr;
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