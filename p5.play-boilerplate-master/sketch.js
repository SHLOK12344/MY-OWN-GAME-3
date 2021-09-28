var pc
var ground,ground2
var log,log2
var logGroup

function preload() {
  backgroundImage = loadImage("Images/Backgroung Inage.jpg");
  ForestImage = loadImage("Images/Forest Image.jpg");
  logImage = loadImage("Images/log1.png");
  logImage2 = loadImage("Images/images.jpg");
  pcImage = loadAnimation("Images/Pc-1.png","Images/Pc-2.png","Images/Pc-3.png","Images/Pc-4.png","Images/Pc-5.png","Images/Pc-6.png");
 
}

function setup() {
  createCanvas(1000,600);

  ground = createSprite(500,300,1600,1500);
  ground.velocityX=-5
  ground.addImage("groundImage",ForestImage);
  ground.scale=0.67

  ground2 = createSprite(1700,300,1600,1500);
  ground2.velocityX=-5
  ground2.addImage("groundImage",ForestImage);
  ground2.scale=0.67;

 pc = createSprite(100, 450, 50, 50);
 pc.addAnimation("pcImage",pcImage);
 pc.scale=0.6;
logGroup = new Group();
 edges=createEdgeSprites()
}

function draw() {
  background(backgroundImage); 
 // console.log(ground.x)

  spawnObstacles();

if(ground.x<0){
     ground.x=600;
    // console.log(ground.x)
}

if(ground2.x<500){
  ground2.x=1300;
 // console.log(ground.x)
}

if(keyDown("SPACE")&&pc.y>370){
   
  console.log(pc.y)
   pc.velocityY=-10
}
pc.velocityY=pc.velocityY+1;
pc.collide(edges[3]);

  drawSprites();
}

function spawnObstacles(){

if(frameCount%100===0){
  log = createSprite(1000,550,10,10);
  log.addImage("logImage",logImage);
  log.scale=0.3
  log.velocityX=-8
  log.lifetime=200;
  logGroup.add(log)
  log2 = createSprite(random(500,2000),550,10,10);
  log2.addImage("logImage",logImage2);
  log2.velocityX=-8
  log2.lifetime=200;
  logGroup.add(log2);
  pc.depth=log.depth+1;
  pc.depth=log2.depth+1;
}

//if(frameCount%750===0){
  
 // }
}