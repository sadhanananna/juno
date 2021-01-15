
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var tree;
var mango;
var ground;
var constraint;
var stone;



function preload()
{
	
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,600,width,20);
	boy = new Juno(200,360,200,300);
	tree = new Tree(1050,590)

	mango1=new Mango(1100,110,30);
    mango2=new Mango(1170,140,30);
	mango3=new Mango(1010,150,30);
	mango4=new Mango(1000,80,30);
	mango5=new Mango(1100,80,30);
	mango6=new Mango(1000,240,30);
	mango7=new Mango(900,240,40);
	mango8=new Mango(1140,160,40);
	mango9=new Mango(1100,240,40);
	mango10=new Mango(1200,210,40);
	mango11=new Mango(1120,60,40);
	mango12=new Mango(900,170,40);

   
	stoneObj=new Stone(235,430,30);

	launcherObject=new Launcher(stoneObj.body,{x:235,y:430})
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  ground.display();
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stoneObj.display();
  launcherObject.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
  
  //drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:430}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }



