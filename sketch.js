 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var balloon ;
var database , position; 

var balloonPosition = database.ref('balloon/height');
balloonPosition.on("value", readPosition , showError );
function setup() {
  createCanvas(800,400);





  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
 if (keyDown(UP_ARROW)){
   updateHeight(0,10);
    balloon.addAnimation("hotAirballoon",balloonImage2);
    balloon.scale = balloon.scale - 0.01 ; 
 }


 if (keyDown(Down_ARROW)){
   updateHeight(0,-10);
   balloon.addAnimation("hotAirballoon",balloonImage3);
   balloon.scale = balloon.scale + 0.01 ; 
 }

  
  drawSprites();
}

function updateHeight(){
  database.ref('balloon/height'). set({
    'x': height.x + x,
    'y': height.y + y
  })

}

function readHeight(){
  height = data.val();
  balloon.x = height.x
  balloon.y = height.y
}

function showError(){
  console.log("Error in writing the database");
}
