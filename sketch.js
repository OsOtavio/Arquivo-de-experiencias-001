
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var left;
var right;
var top_wall;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		restitution : 0.95,
		frictionAir : 0.01
	  }
	  var ground_options = {
		isStatic : true
	  }
	  ground =new Direcao(200,390,400,20);
	  right = new Direcao(390,200,20,400);
	  left = new Direcao(10,200,20,400);
	  top_wall = new Direcao(200,10,400,20);
	  sesta1= new Direcao(350,120,10,50);
	  sesta2= new Direcao(380,150,50,10);
	 ball= Bodies.circle(200,50,10,10);
	  ball = Bodies.circle(100,10,20,ball_options);
	  World.add(world,ball);
	Engine.run(engine);
    ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  up = createImg("up.png")
  up.position(300,30)
  up.size(50,50)
  up.mouseClicked(cima)
  certo = createImg("right.png")
  certo.position(20,30)
  certo.size(50,50)
  certo.mouseClicked(reita)
  purrar = createImg("push.png")
  purrar.position(150,30)
  purrar.size(50,50)
  purrar.mouseClicked(onal)
}
function cima() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.001})
	
  }
  function reita() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.001,y:0})
  }
  function onal() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.001,y:-0.001})
  }
  

function draw() {
	ground.show();
	top_wall.show();
	left.show();
	right.show();
	sesta1.show();
	sesta2.show();
  rectMode(CENTER);
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
 
}



