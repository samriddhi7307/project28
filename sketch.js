const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var gameState = "onSling"
function setup() {
	createCanvas(1000, 800);

	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(500,750,width,10);
	tree1 = new tree(680,400,5,5);
	boy1 = new boy(150,640,50,50);
	stone1 = new stone(200,545,30);
	mango1 = new mango(600,390,25);
	mango2 = new mango(690,100,25);
	mango3 = new mango(500,290,25);
	mango4 = new mango(650,190,25);
	mango5 = new mango(800,330,25);
	mango6 = new mango(850,250,25);
	mango7 = new mango(700,300,25);
	mango8 = new mango(600,280,25);
	mango9 = new mango(750,200,25);
	mango10 = new mango(900,330,25);
  slingshot1 = new slingshot (stone1.body,{x:60,y:545});

	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  tree1.display();
  boy1.display();
  slingshot1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();


  detectollisition(stone1,mango1);
  detectollisition(stone1,mango2);
  detectollisition(stone1,mango3);
  detectollisition(stone1,mango4);
  detectollisition(stone1,mango5);
  detectollisition(stone1,mango6);
  detectollisition(stone1,mango7);
  detectollisition(stone1,mango8);
  detectollisition(stone1,mango9);
  detectollisition(stone1,mango10);
}

function mouseDragged(){
  
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot1.fly();
  // Matter.Body.applyForce(stone1.body,stone1.body.position,{x:500,y:-900});
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone1.body,{x:235,y:420})
    slingshot1.attach(stone1); 
  }
}

function detectollisition(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}