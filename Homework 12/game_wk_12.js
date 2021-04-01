//shape created when mouse is clicked//
var mouseShapeX=0;
var mouseShapeY=0;
//var for obstacles//
var squareX=100;
var squareY=100;

var squareX2=200;
var squareY2=300;

var circleX=10;
var circleY=50;
var diameter02=25;

function setup() 
{
  createCanvas(500, 600);
  createCharacter(250,100,50);
}

function draw() 
{
  background(250, 128, 0);
mouseShape();
  
createBorder(20);
//character call//
drawCharacter();
 ///exit call// 
winnerSign();
displayExit();
///obstacle calls// 
obstacles(squareX,squareY,squareX2,squareY2,circleX,circleY,diameter02);
controlWhiteSquare();
controlBlueSquare();
controlCircle();

}

/////////////beginning of functions/////////////////////////////
//---function for exit---//
function winnerSign()
{
 if (characterX > width && characterY >width)
 {
   fill(255,0,127);
   stroke(20);
   textSize(40);
   text("Winner", width/2-50, height/2-50);
 }
}
 function displayExit()
 {
   textSize(25);
   fill(140,10, 130);
   text ("EXIT",width-75,height-50);
 }


//---function for border---//
function createBorder(thickness)
  {
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
  fill(140,30,20);
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



//---functions of mouse/shape & clicked--//
function mouseShape()
{
  fill(400,200,10);
  ellipse(mouseShapeX, mouseShapeY,25,100);
}
function mouseClicked()
{
  mouseShapeX=mouseX;
  mouseShapeY=mouseY;
}



//--functions for obstacles--//
function obstacles(squareX, squareY, squareX2, squareY2, circleX, circleY, diameter02)
{
fill(255);
strokeWeight(1);
square(squareX,squareY,30);
fill(20,150,200);
square(squareX2,squareY2, 80);
fill(20,20,20);
circle(circleX, circleY, diameter02);
}


function controlWhiteSquare()
{
 if(squareX <= 500)
   {
     squareX +=5;
   }

 else if( squareX >100 && squareX < 300)
    {
      squareX +=10;
    }
 else if (squareX > 300)
    {
      squareX = 50;
    }
  //y-axis//
  if(squareY <=300)
    {
      squareY +=10;
    }
 else if (squareY >100 && squareY <=500)
    {
      squareY +=5;
    }
 else if ( squareY >500)
    {
      squareY = 10;
    } 

}

  function controlBlueSquare()
  {
    if(squareX2 < 200)
        {
            squareX2+=5;
        } 
        else if(squareX2 > 10 && squareX2 < 500)
        {
            squareX2+=2;
           
        }
        else if(squareX2 > 300)
        {
           squareX2 = 50;
        }
  //y axis//      
        if(squareY2 < 200)
        {
            squareY2+=10;
        }
          
        else if(squareY2 > 10 && squareY2 < 500)
        {
            squareY2+=1; 
       
        }
        else if(squareY2 > 300)
        {
            squareY2 = 50;
        }
  }



function controlCircle()
{
      if(circleX < 100)
        {
            circleX+=10;
        } 
        else if(circleX > 50 && circleX < 400)
        {
            circleX+=2;
           
        }
        else if(circleX > 300)
        {
           circleX = 40;
        }
  //y axis//      
        if(circleY < 100)
        {
            circleY+=20;
        }
          
        else if(circleY > 50 && circleY < 500)
        {
            circleY+=1; 
       
        }
        else if(circleY > 300)
        {
            circleY = 40;
        }
  
  controlDiameter();
}


function controlDiameter()
{
  if(diameter02 < 200)
    {
      diameter02 +=5;
    }
  else if (diameter02 >= 200)
  {
    diameter02 =10;
  }
}