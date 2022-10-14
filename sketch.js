var sueloInvisible;
var trex ,trex_running;
var tero ,tero_fly;
var suelo, sueloImg;
var Cloud;
function preload(){
 trex_running = loadAnimation ("trex1.png", "trex3.png", "trex4.png")
sueloImg = loadImage ("ground2.png");
tero_fly = loadAnimation ("tero1.png", "tero2.png")
Cloud = loadImage ("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite (50, 150);
 trex.addAnimation ("running",trex_running);
 tero = createSprite (300, 90, 10, 10)
 tero.addAnimation ("fly",tero_fly)
 trex.scale = 0.5;
 suelo = createSprite(300, 150)
 suelo.addImage("floor",sueloImg);
 suelo.velocityX = -3;
 sueloInvisible = createSprite (50, 168, 600, 20);
 sueloInvisible.visible = false;
}

function draw(){
  background("white")
 
  if(keyDown("space")&& trex.y >= 90){
   trex.velocityY = -10
 } 

  if(suelo.x <0){
   suelo.x = sueloInvisible.width/2; 
  }

trex.velocityY = trex.velocityY +0.8;
trex.collide (sueloInvisible);
SpawnClouds ();
drawSprites()
}

function SpawnClouds(){
  if(frameCount %60 === 0){
    var Nube = createSprite (600, 20, 40, 10);
    Nube.addImage(Cloud)
    Nube.velocityX = -5;
    Nube.y = Math.round(random(10,60));
  }
}