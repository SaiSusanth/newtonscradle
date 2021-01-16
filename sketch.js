
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ball1, ball2, ball3, ball4, roof;



function setup() {
	createCanvas(1270, 620);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Bob (635, 350, 60);
	ball1 = new Bob (565, 350, 60);
	ball2 = new Bob (705, 350, 60);
	ball3 = new Bob (775, 350, 60);
	ball4 = new Bob (495, 350, 60);
	roof = new Roof (625, 20, 370, 10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  roof.display();
 
}



