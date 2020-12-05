var shaiban,shaibanImg
var background1;
function preload(){
  shaibanImg = loadImage("images/normie.png")
  background1 = loadImage("images/1243.png")
}

function setup() {
  createCanvas(1200,800);
  shaiban = createSprite(50, 700, 50, 50);
  shaiban.addImage("normie", shaibanImg);
  shaiban.scale = 0.4;
  //backgroud.scale = 0.5;
}

function draw() {
  background(background1);  
  
  if(keyCode === UP_ARROW){
    console.log(shaiban.y)
    shaiban.y = shaiban.y-5;
  }

  if(keyCode === DOWN_ARROW){
    console.log(shaiban.y)
    shaiban.y = shaiban.y+5;
  }

  if(keyCode === RIGHT_ARROW){
    console.log(shaiban.y)
    shaiban.x = shaiban.x+5;
  }

  if(keyCode === LEFT_ARROW){
    console.log(shaiban.y)
    shaiban.x = shaiban.x-5;
  }

  drawSprites();
}

