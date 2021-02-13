const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var score = 0


function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(1200,700);

    ball = new Ball(200,100,30)
    wall1 = new Net(700,453,25,200)
    wall2 = new Net(900,565,400,25)
    wall3 = new Net(1100,453,25,200)

    slingshot = new Slingshot(ball.body,{x:200, y:200});

    

}

function draw(){
    Engine.update(engine);
    background(0,0,0);

    if(ball.x > 200 && ball.y > 100){
    score = score + 1
    }

    textSize(24)
    fill ("white")
    text("Try to put the ball in the net by using the slingshot. \nIf you fail, press the space key to try again.\nIf you score, you will get a point.",100,50)

    textSize(24)
    fill("white")
    text("Score: "+score, 1000,100)

    ball.display()
    wall2.display()
    wall1.display()
    wall3.display()
    slingshot.display()

    drawSprites();
}   

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
if(keyCode===32){
slingshot.attach(ball.body)
}    
}

