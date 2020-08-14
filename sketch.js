var fixedRect,movingRect,redRect,yellowRect;



function setup() {


  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.velocityX = 5;
  movingRect = createSprite(600,200,50,90);
  movingRect.velocityX = -5;
  redRect = createSprite(100,200,90,100);
  redRect.shapeColor = "red";
  yellowRect = createSprite(200,200,90,100);
  yellowRect.shapeColor = "yellow";


}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,redRect)){
    redRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  } else {
    redRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
 bounceOff(movingRect, fixedRect);
  drawSprites();
}

