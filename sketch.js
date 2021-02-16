var gameState, playerCount, database, form, player, game;
var allPlayers = [];

function setup(){
    createCanvas(400,400);
    database = firebase.database();
    gameState = 0;

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background('#FFFFFF');

    if (playerCount === 4) {
        game.update(1);
    }

    if (gameState === 1) {
        clear();
        game.play();
    }
}