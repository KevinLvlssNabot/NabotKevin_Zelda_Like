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
            debug: true
        }
    },

scene: [Scene0, Scene1] //Scene1, scene2

};

this.game = new Phaser.Game(config);
