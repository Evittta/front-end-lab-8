const gameList = [];
let blackOrWhite = 0;

(() => {
  for (let i = 0; i < 15 * 15; i++) {
    $(`.cells-wrap`).append(`<div class="cell"></div>`);
  }
  for (let i = 0; i < 16; i++) {
    const row = $(`<div>`).addClass(`row`);
    $(`.circles-wrap`).append(row);
    gameList[i] = [];
    for (let j = 0; j < 16; j++) {
      const circle = $(`<div>`).addClass(`circle`);
      row.append(circle);
      gameList[i][j] = `${j}`;
    }
  }
})();

const startGame = () => {
  removeStartGameButton();
  $(`.circle`).click(function() {
    if ( blackOrWhite % 2 === 0 && $(this).hasClass(`circle`) ) {
      const row = $(this).parent().index();
      const currentItem = $(this).index();   
      gameList[row][currentItem] = `white`;
      createColorCircle($(this), `white`);
      setCurrentPlayer(`.black-player`, `.white-player`);
      checkNeighborItems(row, currentItem, `white`);
    } else if ( $(this).hasClass(`circle`) ) {
      const row = $(this).parent().index();
      const currentItem = $(this).index();
      gameList[row][currentItem] = `black`;
      createColorCircle($(this), `black`);
      setCurrentPlayer(`.white-player`, `.black-player`);
      checkNeighborItems(row, currentItem, `black`);
    }
  });
};

const checkNeighborItems = (row, currentItem, color) => {
  checkInRow(row, currentItem, color);
  checkInColumn(row, currentItem, color);
  checkInDiagonal(row, currentItem, color);
};

const checkInRow = (row, currentItem, color) => {
  let i = 1,
      j = 1;
  let countCirclesInRow = 1;
  while (gameList[row][currentItem - i] === color && i < 4) {
    countCirclesInRow++;
    i++;
  }
  while (gameList[row][currentItem + j] === color && j < 4) {
    countCirclesInRow++;
    j++;
  }
  if (countCirclesInRow >= 4) {
    getWin(color);
  }
};

const checkInColumn = (row, currentItem, color) => {
  let i = 1,
      j = 1;
  let countCirclesInColumn = 1;
  while (row - i >= 0 && gameList[row - i][currentItem] === color) {
    countCirclesInColumn++;
    i++;
  }
  while (row + j <= 15 && gameList[row + j][currentItem] === color) {
    countCirclesInColumn++;
    j++;
  }
  if (countCirclesInColumn >= 4) {
    getWin(color);
  }
};

const checkInDiagonal = (row, currentItem, color) => {
  let i = 1,
      j = 1,
      k = 1,
      l = 1,
      countRightToLeft = 1,
      countLeftToRight = 1;
  while (row - i >= 0 && currentItem - i >= 0 &&
          gameList[row - i][currentItem - i] === color) {
    countRightToLeft++;
    i++;
  }
  while (row + j <= 15 && currentItem + j <= 15 &&
          gameList[row + j][currentItem + j] === color) {
    countRightToLeft++;
    j++;
  }
  while (row - k >= 0 && currentItem + k >= 0 &&
          gameList[row - k][currentItem + k] === color) {
    countLeftToRight++;
    k++;
  }
  while (row + l <= 15 && currentItem - l <= 15 &&
          gameList[row + l][currentItem - l] === color) {
    countLeftToRight++;
    l++;
  }
  if (countLeftToRight >= 4 || countRightToLeft >= 4) {
    getWin(color);
  }
};

const startNewGame = () => {
  removeLastGame();
  $(`.circles-wrap`).css({display: `grid`});
  removeGameList();
  startGame();
};

const createColorCircle = (self, color) => {
  self.addClass(color);
  self.removeClass(`circle`);
  blackOrWhite++;
};

const setCurrentPlayer = (nextPlayer, lastPlayer) => {
  $(nextPlayer).addClass(`current-player`);
  $(lastPlayer).removeClass(`current-player`);
};

const getWin = color => {
  $(`.start-game`).show(`fast`);
  $(`.winner`)
      .find(`p`)
      .text(`${color[0].toUpperCase()}${color.slice(1)} is the winner`);
  $(`.start-button`).click(startNewGame);
  $(`.circles-wrap`).css({display: `none`});
};

const removeStartGameButton = () => {
  $(`.start-game`).hide(`fast`);
};

const removeLastGame = () => {
  $(`.black`).addClass(`circle`);
  $(`.white`).addClass(`circle`);
  $(`.circle`).removeClass(`black`);
  $(`.circle`).removeClass(`white`);
};

const removeGameList = () => {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      gameList[i][j] = `${j}`;
    }
  }
};

$(`.start-button`).click(startGame);
