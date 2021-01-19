
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1, side2, side3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.  
  ground= new Ground(400,650,800,10);
  
  paper= new Paper(100,600,30);
  
  side1 = new Dustbin(580,610,20,80)
  side2 = new Dustbin(720,610,20,80)
  side3 = new Dustbin(650,640,120,20)
 
  Engine.run(engine);
}
 
  function draw() {
	background("gray");

 ground.display();
 
 paper.display();

 side1.display();

 side2.display();

 side3.display();
  
 drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35});

} 
}


