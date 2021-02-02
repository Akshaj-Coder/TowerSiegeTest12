const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var Polygon;


function preload() {

}

function setup() {
    createCanvas(1000,600);

    engine = Engine.create();
    world = engine.world;
    
    //ground = new Ground(240,20,300,20);

    Polygon = new polygon(200,25,300,20);

    Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
    background(56,44,44);


    //ground.display();
    Polygon.display();
}