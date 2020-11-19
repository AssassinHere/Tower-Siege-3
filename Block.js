class Block{

  constructor(x, y, width, height) {

      var options = {
          restitution :0.05,
          friction :0.2,
          density: 0.1
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      World.add(world, this.body);
    }


    display(){
     
      push();
      this.Visibility = this.Visibility-5;
      tint(255, this.Visibility);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
}