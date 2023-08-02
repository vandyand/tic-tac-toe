
class Board {
constructor() {
this.cells = Array(9).fill(null);
}

render() {
const gameBoard = document.getElementById('game-board');
gameBoard.innerHTML = '';
this.cells.forEach((cell, index) => {
const cellDiv = document.createElement('div');
cellDiv.textContent = cell;
cellDiv.addEventListener('click', () => game.makeMove(index));
gameBoard.appendChild(cellDiv);
});
}

updateCell(index, mark) {
this.cells[index] = mark;
}
}
    