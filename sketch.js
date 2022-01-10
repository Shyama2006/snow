const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
  
  
 var bg;
  var snowf=[];
  
  
  
  function setup() {
    engine = Engine.create();
    world = engine.world;

    snow1=new Snow(50,50,50);

  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine);

  snow1.display()

 /* if(frameCount%20===0){
    snowf.push(new Snow(random(50,1000),10,50));
  }*/

 /* for(var j=0;j<snowf.length;j++){
    snowf[j].display();
  }*/

  background(bg);  
  drawSprites();
}

function preload(){
  bg=loadImage("snow3.jpg"); 
}


