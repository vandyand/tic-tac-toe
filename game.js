
class Game {
constructor() {
this.board = new Board();
this.players = [new Player('X', true), new Player('O', false)];
this.currentPlayerIndex = 0;
}

start() {
this.board.render();
}

makeMove(index) {
if (this.board.cells[index] === null) {
this.board.updateCell(index, this.currentPlayer.mark);
this.board.render();
if (this.checkWin()) {
alert(`${this.currentPlayer.mark} wins!`);
} else if (this.board.cells.every(cell => cell !== null)) {
alert('Draw!');
} else {
this.currentPlayerIndex = 1 - this.currentPlayerIndex;
}
}
}

checkWin() {
const winConditions = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];
return winConditions.some(condition => condition.every(index => this.board.cells[index] === this.currentPlayer.mark));
}

get currentPlayer() {
return this.players[this.currentPlayerIndex];
}
}
    