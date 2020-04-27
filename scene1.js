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
    //
    this.load.image('scrollerHorizontal','assets/PNGsAssetsFixes/scrollerHorizontal.png');
    this.load.image('scrollerVertical','assets/PNGsAssetsFixes/scrollerVertical.png');
    //
    this.load.image('bouee','assets/PNGsAssetsFixes/Bouée.png');
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
    this.load.spritesheet('tourbillon','assets/SpriteSheets/Tourbillon.png',{frameWidth: 167, frameHeight: 70});
// ennemis
    this.load.spritesheet('ennemisMoveFace','assets/SpriteSheets/EnnemisMoveFace.png',{frameWidth: 348, frameHeight: 350});
    this.load.spritesheet('ennemisMoveBack','assets/SpriteSheets/EnnemisMoveBack.png',{frameWidth: 348, frameHeight: 310});
    this.load.spritesheet('ennemisMoveSide','assets/SpriteSheets/EnnemisMoveSide.png',{frameWidth: 348, frameHeight: 300});
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
      key: 'tourbillon',
      frames: this.anims.generateFrameNumbers('tourbillon', {start: 0, end: 1}),
      frameRate: 4,
      repeat: -1
    });
//
  oceland = this.add.sprite(400,300,'oceland').setScrollFactor(0.5); // creation environnement
//
  this.cameras.main.setZoom(2).setBounds(0,0,800,600); // zoom de la caméra
  this.cameras.main.setOrigin(0,0); // caméra centrée sur le premier plan du monde
//
  player = this.physics.add.sprite(200,240,'jena_idle').setScale(0.08).setSize(180,250).setOffset(40,15); // creation et definition des paramètres du personnage
  player.setCollideWorldBounds(true);
  player.setBounce(0);
//
  ennemis = this.physics.add.group({
  });
  ennemi = ennemis.get(140, 400, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
  ennemi = ennemis.get(260, 400, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
  ennemi = ennemis.get(140, 500, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
  ennemi = ennemis.get(260, 500, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
  ennemi = ennemis.get(380, 360, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
  ennemi = ennemis.get(150, 320, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
  this.physics.add.collider(player, ennemis);
  this.physics.add.collider(ennemis, ennemis);
//
  scrollers = this.physics.add.staticGroup();
  scroller = scrollers.create(210,298,'scrollerHorizontal');
  scroller = scrollers.create(405,430,'scrollerVertical');
  scroller = scrollers.create(405,120,'scrollerVertical');
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
  this.physics.add.collider(player, algues);
  this.physics.add.collider(ennemis, algues);
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
//
  corail = this.physics.add.staticGroup();
  corail.create(387,315,'corail').setScale(0.3).setSize(25,15).setOffset(30,20); // corail plan 1.0
  // corail plan 0.0
  corail.create(70,70,'corail').setScale(0.3).setSize(25,15).setOffset(30,20).setFlipX(true);
  this.physics.add.overlap(player, corail);
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
  this.physics.add.overlap(player, tourbillons);
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
  // rochers plan 0.0
  rocher = rochers.create(15,295,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(55,295,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(95,295,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40);
  rocher = rochers.create(310,295,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40).setFlipX(true);
  rocher = rochers.create(350,295,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40).setFlipX(true);
  rocher = rochers.create(390,295,'rochers').setScale(0.2).setSize(36,20).setOffset(75,40).setFlipX(true);
  // Rocher central
  rocher = rochers.create(210,120,'rochers').setScale(0.5).setSize(75,25).setOffset(53,47);
  this.physics.add.collider(player, rochers);
  this.physics.add.collider(ennemis, rochers);
//
  keys = this.physics.add.staticGroup();
  key = keys.create(200,445,'key').setScale(0.15).setSize(7,13).setOffset(25,43); // clé 1.0
  key = keys.create(207,143,'key').setScale(0.15).setSize(7,13).setOffset(25,43); // clé 0.0
  this.physics.add.overlap(player, keys);
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
  this.physics.add.collider(player, meduses);
  this.physics.add.collider(ennemis, meduses);
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
  this.physics.add.collider(player, bouees);
  this.physics.add.collider(ennemis, bouees);
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


//
  etoiles = this.physics.add.group();
  etoile = etoiles.create(350,590,'etoile').setScale(0.2);
  this.physics.add.overlap(player, etoiles);
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
  this.physics.add.overlap(player, coquillages);
//
  bulledevies = this.add.group();
   bulledevie = bulledevies.create(15, 315, 'bulledevie').setScale(0.2);
   bulledevie = bulledevies.create(35, 315, 'bulledevie').setScale(0.2);
   bulledevie = bulledevies.create(55, 315, 'bulledevie').setScale(0.2);
  // bulledevies.remove(bulledevie, true, true); POUR ENLEVER DES PV !
//
  money = this.add.image(15,335,'coquillageMoney').setScale(0.25);
  moneyAffichage = this.add.text(16,335, 'x' + moneyCompte, { fontFamily : 'Courrier New', fontSize: '12px', fill: '#fff' })

// Création des différents controles
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
// Déplacements ennemis
// Phaser.Actions.RotateAroundDistance(ennemis.getChildren(), { x: 400, y: 300 }, 0.02, 200);

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
      }
// Animations Ennemis
      if (child.body.velocity.y > 0) {
        child.anims.play('ennemisMoveFace', true);
      } else if (child.body.velocity.y < 0) {
        child.anims.play('ennemisMoveBack', true);
      } else if (child.body.velocity.y == 0) {
          if (child.body.velocity.x > 0) {
              child.anims.play('ennemisMoveSide', true);
              child.setFlipX(false);
          } else if (child.body.velocity.x < 0) {
              child.anims.play('ennemisMoveSide', true);
              child.setFlipX(true);
          }
      }

  });
//
}

}
