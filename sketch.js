var run,runani;
var slide,slideani;
var jump1,jumpani;
var ground;


function preload() {
  runani=loadAnimation("Run__000.png","Run__001.png","Run__002.png","Run__003.png","Run__004.png","Run__005.png","Run__006.png","Run__007.png","Run__008.png","Run__009.png");
  
  slideani=loadAnimation("Slide__000.png","Slide__001.png","Slide__002.png","Slide__003.png","Slide__004.png","Slide__005.png","Slide__006.png","Slide__007.png","Slide__008.png","Slide__009.png");


jumpani=loadAnimation("Jump__000.png","Jump__001.png","Jump__002.png","Jump__003.png","Jump__004.png","Jump__005.png","Jump__006.png","Jump__007.png","Jump__008.png","Jump__009.png");
}

function setup() {
  createCanvas(400, 400);
  run=createSprite(100,300,20,20)
  run.addAnimation("running",runani)
  run.scale=1;
  run.addAnimation("collided",slideani);
  run.addAnimation("jumping",jumpani);
  ground=createSprite(200,370,400,20);
  
}

function draw() {
  background(220);
  
  if(keyWentDown(DOWN_ARROW)) {
    run.changeAnimation("collided",slideani);
  }
  
  if(keyWentUp(DOWN_ARROW)) {
    run.changeAnimation("running",runani);
  }
   if(keyWentDown(UP_ARROW)) {
   // run.changeAnimation("jumping",jumpani);
     run.velocityY=-12;
      
  }
 run.velocityY=run.velocityY+0.8;
  run.collide(ground);
  if(keyWentUp(UP_ARROW)) {
    run.changeAnimation("running",runani);
  }
  drawSprites();
}