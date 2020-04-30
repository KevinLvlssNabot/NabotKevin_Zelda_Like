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
    this.load.spritesheet('jena_lateral_swim','assets/SpriteSheets/JenaLateralSwim.png',{frameWidth: 300, frameHeight: 255});
    this.load.spritesheet('jena_attack_side','assets/SpriteSheets/Jena_Attack_SideNB.png',{frameWidth: 300, frameHeight: 270});
    this.load.spritesheet('jena_attack_top','assets/SpriteSheets/Jena_Attack_BackNB.png',{frameWidth: 274, frameHeight: 278});
    this.load.spritesheet('jena_attack_bottom','assets/SpriteSheets/Jena_Attack_FrontNB.png',{frameWidth: 275, frameHeight: 500});
    this.load.spritesheet('jena_attack_etoile_side','assets/SpriteSheets/Jena_Attack_Etoile_Side.png',{frameWidth: 268, frameHeight: 255});
    //
    this.load.image('scrollerHorizontal','assets/PNGsAssetsFixes/scrollerHorizontal.png');
    this.load.image('scrollerVertical','assets/PNGsAssetsFixes/scrollerVertical.png');
    //
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
// ennemis
    this.load.spritesheet('ennemisMoveFace','assets/SpriteSheets/EnnemisMoveFace.png',{frameWidth: 348, frameHeight: 350});
    this.load.spritesheet('ennemisMoveBack','assets/SpriteSheets/EnnemisMoveBack.png',{frameWidth: 348, frameHeight: 310});
    this.load.spritesheet('ennemisMoveSide','assets/SpriteSheets/EnnemisMoveSide.png',{frameWidth: 348, frameHeight: 300});
    this.load.spritesheet('ennemisAttackSide','assets/SpriteSheets/EnnemisAttackSide.png',{frameWidth: 388, frameHeight: 266});
    this.load.spritesheet('ennemisAttackBack','assets/SpriteSheets/EnnemisAttackBack.png',{frameWidth: 405, frameHeight: 390});
    this.load.spritesheet('ennemisAttackFront','assets/SpriteSheets/EnnemisAttackFront.png',{frameWidth: 310, frameHeight: 380});
    this.load.spritesheet('gentilMr','assets/SpriteSheets/GentilMr.png',{frameWidth: 350, frameHeight: 300});
  }
//
create(){
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
      key: 'ennemisMoveFace',
      frames: this.anims.generateFrameNumbers('ennemisMoveFace', {start: 0, end: 1}),
      frameRate: 4,
      repeat: -1
    });

    this.anims.create({
      key: 'ennemisMoveBack',
      frames: this.anims.generateFrameNumbers('ennemisMoveBack', {start: 0, end: 1}),
      frameRate: 4,
      repeat: -1
    });

    this.anims.create({
      key: 'ennemisMoveSide',
      frames: this.anims.generateFrameNumbers('ennemisMoveSide', {start: 0, end: 1}),
      frameRate: 4,
      repeat: -1
    });

    this.anims.create({
      key: 'ennemisAttackSide',
      frames: this.anims.generateFrameNumbers('ennemisAttackSide', {start: 0, end: 1}),
      frameRate: 2,
      repeat: -1
    });

    this.anims.create({
      key: 'ennemisAttackBack',
      frames: this.anims.generateFrameNumbers('ennemisAttackBack', {start: 0, end: 1}),
      frameRate: 2,
      repeat: -1
    });

    this.anims.create({
      key: 'ennemisAttackFront',
      frames: this.anims.generateFrameNumbers('ennemisAttackFront', {start: 0, end: 1}),
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
      key: 'tourbillon',
      frames: this.anims.generateFrameNumbers('tourbillon', {start: 0, end: 1}),
      frameRate: 4,
      repeat: -1
    });

    this.anims.create({
      key: 'chateau',
      frames: this.anims.generateFrameNumbers('chateau', {start: 0, end: 3}),
      frameRate: 1,
      repeat: 0
    });

    this.anims.create({
      key: 'gentilMr',
      frames: this.anims.generateFrameNumbers('gentilMr', {start: 0, end: 1}),
      frameRate: 2,
      repeat: -1
    });

    this.anims.create({
      key: 'etoileSpin',
      frames: this.anims.generateFrameNumbers('etoileSpin', {start: 0, end: 5}),
      frameRate: 5,
      repeat: -1
    });
//
  oceland = this.add.image(400,300,'oceland2').setScrollFactor(0.5).setScale(0.25); // creation environnement
//
  this.cameras.main.setZoom(2).setBounds(0,0,800,600); // zoom de la caméra
  this.cameras.main.setOrigin(0,1); // caméra centrée sur le premier plan du monde
//
  player = this.physics.add.sprite(200,580,'jena_idle').setScale(0.08).setSize(180,250).setOffset(40,15); // creation et definition des paramètres du personnage
  player.setCollideWorldBounds(true);
  player.setBounce(0);
//
  ennemis = this.physics.add.group({
  });
  // ennemis 1.0
  ennemi = ennemis.get(140, 400, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
  ennemi = ennemis.get(260, 400, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
  ennemi = ennemis.get(140, 500, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
  ennemi = ennemis.get(260, 500, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
  ennemi = ennemis.get(380, 360, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
  ennemi = ennemis.get(150, 320, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
  //ennemis 1.1
  ennemi = ennemis.get(650, 325, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
  ennemi = ennemis.get(450, 325, 'ennemisMoveSide').setScale(0.08).setSize(290,300).setOffset(28,28);
  ennemi = ennemis.get(450, 525, 'ennemisMoveSide').setScale(0.08).setSize(290,300).setOffset(28,28);
  // ennemis 0.1
  ennemi = ennemis.get(560, 90, 'ennemisMoveSide').setScale(0.08).setSize(290,300).setOffset(28,28);
  ennemi = ennemis.get(720, 125, 'ennemisMoveSide').setScale(0.08).setSize(290,300).setOffset(28,28);
  this.physics.add.collider(player, ennemis, kill, null, this);
  this.physics.add.collider(ennemis, ennemis);
//
  gentilMr = this.physics.add.staticGroup();
  gentilMr.create(785,235,'gentilMr').setScale(0.08).setSize(30,10).setOffset(160,150).anims.play('gentilMr').setFlipX(true);
  this.physics.add.collider(player, gentilMr, offre, null, this);
//
  scrollers = this.physics.add.staticGroup();
  scroller = scrollers.create(210,298,'scrollerHorizontal').setVisible(false);
  scroller = scrollers.create(405,430,'scrollerVertical').setVisible(false);
  scroller = scrollers.create(405,120,'scrollerVertical').setVisible(false);
  scroller = scrollers.create(600,300,'scrollerHorizontal').setVisible(false);
  this.physics.add.overlap(player,scrollers, scroll, null, this);
//
  algues = this.physics.add.staticGroup(); // creation des groupes d'algues
  // Algues coin haut droit du plan 1.0
  algue = algues.create(300,330,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(300,320,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(300,310,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(300,340,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(330,310,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(330,320,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(330,330,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(330,340,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(360,310,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(360,310,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(360,320,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(360,330,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(360,340,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(390,330,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(390,340,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  // Algues coin bas gauche du plan 1.0
  algue = algues.create(15,565,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(15,575,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(15,585,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(15,595,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(15,555,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(15,545,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(45,565,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(45,575,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(45,585,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(45,595,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(75,585,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(75,595,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(105,595,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  // algue plan 0.0
  algue = algues.create(15,100,'algue').setScale(0.08).setSize(25,7).setOffset(157,42).setFlipX(true);
  algue = algues.create(15,110,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(15,120,'algue').setScale(0.08).setSize(25,7).setOffset(157,42).setFlipX(true);
  algue = algues.create(15,130,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(15,140,'algue').setScale(0.08).setSize(25,7).setOffset(157,42).setFlipX(true);
  algue = algues.create(15,150,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(40,100,'algue').setScale(0.08).setSize(25,7).setOffset(157,42).setFlipX(true);
  algue = algues.create(40,110,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(40,120,'algue').setScale(0.08).setSize(25,7).setOffset(157,42).setFlipX(true);
  algue = algues.create(40,130,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(40,140,'algue').setScale(0.08).setSize(25,7).setOffset(157,42).setFlipX(true);
  algue = algues.create(40,150,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  // algues 1.1
  algue = algues.create(450,570,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(450,580,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(450,590,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(480,570,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(480,580,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(480,590,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(510,570,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(510,580,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(510,590,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  // algues 0.1
  algue = algues.create(430,10,'algue').setScale(0.08).setSize(25,7).setOffset(157,42); // hautes
  algue = algues.create(460,10,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(490,10,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(430,20,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(460,20,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(490,20,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(430,30,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(460,30,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(490,30,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  // basses
  algue = algues.create(430,260,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(460,260,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(490,260,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(430,270,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(460,270,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(490,270,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(430,280,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(460,280,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  algue = algues.create(490,280,'algue').setScale(0.08).setSize(25,7).setOffset(157,42);
  this.physics.add.collider(player, algues, plusDalgues, null, this);
  this.physics.add.collider(ennemis, algues);
//
  coraux = this.physics.add.staticGroup();
  corail = coraux.create(387,315,'corail').setScale(0.3).setSize(25,15).setOffset(30,20); // corail plan 1.0
  // corail plan 0.0
  corail = coraux.create(70,70,'corail').setScale(0.3).setSize(25,15).setOffset(30,20).setFlipX(true);
  this.physics.add.overlap(player, coraux, addInventaire, null, this);
//
  tourbillons = this.physics.add.staticGroup();
  tourbillon = tourbillons.create(165, 237, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32); // tourbillon 1
  tourbillon = tourbillons.create(235, 237, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32); // tourbillon 2
  tourbillon = tourbillons.create(285, 230, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32); // tourbillon 6
  tourbillon = tourbillons.create(325, 170, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32); // tourbilon 5
  tourbillon = tourbillons.create(350, 140, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32); // tourbillon 2
  tourbillon = tourbillons.create(350, 90, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32); // tourbillon 3
  tourbillon = tourbillons.create(380, 55, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32); // tourbillon 4
  tourbillon = tourbillons.create(292, 10, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32); // tourbilon 5
  tourbillon = tourbillons.create(253, 209, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32); // tourbillon 6
  tourbillon = tourbillons.create(115, 10, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32); // tourbilon 7
  tourbillon = tourbillons.create(80, 105, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32); // tourbillon 1
  tourbillon = tourbillons.create(85, 180, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32);  // tourbilon 4
  tourbillon = tourbillons.create(115, 237, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32); // tourbillon 3
  tourbillon = tourbillons.create(210, 110, 'tourbillon').anims.play('tourbillon').setScale(0.1).setSize(16,7).setOffset(76,32); // tourbillon secret
  this.physics.add.overlap(player, tourbillons, teleportation, null, this);
//
  rochers = this.physics.add.staticGroup();
  // rochers plan 1.0
  rocher = rochers.create(380,585,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(380,565,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(380,545,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(380,525,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(380,505,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(340,570,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(340,550,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(340,530,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(300,550,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(409,360,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  // rochers plan 0.0
  rocher = rochers.create(15,295,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(55,295,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(95,295,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(310,295,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40).setFlipX(true);
  rocher = rochers.create(350,295,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40).setFlipX(true);
  rocher = rochers.create(390,295,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40).setFlipX(true);
  // Rocher central
  rocher = rochers.create(210,120,'rochers').setScale(0.5).setSize(75,25).setOffset(53,47);
  // rochers 1.1
  rocher = rochers.create(415,585,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40).setFlipX(true);
  rocher = rochers.create(415,560,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40).setFlipX(true);
  rocher = rochers.create(415,535,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40).setFlipX(true);
  rocher = rochers.create(415,510,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40).setFlipX(true);
  rocher = rochers.create(425,300,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40).setFlipX(true);
  rocher = rochers.create(460,300,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(500,300,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(705,300,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40).setFlipX(true);
  rocher = rochers.create(745,300,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(785,300,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  this.physics.add.collider(player, rochers);
  this.physics.add.collider(ennemis, rochers);
//
  keys = this.physics.add.staticGroup();
  key = keys.create(200,445,'key').setScale(0.15).setSize(7,13).setOffset(25,43); // clé 1.0
  key = keys.create(207,143,'key').setScale(0.15).setSize(7,13).setOffset(25,43); // clé 0.0
  key = keys.create(570,580,'key').setScale(0.15).setSize(7,13).setOffset(25,43); // clé 1.1
  key = keys.create(750,85,'key').setScale(0.15).setSize(7,13).setOffset(25,43); // clé 1.1
  this.physics.add.overlap(player, keys, cléUp, null, this);
//
  meduses = this.physics.add.staticGroup();
  meduse = meduses.create(15, 410,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(35, 420,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(35, 460,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(15, 470,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  // Meduses plan 0.0
  meduse = meduses.create(200, 210,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(170, 220,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(230, 220,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(140, 235,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(260, 235,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(130, 250,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(270, 250,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(120, 265,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(280, 265,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(125, 280,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(275, 280,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  // meduses droite
  meduse = meduses.create(310, 110,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(310, 125,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(325, 140,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(340, 155,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(355, 170,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(385, 165,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(325, 95,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(340, 80,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(355, 65,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(385, 70,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  // meduses gauche
  meduse = meduses.create(10, 80,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(40, 75,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(70, 85,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(10, 170,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(40, 175,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(70, 165,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(100, 150,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(95, 135,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(100, 120,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(105, 105,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(100, 90,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  // meduses plan 1.1
  meduse = meduses.create(680, 305,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 320,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 335,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 350,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 365,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 380,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 395,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 410,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 425,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 440,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 455,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 470,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 485,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 500,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 515,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 530,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 545,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 560,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 575,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 590,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(680, 605,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(415, 315,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(420, 330,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(420, 345,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  meduse = meduses.create(410, 490,'meduses').setScale(0.1).setSize(27,11).setOffset(123,52);
  this.physics.add.collider(player, meduses);
  this.physics.add.collider(ennemis, meduses);
  // meduses 1.0
  medusesMovables = this.physics.add.group();
  meduseMovable = medusesMovables.create(728, 110,'meduses').setScale(0.05).setImmovable();
  meduseMovable = medusesMovables.create(743, 110,'meduses').setScale(0.05).setImmovable();
  meduseMovable = medusesMovables.create(758, 110,'meduses').setScale(0.05).setImmovable();
  meduseMovable = medusesMovables.create(773, 110,'meduses').setScale(0.05).setImmovable();
  meduseMovable = medusesMovables.create(572, 70,'meduses').setScale(0.05).setImmovable();
  meduseMovable = medusesMovables.create(587, 70,'meduses').setScale(0.05).setImmovable();
  meduseMovable = medusesMovables.create(602, 70,'meduses').setScale(0.05).setImmovable();
  meduseMovable = medusesMovables.create(617, 70,'meduses').setScale(0.05).setImmovable();
  meduseMovable = medusesMovables.create(632, 70,'meduses').setScale(0.05).setImmovable();

  this.physics.add.collider(player, medusesMovables, fluteOnly, null, this);
//
  chateau = this.physics.add.staticGroup();
  chateau.create(600, 5, 'chateau').setScale(0.08).setSize(125,100).setOffset(720,215);
  this.physics.add.collider(player, chateau, openSesame, null, this);
//
  bouees = this.physics.add.staticGroup(); // Ajout des décors et objets visibles
  bouee = bouees.create(210,420,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(190,420,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(210,460,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(190,460,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(170,430,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(170,450,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(230,430,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(230,450,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  // Bouees plan 0.0
  bouee = bouees.create(310,150,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(300,165,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(290,180,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(280,195,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(270,210,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  // bouees bas gauche 0.0
  bouee = bouees.create(100,150,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(110,165,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(120,180,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(130,195,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(140,210,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  // bouees haut gauche 0.0
  bouee = bouees.create(140,5,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(130,20,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(120,35,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(110,50,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(100,65,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
//
  // bouees haut droite 0.0
  bouee = bouees.create(270,5,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(280,20,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(290,35,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(300,50,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(310,65,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  // bouee bordure 0.0
  bouee = bouees.create(400,0,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(400,15,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(400,30,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(400,45,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(400,170,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(400,185,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(400,200,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(400,215,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(400,230,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(400,245,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(400,260,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  // bouees 1.1
  bouee = bouees.create(590,540,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(570,540,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(550,540,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(600,555,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(600,570,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(600,585,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(540,555,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(540,570,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  bouee = bouees.create(540,585,'bouee').setScale(0.15).setSize(20,10).setOffset(50,108);
  this.physics.add.collider(player, bouees);
  this.physics.add.collider(ennemis, bouees);
//
  boueecibles = this.physics.add.staticGroup(); // bouees jaunes 1.1
  boueecible = boueecibles.create(770, 350, 'boueeJaune').setScale(0.15).setSize(17,25).setOffset(52,92);
  boueecible = boueecibles.create(790, 430, 'boueeJaune').setScale(0.15).setSize(17,25).setOffset(52,92);
  boueecible = boueecibles.create(760, 500, 'boueeJaune').setScale(0.15).setSize(17,25).setOffset(52,92);
  boueecible = boueecibles.create(790, 580, 'boueeJaune').setScale(0.15).setSize(17,25).setOffset(52,92);
//
  boueeJaunes = this.physics.add.staticGroup(); // bouee jaunes 1.0
  boueeJaune = boueeJaunes.create(770, 50, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(750, 50, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(730, 50, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(790, 60, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(710, 60, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(790, 70, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(710, 70, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(790, 80, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(710, 80, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(790, 90, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(710, 90, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(527, 0, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(527, 15, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(527, 30, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(673, 0, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(673, 15, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(673, 30, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(540, 40, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(660, 40, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(555, 50, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  boueeJaune = boueeJaunes.create(643, 50, 'boueeJaune').setScale(0.15).setSize(20,10).setOffset(50,108);
  this.physics.add.collider(player, boueeJaunes);
//
  etoiles = this.physics.add.group();
  etoile = etoiles.create(350,590,'etoile').setScale(0.2);
  this.physics.add.overlap(player, etoiles, rammassageEtoile, null, this);
  this.physics.add.collider(ennemis, etoiles, plusDennemis, null, this);
  this.physics.add.collider(rochers, etoiles, bounce, null, this);
  this.physics.add.collider(algues, etoiles, bounce, null, this);
  this.physics.add.collider(bouees, etoiles, bounce, null, this);
  this.physics.add.collider(boueeJaunes, etoiles, bounce, null, this);
  this.physics.add.collider(boueecibles, etoiles, bounce2, null, this);
//
  coquillages = this.physics.add.staticGroup();
  // coquillage plan 1.0
  coquillage = coquillages.create(10, 430, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
  coquillage = coquillages.create(10, 450, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
  // coquillage plan 0.0
  coquillage = coquillages.create(10, 10, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
  coquillage = coquillages.create(25, 10, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
  coquillage = coquillages.create(40, 10, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
  coquillage = coquillages.create(55, 10, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
  coquillage = coquillages.create(10, 25, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
  coquillage = coquillages.create(10, 40, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
  coquillage = coquillages.create(25, 25, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
  coquillage = coquillages.create(25, 40, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
  coquillage = coquillages.create(40, 25, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
  coquillage = coquillages.create(10, 55, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
  this.physics.add.overlap(player, coquillages, banking, null, this);
//
  bulledevies = this.add.group();
   bulledevie1 = bulledevies.create(15, 315, 'bulledevie').setScale(0.2);
   bulledevie2 = bulledevies.create(35, 315, 'bulledevie').setScale(0.2);
   bulledevie3 = bulledevies.create(55, 315, 'bulledevie').setScale(0.2);
  // bulledevies.remove(bulledevie, true, true); POUR ENLEVER DES PV !
//
  money = this.add.image(15,335,'coquillageMoney').setScale(0.25);
  moneyAffichage = this.add.text(16,335, 'x' + moneyCompte, { fontFamily : 'Courrier New', fontSize: '12px', fill: '#fff' });
//
    inventaire = this.add.image(200,450,'inventaire').setVisible(false).setScale(0.5);
    choice = this.add.image(145,431,'choice').setVisible(false).setScale(0.5);
//  corail inventaire
    corailImage = this.add.image(146, 431, 'corail').setScale(0.5).setVisible(false);
    corailText = this.add.text(150,435, 'x' + nbreCoraux, { fontFamily : 'Courrier New', fontSize: '12px', fill: '#fff' }).setVisible(false);
// etoile inventaire
    etoileImage = this.add.image(182, 431, 'etoile').setScale(0.5).setVisible(false);
//  clé inventaire
    cléImage = this.add.image(219, 431, 'key').setScale(0.25).setVisible(false);
    cléText = this.add.text(223,435, 'x' + nbreClé, { fontFamily : 'Courrier New', fontSize: '12px', fill: '#fff' }).setVisible(false);
// flute inventaire
    flute = this.add.image(246, 431, 'flute').setScale(0.25).setVisible(false);
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
  //

if (displayInventaire == 0 && offer == 0) {
  if(cursors.left.isDown && !space.isDown){ // mouvements du personnage
    player.setFlipX(true);
    idlenumber = 2; // variable pour gérer les différentes animations "idle"
    player.anims.play('jena_lateral_swim', true);
    player.setVelocityX(-75);
    attack = 0;
  }else if(cursors.right.isDown && !space.isDown){
    player.setFlipX(false);
    player.anims.play('jena_lateral_swim', true);
    idlenumber = 3;
    player.setVelocityX(75);
    attack = 0;
  } else if(cursors.up.isDown && !space.isDown){
    player.anims.play('jena_swim_top', true);
    idlenumber = 1;
    player.setVelocityY(-75);
    attack = 0;
  } else if(cursors.down.isDown){
    player.anims.play('jena_swim_bottom', true);
    player.setVelocityY(75);
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
              etoile = etoiles.create(player.x, player.y, 'etoile').setScale(0.2).setBounce(1).setCollideWorldBounds(true, bounce);
            }
              if (idlenumber == 2 || player.body.velocity.x < 0) {
                  player.anims.play('jena_attack_etoile_side', true);
                  player.setFlipX(true);
                  etoile.setFlipX(true);
                  etoile.body.velocity.x = -150;
                  etoile.anims.play('etoileSpin', true);
              } else if (idlenumber == 3 || player.body.velocity.x > 0) {
                  player.anims.play('jena_attack_etoile_side', true);
                  player.setFlipX(false);
                  etoile.setFlipX(false);
                  etoile.body.velocity.x = 150;
                  etoile.anims.play('etoileSpin', true);
              } else if (idlenumber == 0 || player.body.velocity.y > 0) {
                  player.anims.play('jena_attack_bottom', true);
                  etoile.body.velocity.y = 150;
                  etoile.anims.play('etoileSpin', true);
              } else if (idlenumber == 1 || player.body.velocity.y < 0) {
                  player.anims.play('jena_attack_top', true);
                  etoile.body.velocity.y = -150;
                  etoile.anims.play('etoileSpin', true);
              }
      }
          if (rebond == 1 || etoile.x > player.x + 250 || etoile.y > player.y + 250 || etoile.x < player.x - 250 || etoile.y < player.y - 250) {
            rebond = 1;
              this.physics.moveToObject(etoile, player, 150);
          }

// utilisation objets
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
            choice.x = 145, choice.y = 431;
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
                        choice.x = 182, choice.y = 431;
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
                        choice.x = 256, choice.y = 505;
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
                    choice.x = 219, choice.y = 431;
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
                    choice.x = 145, choice.y = 431;
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
                  choice.x = 256, choice.y = 431;
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
                  choice.x = 182, choice.y = 431;
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
                  choice.x = 145, choice.y = 468;
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
                  choice.x = 219, choice.y = 431;
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
                  choice.x = 182, choice.y = 468;
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
                  choice.x = 256, choice.y = 431;
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
                  choice.x = 219, choice.y = 468;
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
                  choice.x = 145, choice.y = 468;
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
                  choice.x = 256, choice.y = 468;
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
                  choice.x = 182, choice.y = 468;
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
                  choice.x = 145, choice.y = 505;
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
                  choice.x = 219, choice.y = 468;
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
                  choice.x = 182, choice.y = 505;
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
                  choice.x = 256, choice.y = 468;
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
                  choice.x = 219, choice.y = 505;
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
                  choice.x = 145, choice.y = 505;
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
                  choice.x = 256, choice.y = 505;
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
                  choice.x = 182, choice.y = 505;
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
                  choice.x = 145, choice.y = 431;
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
                  choice.x = 219, choice.y = 505;
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
//

// Déplacements ennemis

  ennemis.children.iterate(function (child){
    child.setCollideWorldBounds(true);
    if (child.x == 140 && child.y == 400) { // Ennemis caré
      child.body.velocity.y = 50;
    } else if (child.x == 140 && child.y == 500) { // Ennemis caré
      child.body.velocity.x = 50;
    } else if (child.x == 260 && child.y == 400) { // Ennemis caré
      child.body.velocity.x = -50;
    } else if (child.x == 260 && child.y == 500) {  // Ennemis caré
      child.body.velocity.y = -50;
    } else if (child.x == 380 && child.y == 360) { // Ennemis droite
        child.body.velocity.y = 60;
    } else if (child.x <= 150 && child.y == 320) { // Ennemis haut
        child.body.velocity.x = 51;
    } else if (child.x == 650 && child.y == 325) {
        child.body.velocity.y = 52;
    } else if (child.x == 450 && child.y == 325) {
        child.body.velocity.x = 52;
    } else if (child.x == 450 && child.y == 525) {
        child.body.velocity.x = 52;
    } else if (child.x == 560 && child.y == 90) {
        child.body.velocity.x = 53;
    } else if (child.x == 720 && child.y == 125) {
        child.body.velocity.x = 54;
    }

      if (child.body.x < 130 && child.y <= 400 && child.body.velocity.x == -50) { // permet aux ennemis de changer de direction // Ennemis carré
          child.body.velocity.x = 0;
          child.body.velocity.y = 50;
      } else if (child.body.x <= 130 && child.y >= 500 && child.body.velocity.y == 50) {  // Ennemis carré
        child.body.velocity.y = 0;
        child.body.velocity.x = 50;
      } else if (child.x >= 260 && child.y >= 500 && child.body.velocity.x == 50) { // Ennemis carré
        child.body.velocity.x = 0;
        child.body.velocity.y = -50;

      } else if (child.x >= 260 && child.y <= 400 && child.body.velocity.y == -50) { // Ennemis carré
        child.body.velocity.y = 0;
        child.body.velocity.x = -50;
      }  else if (child.x == 380 && child.y == 470 && child.body.velocity.y == 60) { // Ennemis droite
          child.body.velocity.y = -60;
      } else if (child.x >= 260 && child.y == 320 && child.body.velocity.x == 51) { // Ennemis haut
          child.body.velocity.x = -51;
          child.body.velocity.y = 0;
      } else if (child.x == 650 && child.y >= 580 && child.body.velocity.y == 52) {
        child.body.velocity.y = -52;
        child.body.velocity.x = 0;
      } else if (child.x >= 620 && child.y == 325 && child.body.velocity.x == 52){
        child.body.velocity.y = 0;
        child.body.velocity.x = -52;
      } else if (child.x >= 620 && child.y == 525 && child.body.velocity.x == 52){
        child.body.velocity.y = 0;
        child.body.velocity.x = -52;
      } else if (child.x >= 640 && child.y == 90 && child.body.velocity.x == 53) {
        child.body.velocity.y = 0;
        child.body.velocity.x = -53;
      } else if (child.x >= 780 && child.y == 125 && child.body.velocity.x == 54) {
        child.body.velocity.y = 0;
        child.body.velocity.x = -54;
      }
// Animations Ennemis
      if (child.body.velocity.y > 0) {
        child.anims.play('ennemisMoveFace', true);
        child.setSize(290,300).setOffset(28,28);
      } else if (child.body.velocity.y < 0) {
        child.anims.play('ennemisMoveBack', true);
        child.setSize(290,300).setOffset(28,28);
      } else if (child.body.velocity.y == 0) {
          if (child.body.velocity.x > 0) {
              child.anims.play('ennemisMoveSide', true);
              child.setFlipX(false);
              child.setSize(290,300).setOffset(28,28);
          } else if (child.body.velocity.x < 0) {
              child.anims.play('ennemisMoveSide', true);
              child.setFlipX(true);
              child.setSize(290,300).setOffset(28,28);
          }
      }

  });
// attaques ennemis
  ennemis.children.iterate(function (child){
        if (child.body.velocity.x >= 0 && child.x >= player.x - 25 && child.y >= player.y - 10 && child.y <= player.y + 10 && player.x > child.x) {
              child.anims.play('ennemisAttackSide', true);
              child.setFlipX(false);
              child.setSize(390,300).setOffset(28,28);
        } else if (child.body.velocity.x <= 0 && child.x >= player.x + 10 && child.y >= player.y - 10 && child.y <= player.y + 10 && player.x < child.x) {
              child.anims.play('ennemisAttackSide', true);
              child.setFlipX(true);
              child.setSize(390,300).setOffset(-60,28);
        } else if (child.y >= player.y - 30 && child.x >= player.x - 10 && child.x <= player.x + 10 && player.y > child.y) {
              child.anims.play('ennemisAttackFront', true);
              child.setFlipX(true);
              child.setSize(290,320).setOffset(28,50);
        } else if (child.y >= player.y + 10 && child.x >= player.x - 10 && child.x <= player.x + 10 && player.y < child.y) {
              child.anims.play('ennemisAttackBack', true);
              child.setFlipX(true);
              child.setSize(290,320).setOffset(28,-50);
        }

  });

  if (nbreKill == 5){ // resolution enigme 1
        bouees.children.iterate(function (child){
              if (child.x < 400 && child.y > 300) {
                    child.disableBody(true, true);
              }
        });
  }
// résolution énigme 2
  if (boueesTouchees == 4) {
    bouees.children.iterate(function (child){
          if (child.x > 400 && child.y > 300) {
                child.disableBody(true, true);
          }
    });
  }
//
    if (enter.isDown && offer == 0) {
      dialogue.visible = false;
      text.visible = false;
      skip.visible = false;
    }


    if (Phaser.Input.Keyboard.JustDown(enter) && offer > 0) {
      offer ++;
    if (offer == 2) {
      if (moneyCompte >= 10) {
      text.setText("Qu'en pensez-vous ? ENTRER/Croix/A pour accepter, ECHAP/Rond/B pour refuser");
        offer = 3;
  } else if (moneyCompte < 10) {
      text.setText("Oh mais vous ne possédez pas la somme qu'il faut, revenez me voir plus tard.");
        offer = 4;
    }
  } else if (offer == 4) {
    text.setText("Voila pour vous, bon courage. Vous obtenez une flûte mystérieuse, il paraît que le son qu'elle emet permet d'écarter les plus petites méduses. Vous pouvez l'utiliser depuis votre inventaire.");
    achat = 1;
    moneyCompte = moneyCompte - 10;
    moneyAffichage.setText("x" + moneyCompte);
  } else if (offer >= 5) {
          offer = 0;
          dialogue.visible = false;
          text.visible = false;
          skip.visible = false;
        }
}
        if (offer == 3) {
              if (echap.isDown) {
                offer = 0;
                dialogue.visible = false;
                text.visible = false;
                skip.visible = false;
              }
        }



} // accolade fin update

}
