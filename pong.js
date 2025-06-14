const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
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
const sound = new Audio('Sounds/S1.mp3');
let ball, paddleLeft, paddleRight, cursors, score = 0;


function preload() {
    this.load.image('ball', 'Assets/ball.png');
}

function create() {
    wasd = this.input.keyboard.addKeys({
    up: Phaser.Input.Keyboard.KeyCodes.W,
    down: Phaser.Input.Keyboard.KeyCodes.S
    });
    ball = this.physics.add.sprite(400, 300, 'ball').setDisplaySize(20, 20).setTint(0xFFFFFF);
    
 
    // Add rectangle paddles
    paddleLeft = this.add.rectangle(50, 300, 20, 150, 'ball');
    paddleRight = this.add.rectangle(750, 300, 20, 150, 'ball');
 
    // Enable physics
    this.physics.add.existing(paddleLeft, true);
    sound.play();
    this.physics.add.existing(paddleRight, true);
    sound.play();
 
    ball.setVelocity(250, 250);
    ball.setCollideWorldBounds(true);
    ball.setBounce(1);
 
    this.physics.add.collider(ball, paddleLeft, () => score++);
    this.physics.add.collider(ball, paddleRight);
 
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    
    // Right paddle (Player 1)
    if (cursors.up.isDown) {paddleRight.y -= 5; sound.play();}
        
    else if (cursors.down.isDown){ paddleRight.y += 5; sound.play();}
 
    // Left paddle (Player 2)
    if (wasd.up.isDown) {paddleLeft.y -= 5; sound.play();}
    else if (wasd.down.isDown){ paddleLeft.y += 5; sound.play();}
 
    paddleLeft.body.updateFromGameObject();
    paddleRight.body.updateFromGameObject();
 
    if (ball.x < 0 || ball.x > 800) {
        fetch('https://localhost:5001/api/scores', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ player: 'Player1', points: score })
        });
        this.scene.restart();
    }
}