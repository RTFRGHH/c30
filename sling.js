class Sling{
    constructor(bodyA,pointB){
        var op={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,length:1

        }
        this.s=Matter.Constraint.create(op)
        this.pointB=pointB;
        Matter.World.add(world,this.s)


    }
    attach(body){
        this.s.bodyA=body
    }
    fly(){
        this.s.bodyA=null;
    }
    display(){
        if(this.s.bodyA){
            var pa=this.s.bodyA.position
            var pb=this.pointB
            line(pa.x,pa.y,pb.x,pb.y)
        }
    }
    
    

}