const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var base1, base2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var blocks1, blocks2, blocks3, blocks4, blocks4, blocks5, blocks6, blocks7, blocks8;
var polygon, slingShot;
var score;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  
 ground = new Ground(400, 390, 800, 20);
 base1 = new Ground(390,300,250,10);
 base2 = new Ground(700,200,200,10);

//base 1 , level 1
block1 = new Block(400,290,30,40);
block2 = new Block(310,290,30,40);
block3 = new Block(360,290,30,40);
block4 = new Block(360,290,30,40);
block5 = new Block(420,290,30,40);
block6 = new Block(450,290,30,40);
block7 = new Block(460,250,30,40);

//base 1 , level 2
block8 = new Block(326,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);

//base 1 , level 3
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);

//base 1 , level 4
block16 = new Block(390,155,30,40);


//base 2, level 1
blocks1 = new Block(665,185,30,40);
blocks2 = new Block(695,185,30,40);
blocks3 = new Block(720,185,30,40);
blocks4 = new Block(750,185,30,40);

//base 2, level 2
blocks5 = new Block(680,140,30,40);
blocks6 = new Block(710,140,30,40);
blocks7 = new Block(740,140,30,40);

//base 2, level 3
blocks8 = new Block(710,80,30,40);


polygon = new Polygon(110, 240, 35);
slingShot = new SlingShot(polygon.body, {x:100, y: 240 });

var score = 0;
  
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  base1.display();
  base2.display();
  
  //base 1
  //level 1
  fill("aquamarine");
  block1.display();
  fill("aquamarine");
  block2.display();
  fill("aquamarine");
  block3.display();
  fill("aquamarine");
  block4.display();
  fill("aquamarine");
  block5.display(); 
  fill("aquamarine");
  block6.display(); 
  fill("aquamarine");
  block7.display();

  //level 2
  fill("hotpink");
  block8.display();
  fill("hotpink");
  block9.display();
  fill("hotpink");
  block10.display();
  fill("hotpink");
  block11.display();
  fill("hotpink");
  block12.display();

  // level 3
  fill("cadetblue");
  block13.display();
  fill("cadetblue");
  block14.display();
  fill("cadetblue");
  block15.display();
  fill("cadetblue");

  //level 4
  fill("thistle");
  block16.display();

  //base 2
  //level 1
  fill("coral");
  blocks1.display();
  fill("coral");
  blocks2.display();
  fill("coral");
  blocks3.display();
  fill("coral");
  blocks4.display();

  //level 2
  fill("greenyellow");
  blocks5.display();
  fill("greenyellow");
  blocks6.display();
  fill("greenyellow");
  blocks7.display();

  //level 3
  fill("mediumvioletred");
  blocks8.display();

  fill("yellow");
  polygon.display();
  
  slingShot.display();

  
  drawSprites();

  text("SCORE: "+ score,750,40);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}


function keyPressed() {
	if(keyCode === 32) {

	Matter.Body.setPosition(polygon.body, {x: 200, y: 200});
	  slingShot.attach(polygon.body);
	}
  
}  