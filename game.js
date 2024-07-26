'use strict';

(() => {

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
  alert('у вас ${userMarbles} шариков. У бота ${botMarbles} шариков');

  if(userMarbles <= 0) {
    alert("У вас закончились шарики. Бот выиграл");
    return;
  } else if(botMarbles <= 0){
    alert("У бота закончились шарики. Вы победили");
    return;
  }
}

while(true) {
  guessNumber = prompt('Введите количество шариков, которое вы хотите загадать (1-${userMarbles}):');
  if(guessNumber >= 1 && guessNumber <= userMarbles) {
    break;
  } else {
    alert('Введите число от 1 до ${playerMarbles}.');
  }
}

const botGuess = 













});