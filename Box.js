class Box{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false,
            'restitution': 0.8
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
    
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    }
}