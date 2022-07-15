const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    //chamar função getBackgroung

}

function setup(){
    createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(500,height,1000,20);
    platform = new Ground(150,height - 80,300,170);

    box1 = new Box(700,450,70,70);
    box2 = new Box(920,450,70,70);
    pig1 = new Pig(810, 420);
    log1 = new Log(810,400,300, PI/2);

    box3 = new Box(700,350,70,70);
    box4 = new Box(920,350,70,70);
    pig2 = new Pig(810, 330);
    log3 =  new Log(810,300,300, PI/2);

    box5 = new Box(810,250,70,70);
    log4 = new Log(750,250,150, PI/7);
    log5 = new Log(860,250,150, -PI/6);

    bird = new Bird(200,250);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:170});
}

function draw(){
    background(backgroundImg);
    
    //Pontuação


    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    pig2.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

//criar função voltar para o sling
function keyPressed(){

}

//criar função getBackgroung - http://worldtimeapi.org/api/timezone/Asia/Kolkata
async function getBackgroundImg(){
    
}