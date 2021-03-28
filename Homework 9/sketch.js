function setup() {
    createCanvas(600,600);
  }
  
  function draw() {
    let c=color(247, 243, 10);
  background(153,255,153);

  
  //left ear on canvas
  strokeWeight(4);
  fill(255, 204, 153);
  ellipse(200, 330, 50, 65);
  strokeWeight(15)
  point(200, 330);
  //right ear on canvas
  strokeWeight(4)
  ellipse(500, 330, 50, 65);
  strokeWeight(15)
  point(500, 330);
  
  //body
  strokeWeight(5);
  fill(115, 0, 51 );
  rect(180,500,350,150);
  fill(c)
  triangle(350, 580, 290,500,410, 500);
  square(230, 540, 20);
  square(250, 540, 20);
  square(270, 540, 20);

  //head
  strokeWeight(4);
  fill(255, 204,153);
  ellipse(350, 350, 280, 350);
  
  //hair
  fill(8, 165,197);
  triangle(350, 175, 240, 280, 220, 260);
  triangle(350, 175, 350, 225, 380, 200);
  triangle(350, 175, 230, 230, 240, 180);
  triangle(350, 175, 380, 150, 400,160);
  triangle(350, 175, 295, 160, 320, 150);
  strokeWeight(25)
  stroke(80);
  point(350, 175);
 
  
  
  //left eye
  strokeWeight(5)
  stroke(55)
  line(262, 290, 245, 270);
  line(270, 285, 260, 270);
  line(278, 280, 270, 265);
  line(290, 280, 285, 268);
  fill(255,255,255);
  ellipse(290, 300, 60,40);
  fill(163, 102, 39);
  circle(290, 300, 40);
  fill(0,0,0);
  ellipse(290, 300, 12, 10);
  
  
  //right eye
  line( 430, 290, 445, 270)
  line(420, 282, 430, 265);
  line(410, 280, 415, 262);
  line(400, 280, 400, 265);
  fill(255,255, 255);
  ellipse(405, 300, 60, 40);
  fill(163, 102, 39)
  circle(405, 300, 40);
  fill(0,0,0);
  ellipse(405, 300, 12, 10)
  
  //nose 
  fill(240, 180,150);
  circle(335, 380, 20);
  circle(355, 385, 15);
  triangle(345, 400, 330,340,365, 340 );
  
  //mouth
  strokeWeight(4);
  line(320, 450, 370, 460);
  line(370, 460, 380, 450);
 
  //arm/hand
  triangle(200, 580, 45, 450, 175, 485);
  triangle(45, 450, 55, 350, 75, 420);
  ellipse(60, 340, 25, 40);
  
   //cheeks
  fill(230, 164, 96);
  circle(260, 380, 40);
  circle(440, 380, 40);
  
  //peacesign
  strokeWeight(8)
  stroke(80)
  fill(c);
  circle(100, 250, 150);
  line(100, 175, 100, 325);
  line(100, 250, 50, 305);
  line(100, 250, 150, 305);
  
  //autograph
  strokeWeight(3)
  stroke(10)
  textSize(18);
  text('Portrait--Becky GH', 400, 75);

  //backgrounddesign
  fill(33, 200, 155);
  rotate(PI/4.0);
  square(100, 0, 50);
  fill(100,100, 40);
  square(150, -70,70);
  fill(300, 20, 80);
 square(125, -10, 30);
  
  

 
  
  
 
  }