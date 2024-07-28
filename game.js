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
  if(userMarbles <= 0) {
    alert("У вас закончились шарики. Бот выиграл");
    return;
  } else if(botMarbles <= 0){
    alert("У бота закончились шарики. Вы победили");
    return;
  }


let userGuessNumber;
while(true) {
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

return playRound();

};

while (userMarbles > 0 && botMarbles > 0) {
    playRound();
};

};



const marbleGame = createMarbleGame();












