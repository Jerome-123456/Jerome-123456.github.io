const gameState = {}
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update 
    },
    parent: 'PhaserGame',
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('Sprite','Assets/Sprite1.png');
}

function create(){
  gameState.codey = this.add.sprite(400,300,'Sprite');
  gameState.cursors = this.input.keyboard.createCursorKeys()
}

function update(){
    if(gameState.cursors.down.isDown){
    gameState.codey.y += 3
    }
    if(gameState.cursors.up.isDown){
        gameState.codey.y -= 3
    }
    if(gameState.cursors.left.isDown){
        gameState.codey.x -= 3
    }
    if(gameState.cursors.right.isDown){
        gameState.codey.x += 3
    }
}