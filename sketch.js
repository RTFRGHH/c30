var engine,world;
var holder, ball,ground;


function preload(){
    polygonimg=loadImage("polygon.png")

}


function setup(){
    createCanvas(900,400);
    engine=Matter.Engine.create();
    world=engine.world;
    Matter.Engine.run(engine);
    ground=new Ground();
    s1=new Stand(390,300,250,10)
    s2=new Stand(700,200,200,10)
    b1=new Blocks(300,275,30,40)
    b2=new Blocks(330,275,30,40)
    b3=new Blocks(360,275,30,40)
    b4=new Blocks(390,275,30,40)
    b5=new Blocks(420,275,30,40)
    b6=new Blocks(450,275,30,40)
    b7=new Blocks(480,275,30,40)
    
    b8=new Blocks(330,235,30,40)
    b9=new Blocks(360,235,30,40)
    b10=new Blocks(390,235,30,40)
    b11=new Blocks(420,235,30,40)
    b12=new Blocks(450,235,30,40)

    b13=new Blocks(360,195,30,40)
    b14=new Blocks(390,195,30,40)
    b15=new Blocks(420,195,30,40)
    b16=new Blocks(390,155,30,40)


    sd1=new Blocks(640,175,30,40)
    sd2=new Blocks(670,175,30,40)
    sd3=new Blocks(700,175,30,40)
    sd4=new Blocks(730,175,30,40)
    sd5=new Blocks(760,175,30,40)
    
    
sd7=new Blocks(670,135,30,40)
sd8=new Blocks(700,135,30,40)
sd10=new Blocks(730,135,30,40)
sd9=new Blocks(700,100,30,40)

ball=Matter.Bodies.circle(50,200,20)
Matter.World.add(world,ball)
sling=new Sling(this.ball,{x:100,y:200})
}
    



function draw(){
    background(0);
ground.display();
s1.display();
s2.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();

sd1.display();
sd2.display();
sd3.display();
sd4.display();



sd7.display();
sd8.display();

sd9.display();
sd10.display();
sd5.display();


imageMode(CENTER)
image(polygonimg,ball.position.x,ball.position.y,40,40)
sling.display();

}


function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly()
}
function keyPressed(){
    if(keyCode===32){
        sling.attach(this.polygonimg)
    }
}