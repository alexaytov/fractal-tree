let root;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(0.25);
  background(0);
  stroke(255);
  translate(width / 2, height );

  branch(200);
}

function branch(len = 10) {
  line(0, 0, 0, -len);

  translate(0, -len);

  if (len <= 4) {
    return;
  }

  let numberOfBranches = len > 20 ? random(1, 3) : 1;

  for (let i = 0; i < numberOfBranches; i++) {
    let newLen = len * 0.70;
    let newAngle = random(-PI / 4, PI / 4);
    push();

    rotate(newAngle);
    branch(newLen);
    
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  translate(width / 2, height );
  branch(200);
}