class Scene1 extends Phaser.Scene {
  constructor(){
    super("premiere_scene")
  }

preload(){
  	this.load.image('mer','Assets/Asset_Mer.png');
  //	this.load.spritesheet('perso','assets/personne.png',{frameWidth: 25, frameHeight: 50});
  //	this.load.spritesheet('ennemis','assets/ennemis.png',{frameWidth: 40, frameHeight: 39});

  }

create(){
  this.mer = this.add.image(400,300,'mer');

//  this.cursorKeys = this.input.keyboard.createCursorKeys();
//  this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

//  this.platforms = this.physics.add.staticGroup();
//	this.platforms.create(300,300,'platehaute').setScale(0.5).setSize(45,35).setOffset(25,19);
}

update(){
//  if (this.space.isDown) {
//		this.scene.start("deuxieme_scene", {test: this.ciel});
//  }
}

}
