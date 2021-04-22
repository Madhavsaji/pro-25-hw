
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbinImg,dustbin;
function preload()
{
	dustbinImg = loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,600,10);
	ground = new Ground(400,680,800,20);
	leftSide = new Dustbin(550,620,20,100);
	bottom = new Dustbin(610,660,100,20);
	rightSide = new Dustbin(670,620,20,100);

	dustbin = createSprite(610,585,20,20);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.40;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  ground.display();
  dustbin.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
  paper.display();
  
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}



