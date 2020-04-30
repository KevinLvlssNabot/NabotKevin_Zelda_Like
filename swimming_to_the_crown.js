var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	input: {
		gamepad: true
	},
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },

scene: [Scene0, Scene1, Scene2, Scene3] //Scene1, scene2

};

this.game = new Phaser.Game(config);
