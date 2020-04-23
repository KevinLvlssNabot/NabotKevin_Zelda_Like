class Scene1 extends Phaser.Scene {
  constructor(){
    super("premiere_scene")
  }


init(data){
}

preload(){
  // chargement des assets
  	this.load.spritesheet('oceland','assets/SpriteSheets/oceland.png',{frameWidth: 804, frameHeight: 600});
  //  this.load.image('oceland','assets/PNGsAssetsFixes/Base.png',{frameWidth: 804, frameHeight: 600});
    this.load.spritesheet('jena_idle','assets/SpriteSheets/Jena_Idle.png',{frameWidth: 253, frameHeight: 300});
    this.load.spritesheet('jena_idle_droite','assets/SpriteSheets/Jena_IdleSide.png',{frameWidth: 150, frameHeight: 272});
    this.load.spritesheet('jena_idle_top','assets/SpriteSheets/Jena_IdleTop.png',{frameWidth: 253, frameHeight: 300});
    this.load.spritesheet('jena_swim_top','assets/SpriteSheets/JenaSwimtop.png',{frameWidth: 216, frameHeight: 200});
    this.load.spritesheet('jena_swim_bottom','assets/SpriteSheets/JenaSwimBottom2.png',{frameWidth: 180, frameHeight: 170});
    this.load.spritesheet('jena_lateral_swim','assets/SpriteSheets/JenaLateralSwim.png',{frameWidth: 307, frameHeight: 255});
    this.load.image('manette','assets/PNGsAssetsFixes/TailBack.png');


  }

create(){
  oceland = this.add.sprite(400,300,'oceland').setScrollFactor(0.5); // creation environnement
//
  this.cameras.main.setZoom(2).setBounds(0,0,800,600); // zoom de la caméra
//
  player = this.physics.add.sprite(30,600,'jena_idle').setScale(0.08); // creation et definition des paramètres du personnage
  player.setCollideWorldBounds(true);
  player.setBounce(0);
//
  this.essai = this.physics.add.staticGroup();
  this.essai.create(150,250,'manette');
  this.physics.add.overlap(player,this.essai, scroll, null, this);
//
  this.cameras.main.setOrigin(0,1); // caméra centrée sur le premier plan du monde
// creation des animations
  this.anims.create({
    key: 'ocelandAnimation',
    frames: this.anims.generateFrameNumbers('oceland', {start: 0, end: 7}),
    frameRate: 8,
    repeat: -1
  });

  this.anims.create({
    key: 'jena_idle',
    frames: this.anims.generateFrameNumbers('jena_idle', {start: 0, end: 1}),
    frameRate: 2,
    repeat: -1
  });

  this.anims.create({
    key: 'jena_idle_droite',
    frames: this.anims.generateFrameNumbers('jena_idle_droite', {start: 0, end: 3}),
    frameRate: 4,
    repeat: -1
  });

  this.anims.create({
    key: 'jena_idle_top',
    frames: this.anims.generateFrameNumbers('jena_idle_top', {start: 0, end: 1}),
    frameRate: 2,
    repeat: -1
  });

  this.anims.create({
    key: 'jena_swim_top',
    frames: this.anims.generateFrameNumbers('jena_swim_top', {start: 0, end: 9}),
    frameRate: 7,
    repeat: -1
  });

  this.anims.create({
    key: 'jena_lateral_swim',
    frames: this.anims.generateFrameNumbers('jena_lateral_swim', {start: 0, end: 5}),
    frameRate: 7,
    repeat: -1
  });

  this.anims.create({
    key: 'jena_swim_bottom',
    frames: this.anims.generateFrameNumbers('jena_swim_bottom', {start: 0, end: 9}),
    frameRate: 7,
    repeat: -1
  });
  //
    cursors = this.input.keyboard.createCursorKeys();
  //
}

update(){
  // activation des animations
    oceland.anims.play('ocelandAnimation', false);
  //

  if(cursors.left.isDown){ // mouvements du personnage
    player.setFlipX(true);
    idlenumber = 2; // variable pour gérer les différentes animations "idle"
    player.anims.play('jena_lateral_swim', true);
    player.setVelocityX(-100);
  }else if(cursors.right.isDown){
    player.setFlipX(false);
    player.anims.play('jena_lateral_swim', true);
    idlenumber = 3;
    player.setVelocityX(100);
  } else if(cursors.up.isDown){
    player.anims.play('jena_swim_top', true);
    idlenumber = 1;
    player.setVelocityY(-100);
  } else if(cursors.down.isDown){
    player.anims.play('jena_swim_bottom', true);
    player.setVelocityY(100);
    idlenumber = 0;
  } else if (!cursors.left.isDown && !cursors.up.isDown && !cursors.right.isDown && !cursors.down.isDown){
      if (idlenumber == 0) {
        player.anims.play('jena_idle', true);
      } else if (idlenumber == 1) {
        player.anims.play('jena_idle_top', true);
      } else if (idlenumber == 2) {
        player.anims.play('jena_idle_droite', true);
        player.setFlipX(true);
      } else if (idlenumber == 3) {
        player.anims.play('jena_idle_droite', true);
        player.setFlipX(false);
      }
    player.setVelocityX(0);
    player.setVelocityY(0);
  }
//
}

}
