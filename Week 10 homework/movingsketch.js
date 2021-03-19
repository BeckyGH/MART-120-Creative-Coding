//body moving along x axis
var xbody=180;
var ybody=500;
bodymovement = 10;

//ellipse in hand/arm moving along x axis
var xellipse=60;
var yellipse=340;
ellipsemovement=15;

//middle tiny square on body moving along y axis
var ysquare=540;
var xsquare=250;
squaremovement=5;
//left tiny square on body moving along y axis
var xsquare02=230;
var ysquare02=540;
squaremovement02=8;
//right tiny square on body moving along y axis
var xsquare03=270;
var ysquare03=540;
squaremovement03=8;

// diagonal axis
var bluesquareX=0;
var bluesquareY=0;
var speedX=5;
var speedY=5;
diagonalmovement=3;

//text sizing variables
var size=22;
var count=0;
var sizeDirection=2;

//head pulsing variables-xtra credit portion of homework 
var sizeHead =350;
var sizeHead01=280
var minSizeHead =200;
var maxSizeHead =400;
var sizeSpeed = .025;




function setup() {
    createCanvas(600,600);
  }
  
  function draw() {
    let c=color(247, 243, 10);
  background(153,255,155);
 
  
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
  rect(xbody,ybody,350,150);
    if(xbody >=400 || xbody <=0)
      {
        bodymovement *= -1;
      }
    xbody += bodymovement;
  fill(c)
  triangle(350, 580, 290,500,410, 500);
    
//squares on body
    //left tiny square moving along y axis
  square(xsquare02, ysquare02, 20);
    if(ysquare02 >=580 || ysquare02 <=450)
      {
        squaremovement02 *=-1;
      }
    ysquare02 += squaremovement02;
    
    //middle tiny square moving along y axis
  square(xsquare, ysquare, 20);
    if(ysquare >=600 || ysquare <=400)
      {
        squaremovement *=-1;
      }
    ysquare += squaremovement;
    
    //right tiny square moving along y axis
    square(xsquare03, ysquare03, 20);
    if(ysquare03 >= 580 || ysquare03 <= 450)
      {
        squaremovement03 *=-1;
      }
      ysquare03 += squaremovement03;
  
  //head----bigger/smaller continously
  strokeWeight(4);
  fill(255, 204,153);
    sizeHead = map(sin(frameCount * sizeSpeed),-1.0, 1.0, minSizeHead, maxSizeHead);
  ellipse(350, 350, sizeHead01, sizeHead);
  
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
 
  //arm/hand---moving along x axis 
  triangle(200, 580, 45, 450, 175, 485);
  triangle(45, 450, 55, 350, 75, 420);
  ellipse(xellipse, yellipse, 25, 40);
    if( xellipse >=200 || xellipse <=0)
      {
        ellipsemovement *=-1;
      }
    xellipse += ellipsemovement;
  
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
  
  //autograph---getting bigger and smaller
  strokeWeight(3)
  stroke(10)
  textSize(size);
   size+= sizeDirection;
    count++;
    if(count >=27 || size <=0)
      {
        sizeDirection *= -1;
        count =0;
      }
    
  
  text('Portrait--Becky GH', 400, 75);

  //background squares
  fill(33, 200, 155);
 
    //square moving diagonally
  square( bluesquareX, bluesquareY, 50);
    bluesquareX=bluesquareX + speedX;
    bluesquareY=bluesquareY + speedY;
    if( bluesquareX + speedX >= 500 || bluesquareX + speedX <=0)
      {
        speedX *= -1;
      }
    bluesquareX += diagonalmovement;
    if(bluesquareY + speedY >= 500 || bluesquareY + speedY <=0 )
      {
        speedY *=-1;
      }
    bluesquareY += diagonalmovement;
    
  fill(100,100, 40);
  square(150, 70,70);
  fill(300, 20, 80);
 square(125, 10, 30);
    

 
  
  
 
  }


