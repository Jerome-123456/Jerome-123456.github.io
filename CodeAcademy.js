let player;
const config = {
  height: 600,
  width: 800,
  backgroundColor: '#A0710F',
  parent: 'game',
  type: Phaser.AUTO,
  scene: {
    preload,
    create,
    update,
  },
}

function preload() {
  this.load.image("Background", "Assets/background.png");
  this.load.image("Player", "Assets/player.png");

}
function create() {

  this.add.image(400, 300, "Background");
  player = this.add.sprite(400, 300, "Player");
  this.add.text(600,300,"This is 100% a game");
}

function update() {
  player.x += 10;
}














const game = new Phaser.Game(config);
