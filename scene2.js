class Scene2 extends Phaser.Scene {
  constructor(){
    super("deuxieme_scene")
  }


init(data){
}

preload(){
  this.load.spritesheet('jena_idle','assets/SpriteSheets/Jena_Idle.png',{frameWidth: 253, frameHeight: 300});
  this.load.spritesheet('jena_idle_droite','assets/SpriteSheets/Jena_IdleSide.png',{frameWidth: 150, frameHeight: 272});
  this.load.spritesheet('jena_idle_top','assets/SpriteSheets/Jena_IdleTop.png',{frameWidth: 253, frameHeight: 300});
  this.load.spritesheet('jena_swim_top','assets/SpriteSheets/JenaSwimtop.png',{frameWidth: 216, frameHeight: 200});
  this.load.spritesheet('jena_swim_bottom','assets/SpriteSheets/JenaSwimBottom2.png',{frameWidth: 180, frameHeight: 170});
  this.load.spritesheet('jena_lateral_swim','assets/SpriteSheets/JenaLateralSwim.png',{frameWidth: 300, frameHeight: 255});
//
  this.load.image('bulledevie','assets/PNGsAssetsFixes/Bulle (3).png');
  this.load.image('coquillageMoney','assets/PNGsAssetsFixes/Coquillage (2).png');
}

create(){
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
    frameRate: 6,
    repeat: -1
  });

  this.anims.create({
    key: 'jena_swim_bottom',
    frames: this.anims.generateFrameNumbers('jena_swim_bottom', {start: 0, end: 9}),
    frameRate: 7,
    repeat: -1
  });

//
    player = this.physics.add.sprite(410,240,'jena_idle').setScale(0.08).setSize(180,250).setOffset(40,15); // creation et definition des paramètres du personnage
    player.setCollideWorldBounds(true);
    player.setBounce(0);
//
      bulledevies = this.add.group();
       bulledevie = bulledevies.create(15, 315, 'bulledevie').setScale(0.2);
       bulledevie = bulledevies.create(35, 315, 'bulledevie').setScale(0.2);
       bulledevie = bulledevies.create(55, 315, 'bulledevie').setScale(0.2);
//
      money = this.add.image(15,335,'coquillageMoney').setScale(0.25);
      moneyAffichage = this.add.text(16,335, 'x' + moneyCompte, { fontFamily : 'Courrier New', fontSize: '12px', fill: '#fff' })
// Création des différents controles
    cursors = this.input.keyboard.createCursorKeys();
//
}


update(){

  if(cursors.left.isDown){ // mouvements du personnage
    player.setFlipX(true);
    idlenumber = 2; // variable pour gérer les différentes animations "idle"
    player.anims.play('jena_lateral_swim', true);
    player.setVelocityX(-75);
  }else if(cursors.right.isDown){
    player.setFlipX(false);
    player.anims.play('jena_lateral_swim', true);
    idlenumber = 3;
    player.setVelocityX(75);
  } else if(cursors.up.isDown){
    player.anims.play('jena_swim_top', true);
    idlenumber = 1;
    player.setVelocityY(-75);
  } else if(cursors.down.isDown){
    player.anims.play('jena_swim_bottom', true);
    player.setVelocityY(75);
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
}


}
