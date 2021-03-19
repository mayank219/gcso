var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,60,100);


  speed=random(55,90);
  Weight=random(400,1500);
  
  car.velocityX = speed;

}


function draw() {

  background("black");  

  if (wall.x-car.x < (car.width+wall.width)/2) {
  car.velocityX=0;
  var deformation =0.5 * Weight * speed * speed/22509;
  
  if (deformation > 180) {
    car.shapecolor = "red" ;
  }

  if (deformation < 180 && deformation > 180) {
    car.shapecolor = "yellow" ;
  }

  if (deformation < 100) {
    car.shapecolor = "green" ;
  }

  }


  drawSprites();

}