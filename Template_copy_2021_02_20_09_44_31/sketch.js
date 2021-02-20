
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var bg;
var  ground;
var score=0;
var survivalTime
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bg=loadImage("project c17.jpg");
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  FoodGroup= new Group()
  obstacleGroup= new Group()
}



function setup() {
  createCanvas(670,400);
  monkey=createSprite(60,350,30,70);
  
  monkey.addAnimation("runnning",monkey_running);
  monkey.scale=0.1;
 
 ground=createSprite(200,405,1400,10)  
 ground.visible=false;
 ground.velocityX=-4
   
 
}


function draw() {
background(bg);
console.log(monkey.y)
   if(keyDown("space")&&monkey.y >310){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  if(bg.x<0){
    bg.x=bg.width/2;
  }
  
    
 if(World.frameCount%200==0){
    fruits()
 }
  
  if(World.frameCount%300==0){
    stones()
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
  drawSprites();
  fill("white") 
  text("Score: "+ score, 500,50);
  
  fill("black")
  var survivalTime=Math.round(getFrameRate()/1);
  text("Survival Time: "+ survivalTime,350,50)
   
}




function fruits(){
  banana=createSprite(670,Math.round(random(170,230)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-3
  FoodGroup.add(banana)
}




function stones(){
  obstacle=createSprite(670,380,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
}
