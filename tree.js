class Tree {
    constructor(x,y){
       this.x=x;
       this.y=y;
        this.dustbinWidth=450;
        this.dustbinHeight=600;
        this.wallThickness=10;
       this.image =loadImage("tree.png");
        this.bottombody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true});
        this.leftwallbody = Bodies.rectangle(0,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:false});
        this.rightwallbody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:false});
          World.add(world, this.bottombody);
          World.add(world, this.leftwallbody);
          World.add(world, this.rightwallbody);


    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y+10);
        imageMode(CENTER);
        
        image(this.image, 0, -this.dustbinHeight/2, this.dustbinWidth,this.dustbinHeight);
        pop();

    }
}