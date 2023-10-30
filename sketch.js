let angle=0;
let yPos=500;

let shadowx=110;
let shadowy=80;

let xPos=50;
let xPos2=40;
let xPos3=330;
let xPos4=400;
let xPos5=550;
let xPos6=330;
let xPos7=370;
let xPos8=270;
let xPos9=260;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}

function draw() {
  background(49, 61, 107);
  //floor
    push() 
      noStroke();
      fill (74, 57, 10);
      rect(0,500,600,200);
    pop()
   
   
  
  //background
      
    push()
      noStroke ()
      fill(49, 61, 107);
      rect(0,0,600,100);
    pop()
  
    //body
  
      stroke(0);
      fill(225, 227, 232);
      strokeWeight(2.5);
      ellipse(300,375,105,190);
  push()
  noStroke();
      fill(41, 32, 7);
      ellipse(300,550,shadowx,shadowy);
    shadowx=shadowx - .5
  if (shadowx <=70)
    {shadowx=110}
  shadowy= shadowy - .5
  if (shadowy <= 40)
    {shadowy =80}
  
  pop()
  
    //moving halo
      push();
        noFill();
        strokeWeight(15);
        stroke(235, 191, 245);
        ellipse(300,yPos,100,40);
        yPos=yPos + .5
       
        if (yPos >= 550)
          {
      yPos = 510;
    }
   
      pop()
   //moon
  push()
  noStroke(0);
  ellipse(xPos,80,180);
xPos=xPos + 2
   if (xPos>=500)
    {
      xPos=50
      
    }
  pop()
  
  
  //horns
    triangle(250,200,275,200,262.5,100);
    triangle(325,200,350,200,332.5,100);
  
  //head
    fill(225, 227, 232);
    ellipse(300,250,140);
  //eye
    fill(0);
    push()
      
      ellipse(xPos8,250,80,90);
  xPos8=xPos8 + 1
    if (xPos8>= 330)
        {xPos8=270}
pop()
  push()
      noStroke(0);
      fill(75, 219, 9);
      translate(xPos9,250);
      rotate(angle);
      triangle(-15,7.5,15,7.5,0,-15);
      triangle(-15,-7.5,15,-7.5,0,15);
      angle= angle + 50
         xPos9= xPos9 + 1
        if (xPos9 >= 320)
          {xPos9 = 260}
    pop()
  
  //wind swoshes
  stroke(252, 252, 252)
  line(xPos3,400,xPos4,400);
   xPos3=xPos3 + 1
  if (xPos3 >= 530)
    {xPos3= 330}
   xPos4=xPos4 + 1
  if (xPos4 >= 600)
    {xPos4 = 400}
  line(xPos6,380,xPos7,380);
  xPos6=xPos6 + 1
  if (xPos6 >= 530)
    {xPos6=330}
  xPos7=xPos7 + 1
  if (xPos7 >= 570)
    {xPos7=370}
}
