
class Cannon{

    constructor(x,y,w,h,angle){

     this.x = x
     this.y = y
     this.w = w
     this.h = h
     this.angle = angle 
     this.Cannonimage = loadImage("assets/canon.png")
     this.Cannonbase = loadImage("assets/cannonBase.png")



    }

    display(){
    push();
    imageMode(CENTER);
    image(this.Cannonimage,this.x,this.y,this.w,this.h);
    pop();
    image(this.Cannonbase,70,20,200,200);
    noFill();

    }

}

