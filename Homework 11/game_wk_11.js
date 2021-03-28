//my character(circle)
var characterX=100;
var characterY=100;
var diameter=50;
//white square obstacle number 1
var squareX=100;
var squareY=100;
//blue square obstacle number 2
var squareX2=0;
var squareY2=0;
//shape created when mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup() 
{
  createCanvas(500, 600);

}

function draw() 
{
  background(250, 128, 0);

  //border top
  rect(0,0,width,10);
  //border left side
 rect(0,0,10, height);
  //border bottom
  rect(0,height-10, width,10);
//border right side
  rect(width-10,0, 10, height-115)
  
  //exit
  textSize(25);
  fill(125,0,127);
  text("ExiT",width-75,height-50);
  
  //character green circle
  fill(100, 200, 20);
  strokeWeight(3);
  circle(characterX,characterY, diameter);
  
  
//white square obstacle
  fill(255);
  strokeWeight(1);
  square(squareX,squareY,30);
 // movement of white square obstacle 
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
  //y-axis
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
  
  //blue square obstacle movement
  fill(20,150,200);
  square(squareX2,squareY2, 80);
 //x axis
  if(squareX2 < 200)
        {
            squareX2+=5;
        } 
        else if(squareX2 > 10 && squareX2 < 500)
        {
            squareX2+=2;
            console.log("second else squareX2");
        }
        else if(squareX2 > 300)
        {
           squareX2 = 50;
        }
  //y axis      
        if(squareY2 < 200)
        {
            squareY2+=10;
        }
          
        else if(squareY2 > 10 && squareY2 < 500)
        {
            squareY2+=1; 
            console.log("second else squareY2");
        }
        else if(squareY2 > 300)
        {
            squareY2 = 50;
        }
  
  ///mouse clicked shape
  fill(400,200,10);
  ellipse(mouseShapeX, mouseShapeY, 25,100);
  
  //exit message
  if (characterX > width && characterY >width)
    {
      fill(255,0,127);
      stroke(20);
      textSize(40);
      text("Winner", width/2-50, height/2-50);
    }
        
        
  
    
    
  
  
  
  
  
  
}
  


//charcter moving with arrow keys
  function keyPressed()
{
  if (keyCode === DOWN_ARROW)
    {
      characterY += 30;
      }
  else if(keyCode ===UP_ARROW)
  {
    characterY -= 15;
  }
  
  else if ( keyCode ===LEFT_ARROW)
    {
      characterX -=15;
    }
    
    else if( keyCode ===RIGHT_ARROW)
    {
      characterX += 40;
    }
}

function mouseClicked()
{
  mouseShapeX=mouseX;
  mouseShapeY=mouseY;
}
 
 
 