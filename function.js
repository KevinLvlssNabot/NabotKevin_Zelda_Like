function scroll (){ // fonction de changement de caméra
  if (scrollnumber == 0 && player.body.velocity.y < 0 && player.x < 350) {
    this.cameras.main.setOrigin(0,0);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 15, 15, 20);
    money.x = 15; money.y = 35;
    moneyAffichage.x = 16; moneyAffichage.y = 35;
    scrollnumber = 1;
  } else if (scrollnumber == 1 && player.body.velocity.y > 0 && player.y > 280) {
    this.cameras.main.setOrigin(0,1);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 15, 315, 20);
    scrollnumber = 0;
    money.x = 15; money.y = 335;
    moneyAffichage.x = 16; moneyAffichage.y = 335;
  } else if (scrollnumber == 0 && player.body.velocity.x > 0 && player.x > 350) {
    this.cameras.main.setOrigin(1,1);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 415, 315, 20);
    scrollnumber = 2;
    money.x = 415; money.y = 335;
    moneyAffichage.x = 416; moneyAffichage.y = 335;
  } else if (scrollnumber == 2 && player.body.velocity.x < 0 && player.x > 350 && player.y > 320) {
    this.cameras.main.setOrigin(0,1);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 15, 315, 20);
    scrollnumber = 0;
    money.x = 15; money.y = 335;
    moneyAffichage.x = 16; moneyAffichage.y = 335;
  } else if (scrollnumber == 2 && player.body.velocity.y < 0 && player.y > 300 && player.x > 430) {
    this.cameras.main.setOrigin(1,0);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 415, 15, 20);
    scrollnumber = 3;
    money.x = 415; money.y = 35;
    moneyAffichage.x = 416; moneyAffichage.y = 35;
  } else if (scrollnumber == 3 && player.body.velocity.y > 0 && player.y < 300 && player.x > 430) {
    this.cameras.main.setOrigin(1,1);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 415, 315, 20);
    scrollnumber = 2;
    money.x = 415; money.y = 335;
    moneyAffichage.x = 416; moneyAffichage.y = 335;
  } else if (scrollnumber == 3 && player.body.velocity.x < 0 && player.x > 400 && player.y < 280) {
    this.cameras.main.setOrigin(0,0);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 15, 15, 20);
    scrollnumber = 1;
    money.x = 15; money.y = 35;
    moneyAffichage.x = 16; moneyAffichage.y = 35;
  } else if (scrollnumber == 1 && player.body.velocity.x > 0 && player.x < 400 && player.y < 280) {
    this.cameras.main.setOrigin(1,0);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 315, 315, 20);
    scrollnumber = 3;
    money.x = 415; money.y = 35;
    moneyAffichage.x = 416; moneyAffichage.y = 35;
  }
}
//
function tutoriel(){

  if (Phaser.Input.Keyboard.JustDown(enter)) {
      tuto++;
  }
    if (tuto == 1) {
      text.setText('Ma fille... Cela faisait longtemps.');
    } else if (tuto == 2) {
        text.setText("Nous n'avons pas beaucoup de temps, je vais donc faire vite.");
    } else if (tuto == 3) {
        text.setText("Te rapelles tu de ce que je t'avais appris sur notre monde ? Non ? Ce n'est pas important, je vais te réexpliquer.");
    } else if (tuto == 4) {
        text.setText("Tu vois ces bulles ? Elles représentent ton énergie vitale, fais de ton mieux pour qu'elles ne disparaissent pas.");
        bulledevies.children.iterate(function (child){
          child.visible = true;
        });
    } else if (tuto == 5) {
        text.setText("La monnaie que nous utilisons est représentée par un coquillage, comme tu peux le voir, récoltes en un maximum, je suis persuadé que cela te servira.");
        money.visible = true;
        moneyAffichage.visible = true;
    } else if (tuto == 6) {
        text.setText("Déplaces toi avec les flèches directionnelles ou le PAD de la manette, je vais te donner des informations sur les objets de ce monde.");
    } else if (tuto == 7) {
      tuto = 0;
        text.visible = false;
        skip.visible = false;
        dialogue.visible = false;
    } else if (tuto == 8) {
        text.setText("Ces algues te barreront le chemin, mais tu pourras les ôter de ta route en les frappant avec la touche ESPACE/Carré/X. Tu auras l'occasion d'essayer cela lorsque je t'aurais tout dit.");
      text.visible = true;
      skip.visible = true;
      dialogue.visible = true;
      player.body.velocity.y = 0;
      player.body.velocity.x = 0;
      player.anims.play('jena_idle_top', true);
    } else if (tuto == 9) {
      tuto = 0;
        text.visible = false;
        skip.visible = false;
        dialogue.visible = false;
    } else if (tuto == 10) {
      text.setText('Ce corail a des vertues magiques, consomme-le depuis ton inventaire, en utilisant la touche I/Triangle/Y et cela te permettra de récupérer de la santé.');
    text.visible = true;
    skip.visible = true;
    dialogue.visible = true;
    player.body.velocity.y = 0;
    player.body.velocity.x = 0;
    player.anims.play('jena_idle_top', true);
    player.x = 431;
  } else if (tuto == 11){
    tuto = 0;
      text.visible = false;
      skip.visible = false;
      dialogue.visible = false;
    } else if (tuto == 12) {
    text.setText("Cette étoile te permettra de débloquer une attaque à distance, retrouve la puis, lorsque tu seras en sa possession, appuies sur la touche ESPACE/Rond/B pour lancer des étoiles de mer sur tes ennemis.");
    text.visible = true;
    skip.visible = true;
    dialogue.visible = true;
    player.body.velocity.y = 0;
    player.body.velocity.x = 0;
    player.anims.play('jena_idle_top', true);
    player.x = 541;
  } else if (tuto == 13) {
    tuto = 0;
      text.visible = false;
      skip.visible = false;
      dialogue.visible = false;
  } else if (tuto == 14) {
    text.setText("Ce tourbillon te permettra d'atteindre des zones que la nage seule ne pourra t'offrir, traverse-les et vois où ils te mènent.");
    text.visible = true;
    skip.visible = true;
    dialogue.visible = true;
    player.body.velocity.y = 0;
    player.body.velocity.x = 0;
    player.anims.play('jena_idle_top', true);
    player.x = 656;
  } else if (tuto == 15) {
    text.setText("Voila, nous avons fait le tour de ce que tu devais savoir. Je suis désolé de ne pouvoir être là pour toi. Le futur de notre monde repose sur toi, ma fille. Je te soutiens du plus profond de mon coeur.");
  } else if (tuto == 16) {
    tuto = 0;
      text.visible = false;
      skip.visible = false;
      dialogue.visible = false;
  }
}
//
  function animComplete(animation, frame){
    if (idlenumber == 0) {
      player.anims.play('jena_idle', true);
      player.setSize(180,250).setOffset(40,15);
    } else if (idlenumber == 1) {
      player.anims.play('jena_idle_top', true);
      player.setSize(180,250).setOffset(40,15);
    } else if (idlenumber == 2) {
      player.anims.play('jena_idle_droite', true);
      player.setFlipX(true);
      player.setSize(180,250).setOffset(40,15);
    } else if (idlenumber == 3) {
      player.anims.play('jena_idle_droite', true);
      player.setFlipX(false);
      player.setSize(180,250).setOffset(40,15);
    }
  }
//
function plusDalgues(){
  algues.children.iterate(function (algue){
      if (attack == 1){
          algues.remove(algue, true, true);
      };
  });
}
//
