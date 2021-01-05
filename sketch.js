var PLAY = 1;
var END = 0;
var gameState = PLAY;

var fruit, fruitGroup, sword, swords;
var fruit1_Image, fruit2_Image, fruit3_Image, fruit4_Image, sword_Image;

var monster, monsterImage, EnemyGroup;

var gameOver, gameOverImg;
var background;
var score;


function preload(){
  
  fruit1_Image = loadImage("fruit1.png");
   fruit2_Image = loadImage("fruit2.png");
    fruit3_Image = loadImage("fruit3.png");
   gameOverImg = loadAnimation("gameover.png");
  fruit4_Image = loadImage("fruit4.png");
   
  sword_Image = loadAnimation("sword.png");
  
  monsterImage = loadAnimation("alien1.png");
}

function setup(){
 createCanvas (600, 600);
 
 background = createSprite(100, 200, 600, 600);

  background.scale = 2.5;
  
 fruitGroup = createGroup();
  EnemyGroup = createGroup();
  
  
  
  sword = createSprite(480,220,100,100);

  sword.scale = 0.7;
  sword.addAnimation("swordd", sword_Image);
   sword.addAnimation ("gameovers", gameOverImg);
  gameOverImg.scale = 3;
    fill(255, 0, 98);
  score = 0;
}

function draw(){
 

if(gameState === PLAY){
  
 
   sword.y = World.mouseY;
   sword.x = World.mouseX;
  
 
   
  
  if(sword.isTouching(fruitGroup)){
    
    fruitGroup.destroyEach();
score = score+2;
    
  }
  
  else if(sword.isTouching(EnemyGroup)){

    
    gameState = END;
  }
}
  
  if(gameState === END){
   sword.x = 300;
    sword.y = 230;
   sword.changeAnimation("gameovers", gameOverImg);
    sword.scale = 2;
        EnemyGroup.setVelocityXEach(0);
    fruitGroup.setVelocityXEach(0);
     EnemyGroup.destroyEach();
    fruitGroup.destroyEach();


  }
  


     fruits();
  Enemy();
  
  drawSprites();
  
  text("Score: "+ score, 500,50);
}

function fruits(){
  
  
  if(World.frameCount%80===0){
    
    fruit=createSprite(600,200,20,20);
    fruit.scale = 0.2;
     
  r=Math.round(random(1,4));
    if(r == 1){
      fruit.addImage(fruit1_Image);
    } else if (r == 2){
      fruit.addImage(fruit2_Image);
    } else if (r == 3){
      fruit.addImage(fruit3_Image);
    } else {
      fruit.addImage(fruit4_Image);
    }
      fruit.y=Math.round(random(50,340));
    fruit.velocityX=-7
    fruit.setLifetime = 100;
    
    fruitGroup.add(fruit);
 
  }
}





function Enemy(){
  
  
  
  
  if(World.frameCount%200===0){
    monster=createSprite(600, 200, 20, 20);
    monster.addAnimation("moving", monsterImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX =-8;
    monster.setLifetime = 50;
    
   EnemyGroup.add(monster);
  }
}


