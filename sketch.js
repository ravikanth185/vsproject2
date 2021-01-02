var bullet;
var wall;
var speed;
var weight;
var thickness;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(100, 200, 50, 10);
  thickness=random(22,83)
  wall=createSprite(1250,200,thickness,200);
  speed=random(30,55);
  weight=random(100,400);
  bullet.velocityX=speed;
  bullet.shapeColor=(255)
  wall.shapeColor=(255)
 

}

function draw() {
  background(80,80,80);  
  var  deformation=0.5*weight*speed*speed/22500

  if(bullet.x-wall.x<bullet.width/2+wall.width/2 && 
    wall.x-bullet.x<bullet.width/2+wall.width/2 ){
      
      bullet.velocityX=0

      if( deformation < 10){
        wall.shapeColor=("green")
      }
      if( deformation > 10){
        wall.shapeColor=("red")
      }
   
}
  drawSprites();
}