var movingRect, staticRect
var rect1, rect2



function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  staticRect=createSprite(400, 200, 50, 50)
  rect1=createSprite(0, 100, 50, 50);
  rect2=createSprite(800, 100, 50, 50)
  rect1.velocityX=5
  rect1.shapeColor="orange"
  rect2.velocityX=-5

}

function draw() {
  background(0); 
  movingRect.x= mouseX
  movingRect.y= mouseY


  if (movingRect.x-staticRect.x<movingRect.width/2+staticRect.width/2 && 
      staticRect.x-movingRect.x<movingRect.width/2+staticRect.width/2 &&
      movingRect.y-staticRect.y<movingRect.height/2+staticRect.height/2 &&
      staticRect.y-movingRect.y<movingRect.height/2+staticRect.height/2 ){
  movingRect.shapeColor="Green"
  staticRect.shapeColor="white"

  }
else{
  movingRect.shapeColor="red"
  staticRect.shapeColor="yellow" 

}


if (rect1.x-rect2.x<rect1.width/2+rect2.width/2 && 
  rect2.x-rect1.x<rect2.width/2+rect1.width/2){
rect1.velocityX=rect1.velocityX*-1
rect2.velocityX=rect2.velocityX*-1
 }
 
 if (rect1.x-rect2.x<rect1.height/2+rect2.height/2 && 
  rect2.y-rect1.y<rect2.height/2+rect1.height/2){
rect1.velocityY=rect1.velocityY*-1
rect2.velocityY=rect2.velocityY*-1
 }


   
  drawSprites();
}