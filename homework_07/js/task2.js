const game = confirm(`Do you want to play a game?`);
let maxPrize = 10;
let totalPrize = 0;
let maxRandom = 5;
let win = false;
let continueGame = true;
let nextGame = true;

if (game) {
  let numRandom = Math.floor(Math.random() * maxRandom + 1);
  let prize = maxPrize;
  for (let i = 0; i < 3; i++) {
    let numUser = prompt(`Enter a number from 0 to ${maxRandom}\n` +
                         `Attempts left: ${3 - i}\n` +
                         `Total prize: ${totalPrize}$\n` +
                         `Possible prize on current attempt: ${prize}$`);
    if ( Number(numUser) === numRandom && !isNaN(parseFloat(numUser)) ) {
      totalPrize += prize;
      maxRandom *= 2;
      maxPrize *= 3;
      prize = maxPrize;
      i = -1;
      win = true;
      numRandom = Math.floor(Math.random() * maxRandom + 1);
      continueGame = confirm(`Do you want to continue game?`);
    } else {
      prize = Math.floor(maxPrize / (2 + i * 2));
      win = false;
    } 
    if ( (i === 2 && !win) || !continueGame ) {
      maxPrize = 10;
      prize = maxPrize;
      maxRandom = 5;
      numRandom = Math.floor(Math.random() * maxRandom + 1);
      nextGame = confirm(`Thank you for a game. Your prize is: ${totalPrize}$\n` +
                         `Do you want to play again?`);
      totalPrize = 0;
      i = -1;
      continueGame = true;
    }
    if (!nextGame) {
      break;
    }
  }
} else {
  alert(`You did not became a millionaire`);
}
