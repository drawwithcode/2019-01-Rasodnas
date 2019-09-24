function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  background(10);
  frameRate(60);
}

function draw() {

  push();
  translate(width/2, height/2);
  rotate(frameCount);
  stroke(color(frameCount/8));
  strokeWeight(1);
  line(0,200,50*cos(frameCount*3),50*-sin(frameCount*3));
  pop();

  push();
  translate(width/2, height/2);
  stroke(color(frameCount/8),frameCount/4,frameCount/2);
  strokeWeight(1);
  line(50,0,50*cos(frameCount*3),50*-sin(frameCount*3));
  pop();

  push();
  translate(width/2, height/2);
  rotate(frameCount);
  stroke(color(frameCount/8));
  strokeWeight(1);
  line(0,200,50*-cos(frameCount*3),50*sin(frameCount*3));
  pop();


}
