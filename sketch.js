const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var Log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600,height,1200,20);

    box1 = new Box(800, 355,70,70);
    pig1 = new Pig(870, 365);
    box2 = new Box(940,355,70,70);
    Log1 = new Log(870, 310, 250, PI/2); 
    
    box3 = new Box(800, 265,70,70);
    pig2 = new Pig(870, 275);
    box4 = new Box(940,265,70,70);
    Log2 = new Log(870, 220, 250, PI/2);
    box5 = new Box(870, 185, 70, 70); 
    Log3 = new Log(800,185, 120, PI/4);
    Log4 = new Log(940, 185, 120, -PI/4);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    Log1.display();
    box3.display();
    pig2.display();
    box4.display();
    Log2.display();
    box5.display();
    ground.display();
    Log4.display();
    Log3.display();
}