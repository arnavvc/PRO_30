class Block
{
    constructor(x, y, width, height, angle) {
        var options = {
            //'restitution':0.8,
            //'friction':1.0,
            //'density':1.0,
            //'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        fill("white")
        stroke("black")
        rect(0, 0, this.width, this.height);
        pop();

        if(this.body.speed > 3){
          World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           //tint(100, 100, 100, 0.5, this.Visiblity);
           rect(this.body.position.x, this.body.position.y, 30, 40);
           pop();
         }
      }
}