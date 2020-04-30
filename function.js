function scroll (){ // fonction de changement de caméra
  if (scrollnumber == 0 && player.body.velocity.y < 0 && player.x < 350) {
    this.cameras.main.setOrigin(0,0);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 15, 15, 20);
    money.x = 15; money.y = 35;
    moneyAffichage.x = 16; moneyAffichage.y = 35;
    scrollnumber = 1;
    inventaire.x = 200; inventaire.y = 150;
    choicePosition = 0;
    corailImage.x = 146; corailImage.y = 131;
    corailText.x = 150; corailText.y = 135;
    etoileImage.x = 182; etoileImage.y = 131;
    cléImage.x = 219; cléImage.y = 131;
    cléText.x = 223; cléText.y = 135;
    flute.x = 251; flute.y = 131;
  } else if (scrollnumber == 1 && player.body.velocity.y > 0 && player.y > 280) {
    this.cameras.main.setOrigin(0,1);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 15, 315, 20);
    scrollnumber = 0;
    money.x = 15; money.y = 335;
    moneyAffichage.x = 16; moneyAffichage.y = 335;
    inventaire.x = 200; inventaire.y = 450;
    choicePosition = 0;
    corailImage.x = 146; corailImage.y = 431;
    corailText.x = 150; corailText.y = 435;
    etoileImage.x = 182; etoileImage.y = 431;
    cléImage.x = 219; cléImage.y = 431;
    cléText.x = 223; cléText.y = 435;
    flute.x = 251; flute.y = 431;
  } else if (scrollnumber == 0 && player.body.velocity.x > 0 && player.x > 350) {
    this.cameras.main.setOrigin(1,1);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 415, 315, 20);
    scrollnumber = 2;
    money.x = 415; money.y = 335;
    moneyAffichage.x = 416; moneyAffichage.y = 335;
    inventaire.x = 600; inventaire.y = 450;
    choicePosition = 0;
    corailImage.x = 546; corailImage.y = 431;
    corailText.x = 550; corailText.y = 435;
    etoileImage.x = 582; etoileImage.y = 431;
    cléImage.x = 619; cléImage.y = 431;
    cléText.x = 623; cléText.y = 435;
    flute.x = 651; flute.y = 431;
  } else if (scrollnumber == 2 && player.body.velocity.x < 0 && player.x > 350 && player.y > 370) {
    this.cameras.main.setOrigin(0,1);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 15, 315, 20);
    scrollnumber = 0;
    money.x = 15; money.y = 335;
    moneyAffichage.x = 16; moneyAffichage.y = 335;
    inventaire.x = 200; inventaire.y = 450;
    choicePosition = 0;
    corailImage.x = 146; corailImage.y = 431;
    corailText.x = 150; corailText.y = 435;
    etoileImage.x = 182; etoileImage.y = 431;
    cléImage.x = 219; cléImage.y = 431;
    cléText.x = 223; cléText.y = 435;
    flute.x = 251; flute.y = 431;
  } else if (scrollnumber == 2 && player.body.velocity.y < 0 && player.y > 300 && player.x > 430) {
    this.cameras.main.setOrigin(1,0);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 415, 15, 20);
    scrollnumber = 3;
    money.x = 415; money.y = 35;
    moneyAffichage.x = 416; moneyAffichage.y = 35;
    inventaire.x = 600; inventaire.y = 150;
    choicePosition = 0;
    corailImage.x = 546; corailImage.y = 131;
    corailText.x = 550; corailText.y = 135;
    etoileImage.x = 582; etoileImage.y = 131;
    cléImage.x = 619; cléImage.y = 131;
    cléText.x = 623; cléText.y = 135;
    flute.x = 651; flute.y = 131;
  } else if (scrollnumber == 3 && player.body.velocity.y > 0 && player.y < 300 && player.x > 430) {
    this.cameras.main.setOrigin(1,1);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 415, 315, 20);
    scrollnumber = 2;
    money.x = 415; money.y = 335;
    moneyAffichage.x = 416; moneyAffichage.y = 335;
    inventaire.x = 600; inventaire.y = 450;
    choicePosition = 0;
    corailImage.x = 546; corailImage.y = 431;
    corailText.x = 550; corailText.y = 435;
    etoileImage.x = 582; etoileImage.y = 431;
    cléImage.x = 619; cléImage.y = 431;
    cléText.x = 623; cléText.y = 435;
    flute.x = 651; flute.y = 431;
  } else if (scrollnumber == 3 && player.body.velocity.x < 0 && player.x > 400 && player.y < 280) {
    this.cameras.main.setOrigin(0,0);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 15, 15, 20);
    scrollnumber = 1;
    money.x = 15; money.y = 35;
    moneyAffichage.x = 16; moneyAffichage.y = 35;
    inventaire.x = 200; inventaire.y = 150;
    choicePosition = 0;
    corailImage.x = 146; corailImage.y = 131;
    corailText.x = 150; corailText.y = 135;
    etoileImage.x = 182; etoileImage.y = 131;
    cléImage.x = 219; cléImage.y = 131;
    cléText.x = 223; cléText.y = 135;
    flute.x = 251; flute.y = 131;
  } else if (scrollnumber == 1 && player.body.velocity.x > 0 && player.x > 350 && player.y < 280) {
    this.cameras.main.setOrigin(1,0);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 415, 15, 20);
    scrollnumber = 3;
    money.x = 415; money.y = 35;
    moneyAffichage.x = 416; moneyAffichage.y = 35;
    inventaire.x = 600; inventaire.y = 150;
    choicePosition = 0;
    corailImage.x = 546; corailImage.y = 131;
    corailText.x = 550; corailText.y = 135;
    etoileImage.x = 582; etoileImage.y = 131;
    cléImage.x = 619; cléImage.y = 131;
    cléText.x = 623; cléText.y = 135;
    flute.x = 651; flute.y = 131;
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
      text.setText('Ce corail a des vertues magiques, consomme-le depuis ton inventaire, en utilisant la touche I/Triangle/Y puis en le selectionnant et en appuyant sur ENTRER/Croix/A et cela te permettra de récupérer de la santé.');
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
    text.setText("Cette étoile te permettra de débloquer une attaque à distance, retrouve la puis, lorsque tu seras en sa possession, appuies sur la touche CTRL/Rond/B pour lancer des étoiles de mer sur tes ennemis.");
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
function plusDalgues(player, algue){
      if (attack == 1){
          algues.remove(algue, true, false);
          drop = Phaser.Math.Between(0, 100);
          if (drop <= 20) {
              coquillage = coquillages.create(algue.x, algue.y - 10, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
          } else if (drop > 30 && drop <= 32) {
            corail = coraux.create(algue.x, algue.y - 10, 'corail').setScale(0.3).setSize(25,15).setOffset(30,20);
          }
      }
}
//
function plusDalgues2(player, algue){
      if (attack == 1){
          algues.remove(algue, true, false);
      }
}
//
//
  function banking(player, coquillage){
      coquillage.disableBody(true, true);
        moneyCompte++;
        moneyAffichage.setText('x' + moneyCompte);
  }
//
  function addInventaire(player, corail){
    corail.disableBody(true, true);
      nbreCoraux++;
      corailText.setText('x' + nbreCoraux);
  }
//
  function rammassageEtoile(player, etoile){
    if (possessionEtoile == 0) {
      etoile.disableBody(true, true);
    text.setText("Vous avez trouvé l'étoile boomerang, servez-vous en pour attaquer à distance en appuyant sur la touche CTRL/Rond/B.");
    dialogue.visible = true;
    text.visible = true;
    skip.visible = true;
    possessionEtoile = 1;
  }
    if (rebond == 1) {
      etoile.disableBody(true, true);
      etoileLancee = 0;
    }
}
//
function plusDennemis(ennemi, etoile){
  nbreKill++;
    rebond = 1;
      if (etoileLancee == 1){
          ennemi.disableBody(true, true);
          drop = Phaser.Math.Between(0, 100);
          if (drop <= 20) {
              coquillage = coquillages.create(ennemi.x, ennemi.y - 10, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
          } else if (drop > 30 && drop <= 32) {
            corail = coraux.create(ennemi.x, ennemi.y - 10, 'corail').setScale(0.3).setSize(25,15).setOffset(30,20);
          }
      }
}
//
function bounce(){
    rebond = 1;
}
//
  function kill(player, ennemi){
        this.physics.moveToObject(ennemi, player, 50);
      if (attack == 1) {
            ennemi.disableBody(true, true);
            drop = Phaser.Math.Between(0, 100);
            if (drop <= 20) {
                coquillage = coquillages.create(ennemi.x, ennemi.y - 10, 'coquillage').setScale(0.2).setSize(12,12).setOffset(24,25);
            } else if (drop > 30 && drop <= 32) {
              corail = coraux.create(ennemi.x, ennemi.y - 10, 'corail').setScale(0.3).setSize(25,15).setOffset(30,20);
            }
      } else if (attack == 0){
        nbreKill++;
            if (player.x < ennemi.x) {
                player.x = player.x -20;
            } else if (player.y < ennemi.y) {
                player.y = player.y -20;
            } else if (player.x > ennemi.x) {
                player.x = player.x + 20;
            } else if (player.y > ennemi.y) {
                player.y = player.y + 20;
            }
          pv = pv -1;
            if (pv == 2) {
                bulledevie3.visible = false;
            } else if (pv == 1) {
                bulledevie2.visible = false;
            } else if (pv == 0) {
              bulledevie1.visible = false;
              this.physics.pause();
              gameOver = true;
            }

          }
      }
//
 function cléUp(player, key){
    nbreClé ++;
    cléText.setText('x' + nbreClé);
        if (key.x == 200 && key.y == 445) {
            key.disableBody(true, true);
        }
        if (key.x == 207 && key.y == 143) {
              ennemi = ennemis.create(200, 10, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
              ennemi = ennemis.create(170, 150, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
              ennemi = ennemis.create(350, 180, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
              ennemi = ennemis.create(370, 45, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
              ennemi = ennemis.create(100, 230, 'ennemisMoveFace').setScale(0.08).setSize(290,300).setOffset(28,28);
              this.physics.moveToObject(ennemi, player, 50);
              key.disableBody(true, true);
        }
        if (key.x == 570 && key.y == 580) {
              key.disableBody(true, true);
        }
        if (key.x == 750 && key.y == 85) {
              key.disableBody(true, true);
        }
 }

 //
 function teleportation(player, tourbillon){
      if (tourbillon.x == 165 && tourbillon.y == 237) { // tourbillons 1
            player.x = 70, player.y = 130;
      } else if (tourbillon.x == 80 && tourbillon.y == 105) { // tourbillon 1
            player.x = 160, player.y = 260;
      } else if (tourbillon.x == 235 && tourbillon.y == 237) { //tourbillon 2
            player.x = 370, player.y = 140
      } else if (tourbillon.x == 350 && tourbillon.y == 140) { //tourbillon 2
            player.x = 225, player.y = 259
      } else if (tourbillon.x == 350 && tourbillon.y == 90) { // tourbillon 3
            player.x = 95, player.y = 237
      } else if (tourbillon.x == 115 && tourbillon.y == 237) { // tourbillon 3
            player.x = 370, player.y = 90
      } else if (tourbillon.x == 380 && tourbillon.y == 55){ // tourbillon 4
            player.x = 85, player.y = 200
      } else if (tourbillon.x == 85 && tourbillon.y == 180) { // tourbillon 4
            player.x = 380, player.y = 35
      } else if (tourbillon.x == 325 && tourbillon.y == 170){ // tourbillon 5
            player.x = 312, player.y = 10
      } else if (tourbillon.x == 292 && tourbillon.y == 10) { // tourbillon 5
            player.x = 325, player.y = 190
      } else if (tourbillon.x == 285 && tourbillon.y == 230){ // tourbillon 6
            player.x = 253, player.y = 189
      } else if (tourbillon.x == 253 && tourbillon.y == 209) { // tourbillon 6
            player.x = 305, player.y = 230
      } else if (tourbillon.x == 115 && tourbillon.y == 10){ // tourbillon 7
            player.x = 210, player.y = 90
      } else if (tourbillon.x == 210 && tourbillon.y == 110) { // tourbillon 7
            player.x = 90, player.y = 10
      }
 }

 function bounce2(boueecible, etoile){ // résolution énigme 3
     rebond = 1;
     boueecible.setTint(0xff0000);
        if (boueecible.x == 770 && boueecible.y == 350 && intouchable1 == 0) {
            intouchable1 = 1;
            boueesTouchees++;
        } else if (boueecible.x == 790 && boueecible.y == 430 && intouchable2 == 0) {
          intouchable2 = 1;
          boueesTouchees++;
        } else if (boueecible.x == 760 && boueecible.y == 500 && intouchable3 == 0) {
          intouchable3 = 1;
          boueesTouchees++;
        } else if (boueecible.x == 790 && boueecible.y == 580 && intouchable4 == 0) {
          intouchable4 = 1;
          boueesTouchees++;
        }
 }
// 4eme enigme
    function offre(){
      if (offer == 0 && achat == 0) {
        offer = 1;
        player.x = player.x - 20;
      }
        if (offer == 1) {
          dialogue.visible = true; dialogue.x = 600, dialogue.y = 250;
          text.visible = true; text.x = 415, text.y = 220;
          skip.visible = true; skip.x = 700, skip.y = 280;
          text.setText("Bien le bonjour mademoiselle, je vois bien que vous êtes pressée et occupée mais j'aimerai vous faire une offre. Voyez-vous, je possède une flûte qui pourrait vous permettre d'écarter les plus petites méduses, afin que vous puissiez accéder à vos objectifs. Elle ne vous coutera que 10 coquillages.");

    }
}
//  déplacer les Méduses
    function fluteOnly(player, medusesMovable){
        if (achat == 1) {
            if (medusesMovable.x > 700 && medusesMovable.y > 100) {
                  medusesMovable.body.velocity.x = 50;
            } else if (medusesMovable.x < 700 && medusesMovable.y < 100) {
                  medusesMovable.body.velocity.x = 50;
            }
    }
  }
//  ouverture chateau
        function openSesame(player, chateau){
          passe++;
            if (nbreClé < 4) {
              dialogue.visible = true; dialogue.x = 600, dialogue.y = 250;
              text.visible = true; text.x = 415, text.y = 220;
              skip.visible = true; skip.x = 700, skip.y = 280;
              text.setText("Quatre serrures se trouvent sur les portes, trouver les clés permettraient de les ouvrir.");
              player.y = player.y + 15;
            } else if (nbreClé >= 4) {
              dialogue.visible = true; dialogue.x = 600, dialogue.y = 250;
              text.visible = true; text.x = 415, text.y = 220;
              skip.visible = true; skip.x = 700, skip.y = 280;
              text.setText("Vous inserez les clés dans leur serrure, les portes s'ouvrent.");
              chateau.anims.play('chateau');
              player.y = player.y + 15;
            }
              if (passe == 2) {
                  this.scene.start('deuxieme_scene');
                  scrollnumber = 0;
              }
        }

//
function plusDeBoss(boss, etoile){
  pvBoss = pvBoss -1;
    rebond = 1;
    if (etoile.x < boss.x) {
        etoile.x = etoile.x -20;
    } else if (player.y < boss.y) {
        etoile.y = etoile.y -20;
    } else if (player.x > boss.x) {
        etoile.x = etoile.x + 20;
    } else if (player.y > boss.y) {
        etoile.y = etoile.y + 20;
    }
    if (boss.body.velocity.x > 0) {
          boss.body.velocity.x = 125; boss.body.velocity.y = 0;
    } else if (boss.body.velocity.x < 0) {
          boss.body.velocity.x = -125; boss.body.velocity.y = 0;
    } else if (boss.body.velocity.y < 0) {
          boss.body.velocity.y = -125; boss.body.velocity.x = 0;
    } else if (boss.body.velocity.y > 0) {
          boss.body.velocity.y = 125; boss.body.velocity.x = 0
    }
      if (pvBoss == 0){
          boss.disableBody(true, true);
          drop = Phaser.Math.Between(0, 100);
          if (drop <= 20) {
              coquillage = coquillages.create(boss.x, boss.y - 10, 'coquillage').setScale(0.4).setSize(12,12).setOffset(24,25);
          } else if (drop > 30 && drop <= 32) {
            corail = coraux.create(boss.x, boss.y - 10, 'corail').setScale(0.6).setSize(25,15).setOffset(30,20);
          }
      }
}
//
function killBoss(player, boss){
      if (boss.body.velocity.x > 0) {
            boss.body.velocity.x = 125; boss.body.velocity.y = 0;
      } else if (boss.body.velocity.x < 0) {
            boss.body.velocity.x = -125; boss.body.velocity.y = 0;
      } else if (boss.body.velocity.y < 0) {
            boss.body.velocity.y = -125; boss.body.velocity.x = 0;
      } else if (boss.body.velocity.y > 0) {
            boss.body.velocity.y = 125; boss.body.velocity.x = 0
      }
    if (attack == 1) {
        pvBoss = pvBoss -1;
        boss.setTint(0xff0000);
        if (pvBoss <= 0){
            boss.disableBody(true, true);
          }
        if (player.x < boss.x) {
            player.x = player.x -20;
        } else if (player.y < boss.y) {
            player.y = player.y -20;
        } else if (player.x > boss.x) {
            player.x = player.x + 20;
        } else if (player.y > boss.y) {
            player.y = player.y + 20;
        }
    } else if (attack == 0){
          if (player.x < boss.x) {
              player.x = player.x -20;
          } else if (player.y < boss.y) {
              player.y = player.y -20;
          } else if (player.x > boss.x) {
              player.x = player.x + 20;
          } else if (player.y > boss.y) {
              player.y = player.y + 20;
          }
        pv = pv -1;
          if (pv == 2) {
              bulledevie3.visible = false;
          } else if (pv == 1) {
              bulledevie2.visible = false;
          } else if (pv == 0) {
            bulledevie1.visible = false;
            this.physics.pause();
            gameOver = true;
          }
        }
    }
