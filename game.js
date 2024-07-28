'use strict';

const createMarbleGame = () => {

  let userMarbles = 5;
  let botMarbles = 5;
  let userGuessNumber;
  const evenNumber = 'четное';
  const oddNumber = 'нечетное';

  const evenOrOdd = (userGuessNumber) => {
    if (userGuessNumber % 2 === 0) {
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
  return guessNumber();
}


const guessNumber = () => {
  while(true) {
    userGuessNumber = parseInt(prompt(`Введите количество шариков, которое вы хотите загадать от 1 до ${userMarbles}:`));
    if(userGuessNumber >= 1 && userGuessNumber <= userMarbles) {
      return;
    } else {
      alert(`Введите число от 1 до ${userMarbles}`);
    }
  }
} 

guessNumber();
let botGuess;
if (Math.random() < 0.5) {
  botGuess = evenNumber;
  alert(`Бот думает, что ваше число ${evenNumber}.`);
  
} else {
  botGuess = oddNumber;
  alert(`Бот думает, что ваше число ${oddNumber}.`);
  
};


const actualParity = evenOrOdd(userGuessNumber);
  if (botGuess === actualParity) {
    alert(`Бот угадал! Он забирает ${userGuessNumber} шариков.`);
    userMarbles = userMarbles - userGuessNumber;
    botMarbles += userGuessNumber;
} else {
    alert(`Бот не угадал! Вы забираете ${userGuessNumber} шариков.`);
    userMarbles += userGuessNumber;
    botMarbles = botMarbles - userGuessNumber;
}
 return playRound();
        
    



const marbleGame = createMarbleGame();

while (marbleGame.getUserMarbles() > 0 && marbleGame.getBotMarbles() > 0) {
    marbleGame.playRound();
};






};

createMarbleGame();