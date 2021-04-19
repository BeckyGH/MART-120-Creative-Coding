class rectangle
{
  constructor(x, y, wide, high, color)
  {
  this.x = x;
  this.y = y;
  this.wide = wide;
  this.high= high;
  this.color= color;
  }
  
  display()
  {
    fill(this.color);
    rect(this.x, this.y, this.wide,this.high);
  }
   
}

class bigcircle
{
  constructor(circleX,circleY, diameter01, circlecolor)
  {
    this.circleX = circleX;
    this.circleY = circleY;
    this.diameter01 = diameter01;
    this.circlecolor = circlecolor; 
  }

  display()
  {
    fill(this.circlecolor);
    circle(this.circleX, this.circleY, this.diameter01, this.circlecolor);
  
  }
   
}

class smalltriangle
{
  constructor(X1, Y1, X2, Y2, X3, Y3, tricolor)
  {
    this.X1 = X1;
    this.Y1 = Y1;
    this.X2 = X2;
    this.Y2 = Y2;
    this.X3 = X3;
    this.Y3 = Y3;
    this.tricolor = tricolor;
  }

  display()
  {
    fill(this.tricolor);
    triangle(this.X1, this.Y1, this.X2, this.Y2, this.X3, this.Y3);
  }
}