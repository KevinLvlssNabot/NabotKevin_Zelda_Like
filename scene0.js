class Scene0 extends Phaser.Scene {
  constructor(){
    super("scene_zero")
  }

init(data){

}


preload(){
  this.load.spritesheet('jena_idle','assets/SpriteSheets/Jena_NB.png',{frameWidth: 253, frameHeight: 300});
  this.load.spritesheet('jena_idle_droite','assets/SpriteSheets/Jena_IdleSide_NB.png',{frameWidth: 150, frameHeight: 272});
  this.load.spritesheet('jena_idle_top','assets/SpriteSheets/Jena_IdleTop_NB.png',{frameWidth: 253, frameHeight: 300});
  this.load.spritesheet('jena_swim_top','assets/SpriteSheets/JenaSwimtopNB.png',{frameWidth: 216, frameHeight: 200});
  this.load.spritesheet('jena_swim_bottom','assets/SpriteSheets/JenaSwimBottom2NB.png',{frameWidth: 180, frameHeight: 170});
  this.load.spritesheet('jena_lateral_swim','assets/SpriteSheets/JenaLateralSwimNB.png',{frameWidth: 300, frameHeight: 255});
  this.load.spritesheet('jena_attack_side','assets/SpriteSheets/Jena_Attack_SideNB.png',{frameWidth: 300, frameHeight: 270});
  this.load.spritesheet('jena_attack_top','assets/SpriteSheets/Jena_Attack_BackNB.png',{frameWidth: 274, frameHeight: 278});
  this.load.spritesheet('jena_attack_bottom','assets/SpriteSheets/Jena_Attack_FrontNB.png',{frameWidth: 275, frameHeight: 500});
//
  this.load.image('bulledevieNB','assets/PNGsAssetsFixes/BulleNB.png');
  this.load.image('coquillageNB','assets/PNGsAssetsFixes/CoquillageNB.png');
  this.load.image('medusesNB','assets/PNGsAssetsFixes/MédusesNB.png');
  this.load.image('dialogueNB','assets/PNGsAssetsFixes/DialogueNB.png');
  this.load.image('etoileNB','assets/PNGsAssetsFixes/Etoile de MerNB.png');
  this.load.image('algueNB','assets/PNGsAssetsFixes/AlguesNB.png');
  this.load.image('corailNB','assets/PNGsAssetsFixes/CorailMagiqueNB.png');
  this.load.image('inventaireNB','assets/PNGsAssetsFixes/InventaireNB.png');
  this.load.image('choice','assets/PNGsAssetsFixes/Enlightment.png');
  this.load.spritesheet('tourbillon','assets/SpriteSheets/Tourbillon.png',{frameWidth: 167, frameHeight: 70});
//
  this.load.image('ocelandNB','assets/PNGsAssetsFixes/OcelandNB.png');
//
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
    key: 'jena_attack_side',
    frames: this.anims.generateFrameNumbers('jena_attack_side', {start: 0, end: 9}),
    frameRate: 50,
    repeat: 0
  });

  this.anims.create({
    key: 'jena_attack_top',
    frames: this.anims.generateFrameNumbers('jena_attack_top', {start: 0, end: 4}),
    frameRate: 50,
    repeat: 0
  });

  this.anims.create({
    key: 'jena_attack_bottom',
    frames: this.anims.generateFrameNumbers('jena_attack_bottom', {start: 0, end: 4}),
    frameRate: 50,
    repeat: 0
  });

  this.anims.create({
    key: 'tourbillon',
    frames: this.anims.generateFrameNumbers('tourbillon', {start: 0, end: 1}),
    frameRate: 4,
    repeat: -1
  });
//
  oceland = this.add.image(400,300,'ocelandNB').setScale(0.25);
//
  player = this.physics.add.sprite(30,285,'jena_idle').setScale(0.16).setSize(180,250).setOffset(40,15); // creation et definition des paramètres du personnage
  player.setCollideWorldBounds(true);
  player.setBounce(0);
//
  meduses = this.physics.add.staticGroup();
  meduse = meduses.create(30,250,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(85,250,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(140,250,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(195,250,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(250,250,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(250,225,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(250,200,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(250,175,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(305,175,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(360,175,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(415,175,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(470,175,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(525,175,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(580,175,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(635,175,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(690,175,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(745,175,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(800,175,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  //
  meduse = meduses.create(30,350,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(85,350,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(140,350,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(195,350,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(250,350,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(305,350,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(360,350,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(360,325,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(360,300,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(360,275,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(415,275,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(470,275,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(525,275,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(580,275,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(635,275,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(690,275,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(745,275,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  meduse = meduses.create(800,275,'medusesNB').setScale(0.2).setSize(53,22).setOffset(110,45);
  this.physics.add.collider(player, meduses);
//
  algues = this.physics.add.staticGroup();
  algue = algues.create(770,240,'algueNB').setScale(0.16).setSize(50,15).setOffset(145,40);
  algue = algues.create(770,220,'algueNB').setScale(0.16).setSize(50,15).setOffset(145,40);
  algue = algues.create(770,200,'algueNB').setScale(0.16).setSize(50,15).setOffset(145,40);
  algue = algues.create(310,150,'algueNB').setScale(0.16).setSize(50,15).setOffset(145,40);
  this.physics.add.collider(player, algues, plusDalgues, null, this);
//
  corail = this.physics.add.staticGroup();
  corail.create(430,145,'corailNB').setScale(0.6).setSize(50,30).setOffset(15,15);
//
  bulledevies = this.add.group();
   bulledevie = bulledevies.create(30, 30, 'bulledevieNB').setScale(0.4).visible = false;
   bulledevie = bulledevies.create(70, 30, 'bulledevieNB').setScale(0.4).visible = false;
   bulledevie = bulledevies.create(110, 30, 'bulledevieNB').setScale(0.4).visible = false;
//
tourbillons = this.physics.add.group();
tourbillon = tourbillons.create(650, 145, 'tourbillon').anims.play('tourbillon').setScale(0.2);
//
  etoiles = this.physics.add.group();
  etoile = etoiles.create(530, 145,'etoileNB').setScale(0.4);
//
  money = this.add.image(30,70,'coquillageNB').setScale(0.5).setVisible(false);
  moneyAffichage = this.add.text(30,70, 'x' + moneyCompte, { fontFamily : 'Courrier New', fontSize: '24px', fill: '#fff' }).setVisible(false);
//
  dialogue = this.add.image(400,500,'dialogueNB');
//
  inventaire = this.add.image(400,300,'inventaireNB').setVisible(false);
  choice = this.add.image(290,263,'choice').setVisible(false);
//
  cursors = this.input.keyboard.createCursorKeys();
  enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  i = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
  space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
//
  text = this.add.text(50,475, '', { fontFamily : 'Linux Libertine Display G', fontSize: '24px', fill: '#fff'}).setWordWrapWidth(500, false);
  skip = this.add.text(600,560, 'ENTRER/Croix/A pour passer.',{ fontFamily : 'Linux Libertine Display G', fontSize: '12px', fill: '#fff'});
//
  player.on('animationcomplete', animComplete, this);
}

update(){
if (tuto > 0) {
  tutoriel();
}

if (tuto == 0 && displayInventaire == 0) {
  if(cursors.left.isDown && !space.isDown){ // mouvements du personnage
    player.setFlipX(true);
    idlenumber = 2; // variable pour gérer les différentes animations "idle"
    player.anims.play('jena_lateral_swim', true);
    player.setVelocityX(-150);
    attack = 0;
  }else if(cursors.right.isDown && !space.isDown){
    player.setFlipX(false);
    player.anims.play('jena_lateral_swim', true);
    idlenumber = 3;
    player.setVelocityX(150);
    attack = 0;
  } else if(cursors.up.isDown && !space.isDown){
    player.anims.play('jena_swim_top', true);
    idlenumber = 1;
    player.setVelocityY(-150);
    attack = 0;
  } else if(cursors.down.isDown && !space.isDown){
    player.anims.play('jena_swim_bottom', true);
    player.setVelocityY(150);
    idlenumber = 0;
    attack = 0;
  } else if (!cursors.left.isDown && !cursors.up.isDown && !cursors.right.isDown && !cursors.down.isDown && !space.isDown){
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

  // manette
  if (gamepad)
    {
        if (gamepad.left)
        {
          player.setFlipX(true);
          idlenumber = 2; // variable pour gérer les différentes animations "idle"
          player.anims.play('jena_lateral_swim', true);
          player.setVelocityX(-150);
        }
        else if (gamepad.right)
        {
          player.setFlipX(false);
          player.anims.play('jena_lateral_swim', true);
          idlenumber = 3;
          player.setVelocityX(150);
        }

        if (gamepad.up)
        {
          player.anims.play('jena_swim_top', true);
          idlenumber = 1;
          player.setVelocityY(-150);
        }
        else if (gamepad.down)
        {
          player.anims.play('jena_swim_bottom', true);
          player.setVelocityY(150);
          idlenumber = 0;
        } else if (!gamepad.left && !gamepad.right && !gamepad.up && !gamepad.down){
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
} // animation attaque
    if (Phaser.Input.Keyboard.JustDown(space)) {
        attack = 1;
        player.body.velocity.y = 0;
        player.body.velocity.x = 0;
      if (idlenumber == 2 || player.body.velocity.x < 0) {
          player.anims.play('jena_attack_side', true);
          player.setFlipX(true);
          player.setSize(300,250).setOffset(-50,15);
      } else if (idlenumber == 3 || player.body.velocity.x > 0) {
          player.anims.play('jena_attack_side', true);
          player.setFlipX(false);
          player.setSize(300,250).setOffset(10,15);
      } else if (idlenumber == 1 || player.body.velocity.y < 0) {
          player.anims.play('jena_attack_top', true);
          player.setSize(180,370).setOffset(40,-150);
      } else if (idlenumber == 0 || player.body.velocity.y > 0) {
          player.anims.play('jena_attack_bottom', true);
          player.setSize(180,370).setOffset(40,100);
      }
    }

// explications tuto
      if (player.x > 300 && player.x < 370 && player.y < 230 && player.body.velocity.y <= -150) {
        tuto = 8;
          tutoriel();
      } else if (player.x > 420 && player.x < 430 && player.y < 230 && player.body.velocity.x >= 150) {
          tuto = 10;
          tutoriel();
      } else if (player.x > 535 && player.x < 540 && player.y < 230 && player.body.velocity.x >= 150) {
          tuto = 12;
          tutoriel();
      } else if (player.x > 650 && player.x < 655 && player.y < 230 && player.body.velocity.x >= 150) {
        tuto = 14;
        tutoriel();
      }
      // Display inventaire
        if (Phaser.Input.Keyboard.JustDown(i)){
            if (displayInventaire == 0) {
                inventaire.visible = true;
                choice.visible = true;
                displayInventaire = 1;
            } else if (displayInventaire == 1) {
                inventaire.visible = false;
                choice.visible = false;
                displayInventaire = 0;
            }
        }
// déplacement dans l'inventaire
        if (choicePosition == 0) {
              if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
                  choicePosition = 1;
                  choice.x = 364, choice.y = 263;
              } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
                  choicePosition = 11;
                  choice.x = 512, choice.y = 412;
              }
        } else if (choicePosition == 1) {
            if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
                choicePosition = 2;
                choice.x = 438, choice.y = 263;
            } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
                choicePosition = 0;
                choice.x = 290, choice.y = 263;
            }
        } else if (choicePosition == 2) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 3;
              choice.x = 512, choice.y = 263;
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 1;
              choice.x = 364, choice.y = 263;
          }
        } else if (choicePosition == 3) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 4;
              choice.x = 290, choice.y = 336;
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 2;
              choice.x = 438, choice.y = 263;
          }
        } else if (choicePosition == 4) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 5;
              choice.x = 364, choice.y = 336;
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 3;
              choice.x = 512, choice.y = 263;
          }
        } else if (choicePosition == 5) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 6;
              choice.x = 438, choice.y = 336;
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 4;
              choice.x = 290, choice.y = 336;
          }
        } else if (choicePosition == 6) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 7;
              choice.x = 512, choice.y = 336;
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 5;
              choice.x = 364, choice.y = 336;
          }
        } else if (choicePosition == 7) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 8;
              choice.x = 290, choice.y = 412;
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 6;
              choice.x = 438, choice.y = 336;
          }
        } else if (choicePosition == 8) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 9;
              choice.x = 364, choice.y = 412;
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 7;
              choice.x = 512, choice.y = 336;
          }
        } else if (choicePosition == 9) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 10;
              choice.x = 438, choice.y = 412;
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 8;
              choice.x = 290, choice.y = 412;
          }
        } else if (choicePosition == 10) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 11;
              choice.x = 512, choice.y = 412;
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 9;
              choice.x = 364, choice.y = 412;
          }
        } else if (choicePosition == 11) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 0;
              choice.x = 290, choice.y = 263;
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 10;
              choice.x = 438, choice.y = 412;
          }
        }
//
  // Changement de scène
    if (player.x >= 780) {
        this.scene.start('premiere_scene');
    }
} // accolade fin update

}
