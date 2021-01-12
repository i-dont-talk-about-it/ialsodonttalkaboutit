function isTouching(a,z){
    if (a.x - z.x < z.width/2 + a.width/2
      &&z.x - a.x < z.width/2 + a.width/2
      && a.y -z.y < z.height/2 + a.height/2
      && z.y - a.y < z.height/2 +a.height/2) {
    return true
  }
  else {
    return false;
  } 
  }
  function bounceOff(a,z){
    if (a.x - z.x < z.width/2 + a.width/2
      && z.x - a.x < z.width/2 + a.width/2){
        a.velocityX=(-1)*a.velocityX;
      }
  }
  