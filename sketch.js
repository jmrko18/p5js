

let chodci = []

function setup() {
  createCanvas(500, 500);
  background(51);
  
 for(let i = 0; i < 100; i = i + 1) {
  let ch = new chodec (color(random(255),random(255),random(255)));
  chodci.push(ch)

 }



}



function draw() {
  for(let i = 0; i < 100; i = i + 1) {
  let ch = chodci[i];
  ch.update()
  ch.draw()
   }
  
  
  
  

}


class chodec {
  constructor(C){
    //this.pos = p5.Vector.random2D();
    this.pos = createVector(250,250)
    this.color = C
   }
    draw(){
      noStroke()
      fill(this.color)
      rect(this.pos.x,this.pos.y,1);
    }

    update(){
      let step = p5.Vector.random2D();
      this.pos.add(step);
  }


}
