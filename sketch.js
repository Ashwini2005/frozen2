const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1,ground2;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,
ball10,ball11,ball12,ball13,ball14,ball15,ball16,ball17;
var polygon;









function setup() {
  createCanvas(800,400);
 ground1=new Ground(300,235,200,20)
 ground2=new Ground(300,195,200,20)
 ball1=new Ball(330,235,30,40);
 ball2=new Ball(360,235,30,40);
 ball3=new Ball(390,235,30,40);
 ball4=new Ball(420,235,30,40);
 ball5=new Ball (450,235,30,40)
 ball6=new Ball(360,195,30,40)
 ball7=new Ball(390,195,30,40);
 ball8=new Ball(420,195,30,40);
 ball9=new Ball(390,155,30,40);
 ball10=new Ball(330,195,30,40);
 ball11=new Ball(360,195,30,40);
 ball12=new Ball(390,195,30,40);
 ball13=new Ball(420,195,30,40);
 ball14=new Ball(450,195,30,40);
 ball15=new Ball(360,155,30,40);
 ball16=new Ball(390,155,30,40);
 ball17=new Ball(420,155,30,40);
 ball18=new Ball(390,115,30,40);
 
 polygon=Bodies.circle(50,200,20);
 World.add(world,polygon);
 slingShot1=new SlingShot(this.polygon,{x:100,y:200});

}

function draw() {
  background(255,255,255);  
  ground1.display();
  ground2.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  ball12.display();
  ball13.display();
  ball14.display();
  ball15.display();
  ball16.display();
  ball17.display();
  ball18.display();
  drawSprites();
}
function mouseDragged(){
  Matter.polygon.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}