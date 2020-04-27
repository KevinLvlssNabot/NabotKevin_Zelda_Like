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
  this.load.image('ocelandBoss','assets/PNGsAssetsFixes/OcelandBoss.png');
  this.load.image('rochers','assets/PNGsAssetsFixes/Rochers.png');
  this.load.image('meduses','assets/PNGsAssetsFixes/Méduses (2).png');
//
  this.load.spritesheet('bossMoveFace','assets/SpriteSheets/BossMoveFace.png',{frameWidth: 442, frameHeight: 540});
  this.load.spritesheet('bossMoveSide','assets/SpriteSheets/BossMoveSide.png',{frameWidth: 524, frameHeight: 380});
  this.load.spritesheet('bossMoveBack','assets/SpriteSheets/BossMoveBack.png',{frameWidth: 440, frameHeight: 350});
//
  this.load.image('scrollerHorizontal','assets/PNGsAssetsFixes/scrollerHorizontal.png');
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

  this.anims.create({
    key: 'bossMoveFace',
    frames: this.anims.generateFrameNumbers('bossMoveFace', {start: 0, end: 1}),
    frameRate: 2,
    repeat: -1
  });

  this.anims.create({
    key: 'bossMoveSide',
    frames: this.anims.generateFrameNumbers('bossMoveSide', {start: 0, end: 1}),
    frameRate: 2,
    repeat: -1
  });

  this.anims.create({
    key: 'bossMoveBack',
    frames: this.anims.generateFrameNumbers('bossMoveBack', {start: 0, end: 1}),
    frameRate: 2,
    repeat: -1
  });

//
  oceland = this.add.image(400,300,'ocelandBoss').setScale(0.25);
//
    player = this.physics.add.sprite(410,240,'jena_idle').setScale(0.16).setSize(180,250).setOffset(40,15); // creation et definition des paramètres du personnage
    player.setCollideWorldBounds(true);
    player.setBounce(0);
//
  boss = this.physics.add.sprite(400,130,'bossMoveFace').setScale(0.2).setSize(350,300).setOffset(50,10);
  boss.setCollideWorldBounds(true);
  boss.setBounce(0);
  this.physics.add.collider(player, boss);
//
  meduses = this.physics.add.staticGroup();
  meduse = meduses.create(315, 65,'meduses').setScale(0.2).setSize(50,22).setOffset(115,45).setFlipX(true);
  meduse = meduses.create(370, 65,'meduses').setScale(0.2).setSize(50,22).setOffset(115,45).setFlipX(true);
  meduse = meduses.create(425, 65,'meduses').setScale(0.2).setSize(50,22).setOffset(115,45);
  meduse = meduses.create(480, 65,'meduses').setScale(0.2).setSize(50,22).setOffset(115,45);
  meduse = meduses.create(315, 590,'meduses').setScale(0.2).setSize(50,22).setOffset(115,45).setFlipX(true);
  meduse = meduses.create(370, 590,'meduses').setScale(0.2).setSize(50,22).setOffset(115,45).setFlipX(true);
  meduse = meduses.create(425, 590,'meduses').setScale(0.2).setSize(50,22).setOffset(115,45);
  meduse = meduses.create(480, 590,'meduses').setScale(0.2).setSize(50,22).setOffset(115,45);
  this.physics.add.collider(player, meduses);
  this.physics.add.collider(boss, meduses);
//
  rochers = this.physics.add.staticGroup();
  rocher = rochers.create(10,10,'rochers').setScale(0.4).setSize(50,40).setOffset(80,30);
  rocher = rochers.create(70,20,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25);
  rocher = rochers.create(130,30,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25);
  rocher = rochers.create(190,40,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25);
  rocher = rochers.create(265,40,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25);
  rocher = rochers.create(515,40,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25).setFlipX(true);
  rocher = rochers.create(590,40,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25).setFlipX(true);
  rocher = rochers.create(660,30,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25).setFlipX(true);
  rocher = rochers.create(720,20,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25).setFlipX(true);
  rocher = rochers.create(790,10,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25).setFlipX(true);
  rocher = rochers.create(210,210,'rochers').setScale(0.8).setSize(120,45).setOffset(28,40);
  rocher = rochers.create(590,210,'rochers').setScale(0.8).setSize(120,45).setOffset(28,40).setFlipX(true);
  rocher = rochers.create(210,450,'rochers').setScale(0.8).setSize(120,45).setOffset(28,40);
  rocher = rochers.create(590,450,'rochers').setScale(0.8).setSize(120,45).setOffset(28,40).setFlipX(true);
  rocher = rochers.create(10,590,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25);
  rocher = rochers.create(70,590,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25);
  rocher = rochers.create(130,590,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25);
  rocher = rochers.create(190,590,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25);
  rocher = rochers.create(265,590,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25);
  rocher = rochers.create(515,590,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25).setFlipX(true);
  rocher = rochers.create(590,590,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25).setFlipX(true);
  rocher = rochers.create(660,590,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25).setFlipX(true);
  rocher = rochers.create(720,590,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25).setFlipX(true);
  rocher = rochers.create(790,590,'rochers').setScale(0.4).setSize(70,40).setOffset(60,25).setFlipX(true);
  this.physics.add.collider(player, rochers);
  this.physics.add.collider(boss, rochers);
//
  scrollers = this.physics.add.staticGroup();
  scroller = scrollers.create(400,10,'scrollerHorizontal');
  this.physics.add.overlap(player,scrollers, scroll, null, this);
//
      bulledevies = this.add.group();
       bulledevie = bulledevies.create(30, 30, 'bulledevie').setScale(0.4);
       bulledevie = bulledevies.create(70, 30, 'bulledevie').setScale(0.4);
       bulledevie = bulledevies.create(110, 30, 'bulledevie').setScale(0.4);
//
      money = this.add.image(30,70,'coquillageMoney').setScale(0.5);
      moneyAffichage = this.add.text(30,70, 'x' + moneyCompte, { fontFamily : 'Courrier New', fontSize: '24px', fill: '#fff' })
// Création des différents controles
    cursors = this.input.keyboard.createCursorKeys();
//
}


update(){

  if(cursors.left.isDown){ // mouvements du personnage
    player.setFlipX(true);
    idlenumber = 2; // variable pour gérer les différentes animations "idle"
    player.anims.play('jena_lateral_swim', true);
    player.setVelocityX(-150);
  }else if(cursors.right.isDown){
    player.setFlipX(false);
    player.anims.play('jena_lateral_swim', true);
    idlenumber = 3;
    player.setVelocityX(150);
  } else if(cursors.up.isDown){
    player.anims.play('jena_swim_top', true);
    idlenumber = 1;
    player.setVelocityY(-150);
  } else if(cursors.down.isDown){
    player.anims.play('jena_swim_bottom', true);
    player.setVelocityY(150);
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
// Déplacements boss
if (boss.x == 400 && boss.y == 130) {
    boss.body.velocity.x = 125;
}
      if (boss.x >= 720 && boss.y < 500) {
        boss.body.velocity.x = 0;
        boss.body.velocity.y = 125;
      } else if (boss.y >= 530 && boss.x >= 720) {
        boss.body.velocity.y = 0;
        boss.body.velocity.x = -125;
      } else if (boss.x <= 100 && boss.y >= 530) {
        boss.body.velocity.x = 0;
        boss.body.velocity.y = -125;
      } else if (boss.x <= 100 && boss.y <= 130) {
        boss.body.velocity.x = 125;
        boss.body.velocity.y = 0;
      }
// Animations Boss
if (boss.body.velocity.y > 0) {
  boss.anims.play('bossMoveFace', true);
  boss.setSize(350,300).setOffset(50,10);
} else if (boss.body.velocity.y < 0) {
  boss.anims.play('bossMoveBack', true);
  boss.setSize(350,300).setOffset(50,100);
}
    if (boss.body.velocity.x > 0) {
        boss.anims.play('bossMoveSide', true);
        boss.setFlipX(false);
        boss.setSize(150,300).setOffset(20,100);
    } else if (boss.body.velocity.x < 0) {
        boss.anims.play('bossMoveSide', true);
        boss.setFlipX(true);
        boss.setSize(150,300).setOffset(280,100);
    }
}


}
