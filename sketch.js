var fixedRect, movingRect;

function setup(){
  createCanvas(600, 400);
  fixedRect = createSprite(500,200,30,300);
  movingRect = createSprite(200,200,100,30);
  
  movingRect.debug = true;
  fixedRect.debug = true;
  
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";

  ball1 = createSprite(100,200,20,20);
  ball1.velocityX = 3;

  ball2 = createSprite(100,250,20,20);
  ball2.velocityX = 3;
}



function draw() {
  
  background("black");

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  //calling the isTouching function with parameters
  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else
  {
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }

  
  //collide
  collide(fixedRect,ball1);
  

  //bounceOff
  bounceOff(fixedRect,ball2);

  drawSprites()
}

