
//var circleObject;
//var cloudObject;



function setup() 
{
 createCanvas(800, 800);
    noStroke();
  //background color
  for (let x = 0; x <= width; x+= 40)
  {
  for (let y = 0; y <= height; y+= 40)
   {
    
   fill (40, x*0.6, x*0.9);
   ellipse(x+20, y+20, 60, 60);
   }
  }


//moon in sky class
   circleObject = new moon(550,200, 150, "lightyellow");
  
   //first cloud object in sky class-white one
   
   cloudObject= new clouds(300, 250, 55, 40, "white");
   cloudObject02 = new clouds( 320, 225, 55, 40, "white");
   cloudObject03 = new clouds(350, 250, 85, 53, "white");
  cloudObject04 =new clouds(350, 250, 75,43, "#E3FCFC");
  //second cloud in sky-light grey one
   cloudTwo= new clouds(200, 100, 80, 40, "lightgrey");
  cloudTwo01=new clouds( 200, 100, 60, 30, "#E2ECEC");
   cloudTwo02=new clouds(240, 80, 90, 50, "lightgrey");
   cloudTwo03=new clouds(250, 90, 110, 40, "lightgrey");
  cloudTwo04=new clouds(250, 90, 85, 30, "#E2ECEC");
  //third cloud in sky-light blue
   cloudThree=new clouds(700,200, 110, 50, "lightblue");
   cloudThree02=new clouds(725,180, 97, 50,"lightblue");
   cloudThree03=new clouds(750, 200, 100,70, "lightblue");
  cloudThree04=new clouds(740, 200, 100, 40,"white");




}






function draw()
{
   //random blue rain drops
  for (let i = 0; i < 10; i++) 
  { 
    noStroke();
    fill(random(0.10),random(0,10), random(10, 200), 15);
    let size = random(100);
    ellipse(random(800), random(570), 10, size);
  }
   
 //display of clouds
   cloudObject.display();
   cloudObject02.display();
   cloudObject03.display();
  cloudObject04.display();
  
  //display of second cloud
   cloudTwo.display();
  cloudTwo01.display();
   cloudTwo02.display();
   cloudTwo03.display();
  cloudTwo04.display();
  
   //display-movement of moon
   circleObject.display();
  circleObject.move();
   
   //display of third clouds 
   cloudThree.display();
   cloudThree02.display();
   cloudThree03.display();
  cloudThree04.display();
     
  
 
  
  
   ///blue river circles
  for (let i = 0; i < 5; i++) 
   {
     fill(5, random(10,100), random(255), random(200));
     ellipse(random(windowWidth), random(600,900), random(40));
     
   } 
  
 
   //triangles are numbered from left to right
  //triangle 1-far left
  drawTriangle(100,400, 200,625, -50, 625,227,191,250);
   //triangle 2
   drawTriangle(200,350, 350, 645, -05, 645,204,153,255);
    //triange 3 
  drawTriangle(300, 300, 500, 665, 80, 670,178,102,255)
   //triangle 4-dark big purple 
  drawTriangle(450,250, 725,680, 200, 680,153, 51,255);
  //triangle 5
  drawTriangle(450, 300, 625, 710, 280, 710,204, 153, 255);
  //triangle 6
  drawTriangle(450,400, 550,650,350,650,178,102,255);

   
 //////Eye goes from background to foreground-larger to smaller
 //darker blue background circle
 drawEye( 450,575, 150, 110, "#000065");
 //two white cross circles
 drawEye( 450,575, 20, 180, "#F6F3F7");
 drawEye( 450,575, 190, 20, "#F6F3F7");
 ///light blue color of eye
 drawEye(450, 575, 100,85, "#97E7F8");
 //grey color of the eye
 drawEye(450, 575, 50,50, "#79797C");
 //black color of the eye-pupil
 drawEye(450,575, 20,20, "#040404");


  

  
   

}


//function to make "drawing on canvas"
function mouseDragged()
  {
fill (255);
circle( mouseX, mouseY, 15);
  }


function drawTriangle(x,y,x2,y2,x3,y3,r, g,b)
{
   fill(r, g,b);
   triangle(x,y,x2,y2,x3,y3);
}


function drawEye(bX, bY, bWidth,bHeight, bColor)
{
  fill(bColor);
  ellipse(bX, bY,bWidth,bHeight);
}
