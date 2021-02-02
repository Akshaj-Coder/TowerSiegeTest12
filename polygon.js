class polygon{
    constructor(x,y,width,height,angle) {
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.image = loadImage("polygon.png");

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        imageMode(CENTER);
        image(0,0,this.width,this.height);
        rect(0,0,this.width,this.height);
        
        pop();
    }
}