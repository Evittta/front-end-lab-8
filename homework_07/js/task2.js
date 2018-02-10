let game = confirm(`Do you want to play a game?`);
let maxPrize = 10;
let totalPrize = 0;
let minRandom = 0;
let maxRandom = 5;

if (game) {
  while (game) {
    let numRandom =
      Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
    for (let i = 0; i < 3; i++) {
      let numUser = prompt(
        `Enter a number from ${minRandom} to ${maxRandom}\n` +
          `Attempts left: ${3 - i}\n` +
          `Total prize: ${totalPrize}$\n` +
          `Possible prize on current attempt: ${maxPrize}$`
      );
      if (numUser === numRandom) {
        totalPrize += maxPrize;
        alert(
          `Thank you for a game. Your prize is: ${maxPrize}$\n` +
            `Total prize: ${totalPrize}$`
        );
        game = confirm(`Do you want to continue a game?`);
        if (game) {
          minRandom *= 2;
          maxRandom *= 2;
          maxPrize *= 3;
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
          minRandom = 0;
          maxRandom = 5;
          i = -1;
          numRandom =
            Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
        } else {
          break;
        }
      } else {
        maxPrize = Math.floor(maxPrize / 2);
      }
    }
  }
} else {
  alert(`You did not became a millionaire`);
}
