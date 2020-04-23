function scroll (){
  if (scrollnumber == 0 && player.body.velocity.y > 0) {
    scrollnumber = 1;
    this.cameras.main.setOrigin(0,1);
  } else if (scrollnumber == 1 && player.body.velocity.y < 0) {
    scrollnumber = 0;
    this.cameras.main.setOrigin(0,0);
  }
}
