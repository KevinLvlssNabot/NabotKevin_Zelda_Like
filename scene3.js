class Scene3 extends Phaser.Scene {
  constructor(){
    super("ending")
  }

  init(data){

  }

preload(){
this.load.spritesheet('oceland','assets/SpriteSheets/oceland.png',{frameWidth: 804, frameHeight: 600});
}

create(){
    oceland = this.add.image(400,300,'oceland');
    textFinal = this.add.text(300,300, "Merci d'avoir joué !", { fontFamily : 'Linux Libertine Display G', fontSize: '24px', fill: '#000'}).setWordWrapWidth(500, false);
}

update(){

}

}
