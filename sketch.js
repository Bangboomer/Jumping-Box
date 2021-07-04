var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
music = loadSound("music.mp3")

}


function setup(){
canvas = createCanvas(800,600);
edges = createEdgeSprites()

block1 = createSprite(90,550,180,30)
block1.shapeColor = "#00FFED" ; 
block2 = createSprite(290,550,180,30)
block2.shapeColor = "#3499FF"
block3 = createSprite(490,550,180,30)
block3.shapeColor = "#FFCF1B"
block4 = createSprite(690,550,180,30)
block4.shapeColor = "#F00B51"

block = createSprite(40,40,30,30)
block.velocityX = -6
block.velocityY = -6
music.loop()

button = createButton('STOP SOUND');
button.position(0, 0);
button.mousePressed(stopSound);
}

function draw() {
background("black")
block.bounceOff(edges)

if(block.isTouching(block1) && block.bounceOff(block1)){
    block.shapeColor = "#00FFED" ; 
}
if(block.isTouching(block2) && block.bounceOff(block2)){
    block.shapeColor = "#3499FF" ; 
}
if(block.isTouching(block3) && block.bounceOff(block3)){
    block.shapeColor = "#FFCF1B" ; 
}
if(block.isTouching(block4) && block.bounceOff(block4)){
    block.shapeColor = "#F00B51" ; 
}


    
drawSprites();
}

function stopSound(){
    music.stop()
}
