
function setup() {
  createCanvas(400,400);
  background(30);
  box = createSprite(200,200,30,30);
  box.shapecolour

}

function draw()   {

  if (keyIsDown(RIGHT_ARROW))  {
    background("blue");
  }

  if (keyIsDown(LEFT_ARROW))   {
    background("red");
  }

    if (keyIsDown(UP_ARROW))   {
    background("yellow");
  }
  
  if (keyIsDown(DOWN_ARROW))   {
    background("green");
  }

  drawSprites();
}

