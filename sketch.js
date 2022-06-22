
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;
groundobject = new ground(width/2,650,width,20)
leftside = new ground(1100,600,20,120)
rightside = new ground(1350,600,20,120)
//Create the Bodies Here.


	var ball_click={
isStatic:false,
restitution:0.5,
friction:0,
density:1.5
	} 
	ball=Bodies.circle(260,100,20,ball_click);
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius)
 goundobject.display() 
 leftside.display()
 righrside.display()
  drawSprites();
 
}



