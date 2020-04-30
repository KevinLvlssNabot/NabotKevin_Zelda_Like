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
  this.load.spritesheet('jena_attack_side','assets/SpriteSheets/Jena_Attack_SideNB.png',{frameWidth: 300, frameHeight: 270});
  this.load.spritesheet('jena_attack_top','assets/SpriteSheets/Jena_Attack_BackNB.png',{frameWidth: 274, frameHeight: 278});
  this.load.spritesheet('jena_attack_bottom','assets/SpriteSheets/Jena_Attack_FrontNB.png',{frameWidth: 275, frameHeight: 500});
  this.load.spritesheet('jena_attack_etoile_side','assets/SpriteSheets/Jena_Attack_Etoile_Side.png',{frameWidth: 268, frameHeight: 255});
//

  this.load.image('ocelandBoss','assets/PNGsAssetsFixes/OcelandBoss.png');
  this.load.image('bouee','assets/PNGsAssetsFixes/Bouée.png');
  this.load.image('boueeJaune','assets/PNGsAssetsFixes/BouéeJaune.png');
  this.load.image('boueeVerticales','assets/PNGsAssetsFixes/BouéesJaunesVerticales.png');
  this.load.image('boueesHorizontales','assets/PNGsAssetsFixes/BoueesHorizontales.png');
  this.load.image('algue','assets/PNGsAssetsFixes/Algues.png');
  this.load.image('corail','assets/PNGsAssetsFixes/CorailMagique.png');
  this.load.image('bulledevie','assets/PNGsAssetsFixes/Bulle (3).png');
  this.load.image('key','assets/PNGsAssetsFixes/Clé 2.png');
  this.load.image('rochers','assets/PNGsAssetsFixes/Rochers.png');
  this.load.image('meduses','assets/PNGsAssetsFixes/Méduses (2).png');
  this.load.image('etoile','assets/PNGsAssetsFixes/Etoile De Mer.png');
  this.load.image('coquillage','assets/PNGsAssetsFixes/Coquillage.png');
  this.load.image('coquillageMoney','assets/PNGsAssetsFixes/Coquillage (2).png');
  this.load.image('oceland2','assets/PNGsAssetsFixes/Oceland3.png');
  this.load.spritesheet('tourbillon','assets/SpriteSheets/Tourbillon.png',{frameWidth: 167, frameHeight: 70});
  this.load.spritesheet('chateau','assets/SpriteSheets/MurChateaudeSable.png',{frameWidth: 1566, frameHeight: 584});
  this.load.spritesheet('etoileSpin','assets/SpriteSheets/Etoile.png',{frameWidth: 64, frameHeight: 60});
  this.load.image('inventaire','assets/PNGsAssetsFixes/Inventaire.png');
  this.load.image('choice','assets/PNGsAssetsFixes/Enlightment.png');
  this.load.image('dialogue','assets/PNGsAssetsFixes/Dialogue.png');
  this.load.image('flute','assets/PNGsAssetsFixes/Flute.png');
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
    key: 'jena_attack_etoile_side',
    frames: this.anims.generateFrameNumbers('jena_attack_etoile_side', {start: 0, end: 1}),
    frameRate: 20,
    repeat: -1
  });
this.anims.create({
    key: 'etoileSpin',
    frames: this.anims.generateFrameNumbers('etoileSpin', {start: 0, end: 5}),
    frameRate: 5,
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
  this.physics.add.collider(player, boss, killBoss, null, this);
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
  etoiles = this.physics.add.group();
  etoile = etoiles.create(player.x, player.y,'etoile').setScale(0.4);
  this.physics.add.overlap(player, etoiles, rammassageEtoile, null, this);
  this.physics.add.collider(boss, etoiles, plusDeBoss, null, this);
  this.physics.add.collider(rochers, etoiles, bounce, null, this);
  this.physics.add.collider(meduses, etoiles, bounce, null, this);
//
  scrollers = this.physics.add.staticGroup();
  scroller = scrollers.create(400,10,'scrollerHorizontal').setVisible(false);
  this.physics.add.overlap(player,scrollers, scroll, null, this);
//
      bulledevies = this.add.group();
      bulledevie1 = bulledevies.create(30, 30, 'bulledevie').setScale(0.4);
      bulledevie2 = bulledevies.create(70, 30, 'bulledevie').setScale(0.4);
      bulledevie3 = bulledevies.create(110, 30, 'bulledevie').setScale(0.4);
//
      money = this.add.image(30,70,'coquillageMoney').setScale(0.5);
      moneyAffichage = this.add.text(30,70, 'x' + moneyCompte, { fontFamily : 'Courrier New', fontSize: '24px', fill: '#fff' })
      //
          inventaire = this.add.image(400,300,'inventaire').setVisible(false);
          choice = this.add.image(290,267,'choice').setVisible(false);
      //  corail inventaire
          corailImage = this.add.image(292, 263, 'corail').setVisible(false);
          corailText = this.add.text(296,267, 'x' + nbreCoraux, { fontFamily : 'Courrier New', fontSize: '24px', fill: '#fff' }).setVisible(false);
      // etoile inventaire
          etoileImage = this.add.image(364, 263, 'etoile').setVisible(false);
      //  clé inventaire
          cléImage = this.add.image(438, 263, 'key').setVisible(false).setScale(0.5);
          cléText = this.add.text(442,267, 'x' + nbreClé, { fontFamily : 'Courrier New', fontSize: '24px', fill: '#fff' }).setVisible(false);
      // flute inventaire
          flute = this.add.image(500, 263, 'flute').setScale(0.5).setVisible(false);
// Création des différents controles
    cursors = this.input.keyboard.createCursorKeys();
    i = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
    enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    ctrl = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CTRL);
    echap = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
//
    player.on('animationcomplete', animComplete, this);
//
    dialogue = this.add.image(200,550,'dialogue').setVisible(false).setScale(0.5);
    text = this.add.text(15,535, '', { fontFamily : 'Linux Libertine Display G', fontSize: '12px', fill: '#fff'}).setWordWrapWidth(380, false).setVisible(false);
    skip = this.add.text(300,580, 'ENTRER/Croix/A pour passer.',{ fontFamily : 'Linux Libertine Display G', fontSize: '8px', fill: '#fff'}).setVisible(false);
//
}


update(){

  if (displayInventaire == 0 && offer == 0) {
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
    } else if(cursors.down.isDown){
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
  }

  // animation attaque
      if (Phaser.Input.Keyboard.JustDown(space)) {
          attack = 1;
          player.body.velocity.y = 0;
          player.body.velocity.x = 0;
        if (idlenumber == 2 || player.body.velocity.x < 0) {
            player.anims.play('jena_attack_side', true);
            player.setFlipX(true);
            player.setSize(320,50).setOffset(-80,170);
        } else if (idlenumber == 3 || player.body.velocity.x > 0) {
            player.anims.play('jena_attack_side', true);
            player.setFlipX(false);
            player.setSize(320,50).setOffset(30,170);
        } else if (idlenumber == 1 || player.body.velocity.y < 0) {
            player.anims.play('jena_attack_top', true);
            player.setSize(180,370).setOffset(40,-150);
        } else if (idlenumber == 0 || player.body.velocity.y > 0) {
            player.anims.play('jena_attack_bottom', true);
            player.setSize(180,370).setOffset(40,100);
        }
      }
  // utilisation étoile
        if (possessionEtoile == 1 && ctrl.isDown && etoileLancee == 0) {
              rebond = 0;
              etoileLancee = 1;
              if (etoileLancee == 1) {
                etoile = etoiles.create(player.x, player.y, 'etoile').setScale(0.4).setBounce(1).setCollideWorldBounds(true);
              }
                if (idlenumber == 2 || player.body.velocity.x < 0) {
                    player.anims.play('jena_attack_etoile_side', true);
                    player.setFlipX(true);
                    etoile.setFlipX(true);
                    etoile.body.velocity.x = -300;
                    etoile.anims.play('etoileSpin', true);
                } else if (idlenumber == 3 || player.body.velocity.x > 0) {
                    player.anims.play('jena_attack_etoile_side', true);
                    player.setFlipX(false);
                    etoile.setFlipX(false);
                    etoile.body.velocity.x = 300;
                    etoile.anims.play('etoileSpin', true);
                } else if (idlenumber == 0 || player.body.velocity.y > 0) {
                    player.anims.play('jena_attack_bottom', true);
                    etoile.body.velocity.y = 300;
                    etoile.anims.play('etoileSpin', true);
                } else if (idlenumber == 1 || player.body.velocity.y < 0) {
                    player.anims.play('jena_attack_top', true);
                    etoile.body.velocity.y = -300;
                    etoile.anims.play('etoileSpin', true);
                }
        }
            if (rebond == 1 || etoile.x > player.x + 300 || etoile.y > player.y + 300 || etoile.x < player.x - 300 || etoile.y < player.y - 300) {
                rebond = 1;
                this.physics.moveToObject(etoile, player, 300);
            }

  // utilisation objets
  if (pv == 3) {
      bulledevie1.visible = true;
      bulledevie2.visible = true;
      bulledevie3.visible = true;
  } else if (pv == 2) {
    bulledevie3.visible = false;
  } else if (pv == 1) {
    bulledevie2.visible = false;
  } else if (pv == 0) {
    bulledevie1.visible = false;
  }
      if (displayInventaire == 1) {
          if (choicePosition == 0) {
              if (nbreCoraux > 0 && Phaser.Input.Keyboard.JustDown(enter) && pv < 3) {
                  nbreCoraux = nbreCoraux -1;
                    corailText.setText('x' + nbreCoraux);
                        if (pv == 1) {
                            bulledevie2.visible = true;
                            pv++;
                        } else if (pv == 2) {
                            bulledevie3.visible = true;
                            pv++;
                        }


                        if (nbreCoraux == 0) {
                            corailText.visible = false;
                            corailImage.visible = false;
                            corailText.setText('x' + nbreCoraux);
                        }
                    }
              } else if (choicePosition == 3) {
                  if (achat == 1 && Phaser.Input.Keyboard.JustDown(enter)) {
                      text.visible = true;
                      skip.visible = true;
                      dialogue.visible = true;
                      text.setText("Vous jouez un morceau de flûte, les plus petites méduses s'éloignent.");
                      displayInventaire = 0;
                      inventaire.visible = false;
                      choice.visible = false;
                      flute.visible = false;
                      corailText.visible = false;
                      corailImage.visible = false;
                      etoileImage.visible = false;
                      cléImage.visible = false;
                      cléText.visible = false;
                      dialogue.x = 600, dialogue.y = 250;
                      text.x = 415, text.y = 220;
                      skip.x = 700, skip.y = 280;
                          medusesMovables.children.iterate(function (child){
                                child.body.velocity.x = 50;
                          });
                  }
              }
        }

      // Display inventaire
        if (Phaser.Input.Keyboard.JustDown(i)){
            if (displayInventaire == 0) {
                inventaire.visible = true;
                choice.visible = true;
                displayInventaire = 1;
              if (nbreCoraux > 0) {
                  corailText.visible = true;
                  corailImage.visible = true;
              }
              if (possessionEtoile == 1) {
                  etoileImage.visible = true;
              }
              if (nbreClé > 0) {
                  cléImage.visible = true;
                  cléText.visible = true;
              }
              if (achat == 1) {
                  flute.visible = true;
              }
            } else if (displayInventaire == 1) {
                inventaire.visible = false;
                choice.visible = false;
                displayInventaire = 0;
                corailText.visible = false;
                corailImage.visible = false;
                etoileImage.visible = false;
                cléImage.visible = false;
                cléText.visible = false;
                flute.visible = false;

            }
        }
  // déplacement dans l'inventaire
    if (displayInventaire == 1) {
        if (choicePosition == 0) {
          if (scrollnumber == 0) {
              choice.x = 290, choice.y = 263;
            } else if (scrollnumber == 1) {
              choice.x = 145, choice.y = 131;
            } else if (scrollnumber == 2) {
              choice.x = 545, choice.y = 431;
            } else if (scrollnumber == 3) {
              choice.x = 545, choice.y = 131;
            }
              if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
                  choicePosition = 1;
                      if (scrollnumber == 0) {
                          choice.x = 364, choice.y = 263;
                        } else if (scrollnumber == 1) {
                          choice.x = 182, choice.y = 131;
                        } else if (scrollnumber == 2) {
                          choice.x = 582, choice.y = 431;
                        } else if (scrollnumber == 3) {
                          choice.x = 582, choice.y = 131;
                        }
              } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
                  choicePosition = 11;
                      if (scrollnumber == 0) {
                          choice.x = 512, choice.y = 412;
                        } else if (scrollnumber == 1) {
                          choice.x = 256, choice.y = 205;
                        } else if (scrollnumber == 2) {
                          choice.x = 656, choice.y = 505;
                        } else if (scrollnumber == 3) {
                          choice.x = 656, choice.y = 205;
                        }
              }
        } else if (choicePosition == 1) {
            if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
                choicePosition = 2;
                    if (scrollnumber == 0) {
                      choice.x = 438, choice.y = 263;
                    } else if (scrollnumber == 1) {
                      choice.x = 219, choice.y = 131;
                    } else if (scrollnumber == 2) {
                      choice.x = 619, choice.y = 431;
                    } else if (scrollnumber == 3) {
                      choice.x = 619, choice.y = 131;
                    }
            } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
                choicePosition = 0;
                    if (scrollnumber == 0) {
                      choice.x = 290, choice.y = 263;
                    } else if (scrollnumber == 1) {
                      choice.x = 145, choice.y = 131;
                    } else if (scrollnumber == 2) {
                      choice.x = 545, choice.y = 431;
                    } else if (scrollnumber == 3) {
                      choice.x = 545, choice.y = 131;
                    }
            }
        } else if (choicePosition == 2) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 3;
                  if (scrollnumber == 0) {
                    choice.x = 512, choice.y = 263;
                  } else if (scrollnumber == 1) {
                    choice.x = 256, choice.y = 131;
                  } else if (scrollnumber == 2) {
                    choice.x = 656, choice.y = 431;
                  } else if (scrollnumber == 3) {
                    choice.x = 656, choice.y = 131;
                  }
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 1;
                  if (scrollnumber == 0) {
                    choice.x = 364, choice.y = 263;
                  } else if (scrollnumber == 1) {
                    choice.x = 182, choice.y = 131;
                  } else if (scrollnumber == 2) {
                    choice.x = 582, choice.y = 431;
                  } else if (scrollnumber == 3) {
                    choice.x = 582, choice.y = 131;
                  }
          }
        } else if (choicePosition == 3) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 4;
                  if (scrollnumber == 0) {
                    choice.x = 290, choice.y = 338;
                  } else if (scrollnumber == 1) {
                    choice.x = 145, choice.y = 168;
                  } else if (scrollnumber == 2) {
                    choice.x = 545, choice.y = 468;
                  } else if (scrollnumber == 3) {
                    choice.x = 545, choice.y = 168;
                  }
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 2;
                  if (scrollnumber == 0) {
                    choice.x = 438, choice.y = 263;
                  } else if (scrollnumber == 1) {
                    choice.x = 219, choice.y = 131;
                  } else if (scrollnumber == 2) {
                    choice.x = 619, choice.y = 431;
                  } else if (scrollnumber == 3) {
                    choice.x = 619, choice.y = 131;
                  }
          }
        } else if (choicePosition == 4) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 5;
                  if (scrollnumber == 0) {
                    choice.x = 364, choice.y = 338;
                  } else if (scrollnumber == 1) {
                    choice.x = 182, choice.y = 168;
                  } else if (scrollnumber == 2) {
                    choice.x = 582, choice.y = 468;
                  } else if (scrollnumber == 3) {
                    choice.x = 582, choice.y = 168;
                  }
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 3;
                  if (scrollnumber == 0) {
                    choice.x = 512, choice.y = 263;
                  } else if (scrollnumber == 1) {
                    choice.x = 256, choice.y = 131;
                  } else if (scrollnumber == 2) {
                    choice.x = 656, choice.y = 431;
                  } else if (scrollnumber == 3) {
                    choice.x = 656, choice.y = 131;
                  }
          }
        } else if (choicePosition == 5) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 6;
                  if (scrollnumber == 0) {
                    choice.x = 438, choice.y = 338;
                  } else if (scrollnumber == 1) {
                    choice.x = 219, choice.y = 168;
                  } else if (scrollnumber == 2) {
                    choice.x = 619, choice.y = 468;
                  } else if (scrollnumber == 3) {
                    choice.x = 619, choice.y = 168;
                  }
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 4;
                  if (scrollnumber == 0) {
                    choice.x = 290, choice.y = 338;
                  } else if (scrollnumber == 1) {
                    choice.x = 145, choice.y = 168;
                  } else if (scrollnumber == 2) {
                    choice.x = 545, choice.y = 468;
                  } else if (scrollnumber == 3) {
                    choice.x = 545, choice.y = 168;
                  }
          }
        } else if (choicePosition == 6) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 7;
                  if (scrollnumber == 0) {
                    choice.x = 512, choice.y = 338;
                  } else if (scrollnumber == 1) {
                    choice.x = 256, choice.y = 168;
                  } else if (scrollnumber == 2) {
                    choice.x = 656, choice.y = 468;
                  } else if (scrollnumber == 3) {
                    choice.x = 656, choice.y = 168;
                  }
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 5;
                  if (scrollnumber == 0) {
                    choice.x = 364, choice.y = 338;
                  } else if (scrollnumber == 1) {
                    choice.x = 182, choice.y = 168;
                  } else if (scrollnumber == 2) {
                    choice.x = 582, choice.y = 468;
                  } else if (scrollnumber == 3) {
                    choice.x = 582, choice.y = 168;
                  }
          }
        } else if (choicePosition == 7) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 8;
                  if (scrollnumber == 0) {
                    choice.x = 290, choice.y = 412;
                  } else if (scrollnumber == 1) {
                    choice.x = 145, choice.y = 205;
                  } else if (scrollnumber == 2) {
                    choice.x = 545, choice.y = 505;
                  } else if (scrollnumber == 3) {
                    choice.x = 545, choice.y = 205;
                  }
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 6;
                  if (scrollnumber == 0) {
                    choice.x = 438, choice.y = 338;
                  } else if (scrollnumber == 1) {
                    choice.x = 219, choice.y = 168;
                  } else if (scrollnumber == 2) {
                    choice.x = 619, choice.y = 468;
                  } else if (scrollnumber == 3) {
                    choice.x = 619, choice.y = 168;
                  }
          }
        } else if (choicePosition == 8) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 9;
                  if (scrollnumber == 0) {
                    choice.x = 364, choice.y = 412;
                  } else if (scrollnumber == 1) {
                    choice.x = 182, choice.y = 205;
                  } else if (scrollnumber == 2) {
                    choice.x = 582, choice.y = 505;
                  } else if (scrollnumber == 3) {
                    choice.x = 582, choice.y = 205;
                  }
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 7;
                  if (scrollnumber == 0) {
                    choice.x = 512, choice.y = 338;
                  } else if (scrollnumber == 1) {
                    choice.x = 256, choice.y = 168;
                  } else if (scrollnumber == 2) {
                    choice.x = 656, choice.y = 468;
                  } else if (scrollnumber == 3) {
                    choice.x = 656, choice.y = 168;
                  }
          }
        } else if (choicePosition == 9) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 10;
                  if (scrollnumber == 0) {
                    choice.x = 438, choice.y = 412;
                  } else if (scrollnumber == 1) {
                    choice.x = 219, choice.y = 205;
                  } else if (scrollnumber == 2) {
                    choice.x = 619, choice.y = 505;
                  } else if (scrollnumber == 3) {
                    choice.x = 619, choice.y = 205;
                  }
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 8;
                  if (scrollnumber == 0) {
                    choice.x = 290, choice.y = 412;
                  } else if (scrollnumber == 1) {
                    choice.x = 145, choice.y = 205;
                  } else if (scrollnumber == 2) {
                    choice.x = 545, choice.y = 505;
                  } else if (scrollnumber == 3) {
                    choice.x = 545, choice.y = 205;
                  }
          }
        } else if (choicePosition == 10) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 11;
                  if (scrollnumber == 0) {
                    choice.x = 512, choice.y = 410;
                  } else if (scrollnumber == 1) {
                    choice.x = 256, choice.y = 205;
                  } else if (scrollnumber == 2) {
                    choice.x = 656, choice.y = 505;
                  } else if (scrollnumber == 3) {
                    choice.x = 656, choice.y = 205;
                  }
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 9;
                  if (scrollnumber == 0) {
                    choice.x = 364, choice.y = 410;
                  } else if (scrollnumber == 1) {
                    choice.x = 182, choice.y = 205;
                  } else if (scrollnumber == 2) {
                    choice.x = 582, choice.y = 505;
                  } else if (scrollnumber == 3) {
                    choice.x = 582, choice.y = 205;
                  }
          }
        } else if (choicePosition == 11) {
          if (Phaser.Input.Keyboard.JustDown(cursors.right)) {
              choicePosition = 0;
                  if (scrollnumber == 0) {
                    choice.x = 290, choice.y = 234;
                  } else if (scrollnumber == 1) {
                    choice.x = 145, choice.y = 131;
                  } else if (scrollnumber == 2) {
                    choice.x = 545, choice.y = 431;
                  } else if (scrollnumber == 3) {
                    choice.x = 545, choice.y = 131;
                  }
          } else if (Phaser.Input.Keyboard.JustDown(cursors.left)) {
              choicePosition = 10;
                  if (scrollnumber == 0) {
                    choice.x = 438, choice.y = 410;
                  } else if (scrollnumber == 1) {
                    choice.x = 219, choice.y = 205;
                  } else if (scrollnumber == 2) {
                    choice.x = 619, choice.y = 505;
                  } else if (scrollnumber == 3) {
                    choice.x = 619, choice.y = 205;
                  }
          }
        }
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
  boss.clearTint(0xff0000);
  boss.anims.play('bossMoveFace', true);
  boss.setSize(350,300).setOffset(50,10);
} else if (boss.body.velocity.y < 0) {
  boss.clearTint(0xff0000);
  boss.anims.play('bossMoveBack', true);
  boss.setSize(350,300).setOffset(50,100);
}
    if (boss.body.velocity.x > 0) {
      boss.clearTint(0xff0000);
        boss.anims.play('bossMoveSide', true);
        boss.setFlipX(false);
        boss.setSize(150,300).setOffset(20,100);
    } else if (boss.body.velocity.x < 0) {
      boss.clearTint(0xff0000);
        boss.anims.play('bossMoveSide', true);
        boss.setFlipX(true);
        boss.setSize(150,300).setOffset(280,100);
    }
//
if (enter.isDown && offer == 0) {
  dialogue.visible = false;
  text.visible = false;
  skip.visible = false;
}
// victoire
      if (pvBoss <= 0) {
          meduses.children.iterate(function(child){
              if (child.y < 500) {
                  child.disableBody(true, true);
              }
          });
      }
//
    if (player.y <= 40) {
        this.scene.start('ending');
    }
//
}

}
