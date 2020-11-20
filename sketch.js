
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImage;
var ground;
var tree;
var bg;

function preload(){
    boyImage = loadImage("boy.png");
    bg = loadImage("ground.jpg")
    
}

function setup() {
	createCanvas(1100,600);
    boy = createSprite(200,500,20,20);
    boy.addImage(boyImage);
    boy.scale = 0.1
    
    mango1 = new Mango(600,200,40,40)
    mango2 = new Mango(100,180,40,40)


    tree = new Tree(150,50,70,500)

	engine = Engine.create();
	world = engine.world;

    ground = new Ground(550,550,width,20);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  tree.display();
  ground.display();
  
  drawSprites();
 
}



