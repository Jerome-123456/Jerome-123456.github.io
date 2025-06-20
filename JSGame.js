const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    backgroundColor: '#fff',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload,
        create,
        update,
    }
     
    
};
const game = new Phaser.Game(config);
let character = 0;

function preload() {
    this.load.image('charecter', 'Assets/character.png');
}

function create() {
    wasd = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
    });
    character = this.add.sprite(400, 300, 'charecter').setDisplaySize(50, 50).setTint(0xFFFFFF);
    
    
}

function update() {
    if (wasd.up.isDown && character.y > 0) {
        character.y -= 5;
    }
    
    if (wasd.down.isDown && character.y < 600 ) {
        character.y += 5;
    }
    if (wasd.left.isDown && character.x > 0) {
        character.x -= 5;
    }
    if (wasd.right.isDown && character.x < 800) {
        character.x += 5;
    }
    
}
