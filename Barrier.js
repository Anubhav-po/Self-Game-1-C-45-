class Barrier{
    constructor(x, y, width, height){
        var options = {
            'restitution':1.0,
            'friction':10,
            'density':10
        }
        this.body = Bodies.rect(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world,this.body);
    }
    display(){
        /*var pointA = this.body.position;
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);*/   
    }

}
