class Block{

    constructor(x, y, width, height) {

        var options = {
           
            restitution :0.4,
            friction :0.0,
           
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);

      }

      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        var pos= this.body.position;

        push();
        strokeWeight(5);
        stroke("purple")
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();

        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255, this.Visiblity);

          strokeWeight(5);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();

        }

        

      }
}