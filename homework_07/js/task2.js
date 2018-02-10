let game = confirm(`Do you want to play a game?`);
let maxPrize = 10;
let prize = 10;
let totalPrize = 0;
let minRandom = 0;
let maxRandom = 5;

if (game) {
  let numRandom =
    Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
  for (let i = 0; i < 3; i++) {
    let numUser = Number(
      prompt(
        `Enter a number from ${minRandom} to ${maxRandom}\n` +
          `Attempts left: ${3 - i}\n` +
          `Total prize: ${totalPrize}$\n` +
          `Possible prize on current attempt: ${prize}$`
      )
    );
    if (numUser === numRandom) {
      totalPrize += prize;
      alert(
        `Thank you for a game. Your prize is: ${prize}$\n` +
          `Total prize: ${totalPrize}$`
      );
      game = confirm(`Do you want to continue a game?`);
      if (game) {
        minRandom *= 2;
        maxRandom *= 2;
        maxPrize *= 3;
        prize = maxPrize;
        i = -1;
        numRandom =
          Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
      } else {
        break;
      }
    } else if (i == 2) {
      game = confirm(
        `Thank you for a game. Your prize is: ${totalPrize}$\n` +
          `Do you want to play again?`
      );
      if (game) {
        totalPrize = 0;
        maxPrize = 10;
        prize = 10;
        minRandom = 0;
        maxRandom = 5;
        i = -1;
        numRandom =
          Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
      } else {
        break;
      }
    } else if (i == 1) {
      prize = Math.floor(prize / 2);
    } else {
      prize = Math.floor(maxPrize / 2);
    }
  }
} else {
  alert(`You did not became a millionaire`);
}
