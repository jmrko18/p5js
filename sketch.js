let x = 10;
let y = 1000;


function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(89, 72, 4);
  rect(x, y, 10);
  x = x + 5
  y = y - 5

  if (x > 1000) {
    x = 0
  }

  if (y < 0) {
    y = 1000
  }

}

