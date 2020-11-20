class Mango{
    constructor(x,y){
        var Options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,40,40);
        this.width = 40;
        this.height = 40;
        this.image = loadImage("mango.png");
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
    }
}
