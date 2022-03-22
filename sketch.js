


//Create namespace for Engine
const Engine=Matter.Engine
//Create namespace for World
const World=Matter.World
//Create namespace for Bodies
const Bodies=Matter.Bodies

var engine,world
var ball,ground



function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  //create the engine
  //Add world to the engine
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
   ground = Bodies.rectangle(200,380,400,20,ground_options);
   World.add(world,ground); 
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
  rect(ground.position.x,ground.position.y,400,20)


  
  
}

