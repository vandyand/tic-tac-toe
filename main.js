
const game = new Game();
game.start();

document.getElementById('reset-button').addEventListener('click', () => {
game = new Game();
game.start();
});
    