class Juno{
    constructor(x,y,height,width){
      var options = {
       isStatic:true
      }
      this.image = loadImage("boy.png");
      this.x=x,
      this.y=y,
      this.height=height,
      this.width=width
    }
      display(){
        image(this.image,this.x,this.y,this.height,this.width);
      }
    }
  