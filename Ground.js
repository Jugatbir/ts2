class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(767,780,2000,20,ground_options);
          this.width = width;
          this.height = height;
          World.add(world,this.ground);
    }
    display(){

        strokeWeight(5);
        stroke("blue")
        fill("lightgreen");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,2000,20);
        
    }
}