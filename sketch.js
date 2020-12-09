
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ground1, gorund2
var gameState = "onSling";

function preload()
{
	
}

function setup()
{
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	polygon = new Polygon(50, 200, 20, PI/2)
	slingshot = new SlingShot(polygon.body, {x:100, y:200})
	
	//level 1 of boxes
	block1 = new Block(300, 325, 30, 40)
	block2 = new Block(330, 325, 30, 40)
	block3 = new Block(360, 325, 30, 40)
	block4 = new Block(390, 325, 30, 40)
	block5 = new Block(420, 325, 30, 40)
	block6 = new Block(450, 325, 30, 40)
	block7 = new Block(480, 325, 30, 40)
	//level 2 of boxes
	block8 = new Block(330, 285, 30, 40)
	block9 = new Block(360, 285, 30, 40)
	block10 = new Block(390, 285, 30, 40)
	block11 = new Block(420, 285, 30, 40)
	block12 = new Block(450, 285, 30, 40)
	//level 3 of boxes
	block13 = new Block(360, 245, 30, 40)
	block14 = new Block(390, 245, 30, 40)
	block15 = new Block(420, 245, 30, 40)
	//level 4 of boxes
	block16 = new Block(390, 205, 30, 40)
	
	//boxes on ground2
	//level 1 of boxes
	block17 = new Block(790, 240, 30, 40)
	block18 = new Block(820, 240, 30, 40)
	block19 = new Block(850, 240, 30, 40)
	block20 = new Block(880, 240, 30, 40)
	block21 = new Block(910, 240, 30, 40)
	//level 2 of boxes
	block22 = new Block(820, 205, 30, 40)
	block23 = new Block(850, 205, 30, 40)
	block24 = new Block(880, 205, 30, 40)
	//level 3 of boxes
    block25 = new Block(850, 165, 30, 40)
    
    ground1 = new Ground(390, 350, 250, 10)
	ground2 = new Ground(850, 250, 200, 10)

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  polygon.display();
  slingshot.display();

  //level 1 of boxes
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //level 2 of boxes
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //level 3 of boxes
  block13.display();
  block14.display();
  block15.display();
  //level 4 of boxes
  block16.display();

  //boxes on ground2
  //level 1 of boxes
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  //level 2 of boxes
  block22.display();
  block23.display();
  block24.display();
  //level 3 of boxes
  block25.display();

  ground1.display();
  ground2.display();

}


function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}


function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(polygon.body, {x:50, y:200})
       slingshot.attach(polygon.body);
    }
}