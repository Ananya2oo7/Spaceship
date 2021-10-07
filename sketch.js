var missile, missile_Image;
var dock , dock_Image;
var bg;
var missile1,missile2,missile3;

function preload(){
bg = loadImage("spacebg.jpg");
dock_Image = loadImage("iss.png");
missile_Image = loadImage("spacecraft1.png");
missile1 = loadImage("spacecraft2.png");
missile2 = loadImage("spacecraft3.png");
missile3 = loadImage("spacecraft4.png");

}



function setup() {
  createCanvas(1400,1400);
  dock  = createSprite(400, 200, 50, 50);
  dock.addImage("ship",dock_Image);
 
  missile = createSprite(400,1200,50,50);
  missile.addImage("craft",missile_Image);
  missile.scale = 0.4;




}

function draw() {
  background(bg);  
 
  if (keyDown(UP_ARROW)) {
    missile.addImage("craft",missile1);
    missile.velocityY = -2;
    }

    if (keyDown(RIGHT_ARROW)) {
      missile.addImage("craft",missile3);
      missile.velocityX = 2;
      
    }

    if (keyDown(LEFT_ARROW)) {
      missile.addImage("craft",missile2);
      missile.velocityX = -2;
      
    }



  
    
  



  drawSprites();
}