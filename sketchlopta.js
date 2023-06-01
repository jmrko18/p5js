
let gravity
let wind
let balls = []

function setup(){
createCanvas(1000,1000)
background(90)
for(let i = 0; i < 100; i = i + 1){
    let l = new lopta()
    balls.push(l)
}
gravity = createVector(0,0.1);
wind = createVector(0.03,0);
}

function draw(){
    let c = 0.01
wind = createVector(map(mouseX, 0, width, -width/2, width/2) * c, map(mouseY, 0, height, -height/2,height/2)*c);   
background(8,29,100)
for(let i = 0; i < balls.length; i = i + 1){
    let l = balls[i];
    l.applyForce(p5.Vector.mult(gravity, l.m))
    l.applyForce(wind)
    l.update()
    l.display() 
}
 
}

class lopta{
    constructor(){
        this.pos = createVector(random(width),0)
        this.m = random(1,5)
        this.d = this.m * 10
        this.accleration = createVector(0,0)
        this.velocity = createVector(0,0)
    }

    display(){
        circle(this.pos.x,this.pos.y,this.d)
    }   
    applyForce(forceVector){
        this.accleration.add(p5.Vector.div(forceVector,this.m))
        
    }
    update(){
        this.velocity.add(this.accleration) 

        this.chackEdges()
       /* if(this.velocity.mag() < 0.1){
         this.velocity.mult(0)
        }  */  
        this.pos.add(this.velocity)
        this.accleration.mult(0)
        

    } 

    chackEdges(){
       if(this.pos.y + this.d/2  > height || this.pos.y - this.d/2 < 0 ){
        this.velocity.y = this.velocity.y * -0.8;
        if(this.pos.y + this.d/2  > height){
            this.pos.y = height - this.d/2
        }
        if(this.pos.y - this.d/2  < 0){
            this.pos.y = 0 + this.d/2
        }
       } 
       
       if(this.pos.x + this.d/2 > width  || this.pos.x - this.d/2 < 0 ){
        this.velocity.x = this.velocity.x * -0.8;
        if(this.pos.x + this.d/2  > width){
            this.pos.x = width - this.d/2
        }
        if(this.pos.x - this.d/2  < 0){
            this.pos.x = 0 + this.d/2
        }
       }

       
       
} 
}
