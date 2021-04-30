class moon
{
constructor(x,y, diameter, color)
{
this.x=x;
this.y=y;
this.diameter=diameter;
this.color= color;

}

display()
{
    fill(this.color);
    circle(this.x, this.y, this.diameter);
}
  
move()
  {
    if(keyIsDown(UP_ARROW))
    {
      
        this.diameter +=5;
        
      }
    else if(keyIsDown(DOWN_ARROW))
      {
        this.diameter -=5;
      }
    if(keyIsDown(LEFT_ARROW))
      {
        this.x -= 10;
      }
    else if(keyIsDown(RIGHT_ARROW))
      {
        this.x +=10;
      }
  }



}



class clouds
{
    constructor(cloudX, cloudY, cloudWidth,cloudHeight, cloudColor)
    {
        this.cloudX=cloudX;
        this.cloudY=cloudY;
        this.cloudWidth=cloudWidth;
        this.cloudHeight=cloudHeight;
        this.cloudColor=cloudColor;
       
    }

    display()
    {
        noStroke();
        fill(this.cloudColor);
        ellipse(this.cloudX, this.cloudY, this.cloudWidth, this.cloudHeight);
        
    }
  
}



