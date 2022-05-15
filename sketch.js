var stickman1,stickman2,stickman1Img,stickman2Img;
var ground,invisibleGround,groundImage;
var canvas;
var bg,bgImg;
//var gameState = "PLAY"


function preload()
{
  BgImg = loadImage("bg.png");
  stickman1Img = loadImage("Stickman1.png");
  stickman2Img = loadImage("Stickman2.png");

}
function setup() {
  bg = createSprite(displayWidth/2 - 20, displayHeight/2 - 40,20,20);
   bg.addImage(bgImg);
   bg.scale = 1.16;
   
  canvas = createCanvas(windowWidth, windowHeight);

  createCanvas(800,400);
  
  
}

function draw() {
  background(0);
  BgImg.scale = 

  drawSprites();
}