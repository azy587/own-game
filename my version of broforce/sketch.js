var player
var playerImg
var block1,block2,block3,block4,block5,block6,block7 
var blockImg
var background 
var gun, gunImg, bullet, bulletImg
var zombie
function preload () {
  playerImg = loadAnimation("player0.png","player0.png", "player1.png",)
  blockImg = loadImage("block2.png")
  gunImg = loadImage("gun.png")
}
function setup() {
  createCanvas(windowWidth - 50, windowHeight-50)
  player = createSprite(80,500,20,20)
  console.log(player.x)
  player.addAnimation("gun", playerImg)
  gun = createSprite(120,520,20,20)
  gun.addImage("shoot",gunImg)
  gun.scale = 0.05
  gun.x = player.x 
  gun.y = player.y
  tower()
}

function draw() {
  background("cyan")
  drawSprites()
  text(mouseX+","+mouseY,mouseX,mouseY)
  
    
  playerMove()
  
}
function playerMove(){
  if(keyDown("RIGHT_ARROW")){
    player.y = player.y + 2
  }
}

function tower(){
  block = createSprite(115,600,1000,100)
  block1 = createSprite(560,500,100,100)
  block2 = createSprite(660,400,100,100)
  block3 = createSprite(960,300,500,100)
  block4 = createSprite(1160,200,100,100)
  block5 = createSprite(960,100,100,100)
  //block = createSprite(200,600)
//block.addImage("tower", blockImg)
}
