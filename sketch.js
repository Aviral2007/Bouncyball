const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var options ={
    isStatic: true,
  }
  ground = Bodies.rectangle(400,390,800,20,options);
  World.add(world,ground);
  console.log(ground);

  var ball_options ={
   restitution: 0.3

  }
  ball = Bodies.circle(400,200,30,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y,800,20);
 
 ellipseMode(CENTER);
 ellipse(ball.position.x,ball.position.y,30,30);

}