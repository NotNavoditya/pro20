var car, wall;
var speed, width;
var deformation;


function setup() {
  createCanvas(1000,400);
  
  speed = random(100,180);
  weight = random(400,1500);

  car = createSprite(50, 200, 25, 25);

  wall = createSprite(900, 200, 10, 200);


  car.velocityX = speed;
}

function draw() {
  background(0);
  
if(wall.x - car.x < wall.width/2 + car.width/2){
car.velocityX = 0;
deformation = 0.5 * weight * speed *speed/22509;

if(deformation > 180){
  car.shapeColor = color(255,0,0);
  }

if(deformation < 180 && deformation > 100){
car.shapeColor = color(230,230,0);
}

if(deformation < 100){
  car.shapeColor = color(0,255,0);
  }
  
}



  drawSprites();
}