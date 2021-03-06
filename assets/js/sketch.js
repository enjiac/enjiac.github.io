var theta;
var a;
var col;
var num;
var r;

function setup() {
  let cnv = createCanvas(120,90);
    //cnv.position(0,0,'fixed');
}

function draw() {
  background('#FAFAFA');
  translate(60, 45);
  theta = map(sin(millis()/1000.0), -1, 1, 0, PI/6);

  var num=3;
  for (var i=0; i<num; i++) {
    a = map(sin(millis()/1000.0), -1, 1, 0, 35);
    rotate(TWO_PI/num);
    branch(a);
  }
}

function branch(len) {
  col=map(len, 0, 90, 150, 255);
  stroke (237,183,24);
  line(0, 0, 0, -len/2);

  fill(237,183,24);
  ellipse(0, -len, 5, 5);
  len-=50;


  //枝干
  if (len>20) {
    push(); 
    translate(0, -30);
    rotate(theta);
    branch(len); 
    pop();

    push();
    translate(0, -30);
    rotate(-theta);
    branch(len); 
    pop();
  }
}