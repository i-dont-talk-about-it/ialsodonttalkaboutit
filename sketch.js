var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(100,100,20,20);
  car.velocityX=10;
  wall=createSprite(500,70,10,100);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  // if(isTouching(car,wall)){
  //   wall.visible=false;
  // }
  bounceOff(car,wall);
 
  drawSprites();
} 
