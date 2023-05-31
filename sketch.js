

let chodci = []

function setup() {
  createCanvas(1000, 1000);
  background(51);
  
 for(let i = 0; i < 100; i = i + 1) {
  let mojafarba = color(random(255),(25),(155))

  let ch = new chodec (mojafarba,([4]));
  chodci.push(ch)


 }



}

function draw() {
  for(let i = 0; i < chodci.length; i = i + 1) {
  let ch = chodci[i];
  ch.update()
  ch.draw()
   }
  
  

}


class chodec {
  constructor(C, S){
    //this.pos = p5.Vector.random2D();
    this.pos = createVector(500,500)
    this.color = C
    this.shape = S
    this.pos1 = this.pos.copy()
    this.offset = random()
    this.offsetstep = random() * 0.01
   }
    draw(){
      noStroke()
      fill(this.color)

    if(this.shape == 1){ 
     triangle(
      this.pos.x,this.pos.y,
      this.pos.x + 12,this.pos.y,
      this.pos.x + 6,this.pos.y - 6
      );}

    if(this.shape == 2){
      square(this.pos.x,this.pos.y,10);
    }
    if(this.shape == 3){
      circle(this.pos.x,this.pos.y,8);
    }
    if(this.shape == 4){
      strokeWeight(2)
      stroke(this.color)
      line(this.pos.x,this.pos.y,
          this.pos1.x,this.pos1.y)   
    }
    }

    update(){
      let step = p5.Vector.random2D();
      this.pos1 = this.pos.copy()

      if (this.shape == 4){
        let angle = 2 * PI * noise(this.offset)
        step = p5.Vector.normalize(this.pos).mult(1).rotate(angle)

        this.offset = this.offset + this.offsetstep
      }
     

  
      this.pos.add(step);
      
      if(this.pos.x < 0){
        this.pos.x = width
        this.pos1.x = width
      }
      if(this.pos.x > width){
        this.pos.x = 0
        this.pos1.x = 0
      }
      

      if(this.pos.y < 0){
        this.pos.y = height
        this.pos1.y = height
      }

      if(this.pos.y > height){
        this.pos.y = 0
        this.pos1.y = 0
      }
  }


}

