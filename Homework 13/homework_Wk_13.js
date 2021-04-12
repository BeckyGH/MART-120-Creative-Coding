//shape created when mouse is clicked//
var mouseShapeX=0;
var mouseShapeY=0;
//square obstacles
var myXs=[];
var myYs=[];
var squaresize=[];
//speed for squares
var xSpeed =[];
var ySpeed =[];

//x&y for circle obstacles
var circleX=[];
var circleY=[];
var circleD=[];
//colors using arrays for obstacles
var colors =["red","black"];

function setup() 
{
  createCanvas(500, 600);
  
// loop for squares-random size & position
  for (var i=0; i < 5; i++)
  { 
    xSpeed[i] =Math.floor(random);
    ySpeed[i] =Math.floor(random);
    myXs[i] =getRandomNumber(500);
    myYs[i] =getRandomNumber(600);
    squaresize[i]= getRandomNumber(45);
  
  }
  
//loop for circles-random size &postion
  for(var e=0; e <4; e++)
    {
      circleX[e]=getRandomNumber(400);
      circleY[e]=getRandomNumber(300);
      circleD[e]=getRandomNumber(20);
    }
  createCharacter(250,100,50);
}

function draw() 
{
background(50,128, 10);
mouseShape();
createBorder(20);
//character call//
drawCharacter();
///exit call// 
winnerSign();
displayExit();

//squares using arrays 
for(var i=0;i < myXs.length; i++)
{
  fill(colors[0]);
square(myXs[i], myYs[i], squaresize[i]);
  xSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  ySpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  myXs[i] += xSpeed[i];
  myYs[i] += ySpeed[i];
 
if(myXs[i] > width)
  {
    myXs[i] = 0;
  }
if(myXs[i] <0)
  {
    myXs[i] = width;
  }
if(myYs [i] > height)
  {
    myYs[i]=0;
  }
if(myYs [i] < 0)
  {
   myYs = height;
   }
}
//circles using arrays  
for(var e=0; e < circleX.length; e++)
  {
    fill(colors[1]);
circle(circleX[e], circleY[e], circleD[e]);
  }
}
/////////////beginning of functions/////////////////////////////
//---function for exit---// 
function winnerSign()
{
 if (characterX > width && characterY >width)
 {
   fill(255,100,127);
   stroke(20);
   textSize(40);
   text("Winner", width/2-50, height/2-50);
 }
}
 function displayExit()
 {
   textSize(25);
   fill(32,32,32);
   text ("EXIT",width-75,height-50);
 }


//---function for border---//
function createBorder(thickness)
  {
    fill("orange")
//top
  rect(0,0,width, thickness);
// left side
 rect(0,0,thickness, height);
// bottom
  rect(0,height-thickness, width,thickness);
//right side
  rect(width-thickness,0, thickness, height-115)
  }

//---functions for character---//
function createCharacter(x,y)
{
  characterX=x;
  characterY=y;
}
function drawCharacter()
{
  strokeWeight(3);
  fill(204,102,20);
  circle(characterX, characterY, 40);
  characterMovement();
}

function characterMovement()
{
  if (keyIsDown(DOWN_ARROW))
    {
      characterY += 10;
      }
  if(keyIsDown(UP_ARROW))
  {
    characterY -= 10;
  }
  
  if(keyIsDown(LEFT_ARROW))
    {
      characterX -=10;
    }
    
  if(keyIsDown(RIGHT_ARROW))
    {
      characterX +=10;
    }
}

function getRandomNumber(number)
    {
        return Math.floor(Math.random() * number) + 10;
    }


//---functions of mouse/shape & clicked--//
function mouseShape()
{
  strokeWeight(2);
  fill(255,255,255);
  ellipse(mouseShapeX, mouseShapeY,25,100);
}
function mouseClicked()
{
  mouseShapeX=mouseX;
  mouseShapeY=mouseY;
}
