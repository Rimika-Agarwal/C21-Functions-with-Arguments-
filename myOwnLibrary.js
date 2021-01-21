//function collide with arguments rect1,rect2
function collide(rect1,rect2) {
    if(rect1.x - rect2.x <= rect2.width/2 + rect1.width/2 ) {
     rect2.velocityX = 0;
    }
  }
  
  //function bounceOff with arguments rect1,rect2
  function bounceOff(rect1,rect2) {
    if(rect1.x - rect2.x <= rect2.width/2 + rect1.width/2 ) {
     rect2.velocityX = rect2.velocityX * (-1);
    }
  }
    
  //function isTouching with arguments object1,object2
  function isTouching(object1,object2){ //function with arguments object1 and object2
    if(object1.x - object2.x <= object1.width/2 + object2.width/2 && //detect collision from left side
      object2.x - object1.x <= object1.width/2 + object2.width/2 &&
      object1.y - object2.y <= object1.height/2 + object2.height/2 &&
      object2.y - object1.y <= object1.height/2 + object2.height/2 ) { //detect collision from right side
       return true;
      }
      else
      {
       return false;
      }  
  }