class Tree {
    constructor(x,y,widt,height){
        var Options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png")
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
    }
}