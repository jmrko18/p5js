
let per = []


function setup() {
    createCanvas(1000, 1000);
    background(1);
    for (let i = 0; i < 100; i = i + 1) {
        let r = new rocket(500,500)
        per.push(r)
    }
}

function draw() {
    background(1);
    let tmp = []; 
    for(let i = 0; i < per.length; i = i + 1){
        let r = per[i]
        if(r.isLive()){
           tmp.push(r) 
        }
    }
    per = tmp;

    for (let i = 0; i < per.length; i = i + 1) {
        let r = per[i]
        r.draw()
        r.update()
    }
    
    
    for(let i = 0; i < 10; i = i + 1){  
        if(random() < 0.8) {  
        let r = new rocket(mouseX,mouseY)
        per.push(r)
         }
    }
}



class rocket {
    constructor(X,Y) {
        this.pos = createVector(X, Y);
        this.color = 255;
        this.d = 5
        this.liveCount = 100
        this.direction = p5.Vector.random2D().mult(random(3, 5))
    }

    draw() {
        noStroke()
        fill(0,this.color,10)
        circle(this.pos.x, this.pos.y, this.d)

    }

    update() {

        this.pos.add(this.direction)
        this.color = this.color - 1
        this.d = this.d - 0.1
        this.liveCount = this.liveCount - 1

        if (this.d < 0) {
            this.d = 0
        }

    }
    isLive() {
        return this.liveCount > 0;
    }

}

