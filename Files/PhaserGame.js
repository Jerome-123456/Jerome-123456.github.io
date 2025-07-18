const gameState = {}
var config = {
    type: Phaser.AUTO,
    width: 576,
    height: 324,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    parent: 'game',
};


function preload ()
{
    this.load.image('Background', 'Assets/background 1.png');
    this.load.spritesheet('Player', 'Assets/player.png', { frameWidth: 100, frameHeight: 100 });
}

function create ()
{
    this.add.image(288, 162, 'Background');

    gameState.player = this.add.sprite(565,300,'Player')

    gameState.cursors = this.input.keyboard.createCursorKeys()
    
}

function update ()
{
    if(gameState.cursors.right.isDown && gameState.player.x < 576){
        gameState.player.x += 2;
    }
    if(gameState.cursors.left.isDown && gameState.player.x > 0){
        gameState.player.x -= 2;
    }
}

const game = new Phaser.Game(config);