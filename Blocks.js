class Blocks{
    constructor(x,y,w,h){
        var op={
            restitution:0.4,
            friction:0

        }
        this.body=Matter.Bodies.rectangle(x,y,w,h,op)
        this.w=w;
        this.h=h;
        Matter.World.add(world,this.body)
    }

    display(){
        var angle=this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        fill("blue");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop()
    }
}
