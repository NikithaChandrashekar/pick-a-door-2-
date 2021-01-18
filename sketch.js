var PLAY = 1;
var END = 0;
var gameState = PLAY;

var player, player_running, player_collided;
var ground, invisibleGround, groundImage;
var doorAnimation,door1,door2,door3,closedDoor,openDoor;

var playerLife=3;
var text;
var score=0;
var gameOver, restart;
var button,question;
var playIMG,questionImage;
var fire,acidRain,hungryBear;
var fireIMG,acidRainIMG,bearIMG;
var life1,life2,life3;
var fullHeart,emptyHeartAnimation;
var tryAgain,tryAgainIMG,retryButton,retryButtonIMG;
var congrats , congratsImage, level2,level2Image;

localStorage["HighestScore"] = 0;

function preload(){

  player_running =loadImage("images/boy.png");
  closedDoor=loadImage("images/door1.png");
  openDoor=loadImage("images/door4.png");
  doorAnimation=loadAnimation("images/door1.png","images/door2.png","images/door3.png","images/door4.png")
  playIMG=loadImage("images/playButton.png");
  questionImage=loadImage("images/Question.png");
  fireIMG=loadImage("images/fire.png");
  acidRainIMG=loadImage("images/acidRain.png");
  bearIMG=loadImage("images/bear.png");
  fullHeart=loadImage("images/heart.png");
  emptyHeartAnimation=loadAnimation("images/emptyHeart.png");
  tryAgainIMG=loadImage("images/tryAgain.png");
  retryButtonIMG=loadImage("images/retry.png");

  
}

function setup() {
  createCanvas(windowWidth-10,windowHeight-10);

  ground = createSprite(width/2,height-10,displayWidth-10);
  ground.shapeColor="brown";
  
  player = createSprite(200,670,10,10);
  player.addImage("player",player_running);
  player.scale = 0.3;

  door1= createSprite(200,200);
  door1.addImage("closed door",closedDoor);
  door1.addAnimation("opening",doorAnimation);
  door1.addAnimation("opened",openDoor);
  
  door2= createSprite(700,200);
  door2.addImage("closed door",closedDoor);
  door2.addAnimation("opening",doorAnimation);
  door2.addAnimation("opened",openDoor);

  door3= createSprite(1100,200);
  door3.addImage("closed door",closedDoor);
  door3.addAnimation("opening",doorAnimation);
  door3.addAnimation("opened",openDoor);


  invisibleGround = createSprite(width/2,ground.y,width,20);
  invisibleGround.visible = false;
  door1.visible=false;
  door2.visible=false;
  door3.visible=false;
  player.visible=false;

  button=createSprite(450,40,20,20);
  button.addImage(playIMG);
  button.scale=0.5

  question = createSprite(door2.x,35,20,20);
  question.addImage(questionImage);
  question.visible=false;

  fire=createSprite(door1.x+12,door1.y+35,door1.width,door1.height);
  fire.addImage(fireIMG);
  fire.depth=door1.depth;
  fire.depth-=1;
  fire.visible=false;


  acidRain=createSprite(door2.x+10,door2.y,door2.width,door2.height);
  acidRain.addImage(acidRainIMG);
  acidRain.depth=door2.depth;
  acidRain.depth-=1;
  acidRain.visible=false;

  hungryBear=createSprite(door3.x+12,door3.y,door3.width,door3.height);
  hungryBear.addImage(bearIMG);
  hungryBear.depth=door3.depth;
  hungryBear.depth-=1;
  hungryBear.visible=false;

  life3=createSprite(1400,50,20,20);
  life3.addImage(fullHeart);
  life3.addAnimation("empty",emptyHeartAnimation);
  life3.scale=0.4;

  life2=createSprite(1300,50,20,20);
  life2.addImage(fullHeart);
  life2.addAnimation("empty",emptyHeartAnimation);
  life2.scale=0.4;

  life1=createSprite(1200,50,20,20);
  life1.addImage(fullHeart);
  life1.addAnimation("empty",emptyHeartAnimation);
  life1.scale=0.4;

  tryAgain=createSprite(800,300,20,20);
  tryAgain.addImage(tryAgainIMG);
  tryAgain.scale=3;
  tryAgain.visible=false;
  
  retryButton=createSprite(800,450,20,20);
  retryButton.addImage(retryButtonIMG);
  retryButton.scale=0.5;
  retryButton.visible=false;
 
}

function draw() {
  
  background("lightyellow");
  
  player.collide(invisibleGround);
  
  if (gameState===PLAY && playerLife > 0 ){
    
  
   if(keyDown("UP_ARROW") ) {
      player.y+=-2;
    }
    if(keyDown("DOWN_ARROW") ) {
      player.y+=2;
    }
    if(keyDown("LEFT_ARROW") ) {
      player.x+=-2;
    }
    if(keyDown("RIGHT_ARROW") ) {
      player.x+=2;
    }
  
    if(player.isTouching(door1)){
      door1.changeAnimation("opening",doorAnimation);
      door1.changeAnimation("opened",openDoor);
    }

    if(player.isTouching(door2)){
      door2.changeAnimation("opening",doorAnimation);
      door2.changeAnimation("opened",openDoor);
    }

    if(player.isTouching(door3)){
      door3.changeAnimation("opening",doorAnimation);
      door3.changeAnimation("opened",openDoor);
    }

    if(mousePressedOver(button)){
      player.visible=true;
      door1.visible=true;
      door2.visible=true;
      door3.visible=true;
      button.visible=false;
      question.visible=true;
      fire.visible=true;
      acidRain.visible=true;
      hungryBear.visible=true;
    
    }

    if ( mousePressedOver(fire)){

      player.visible=false;
      door1.visible=false;
      door2.visible=false;
      door3.visible=false
      question.visible=false;
      fire.visible=false;
      acidRain.visible=false;
      hungryBear.visible=false;
      life1.changeAnimation("empty",emptyHeartAnimation);
      gameState=END;

    }

    if ( mousePressedOver(acidRain)){

      player.visible=false;
      door1.visible=false;
      door2.visible=false;
      door3.visible=false
      question.visible=false;
      fire.visible=false;
      acidRain.visible=false;
      hungryBear.visible=false;
      life2.changeAnimation("empty",emptyHeartAnimation);
      gameState=END;

    }

    if(mousePressedOver(hungryBear)){

      player.visible=false;
      door1.visible=false;
      door2.visible=false;
      door3.visible=false
      question.visible=false;
      fire.visible=false;
      acidRain.visible=false;
      hungryBear.visible=false;

    }

  }
  else if (gameState === END) {

    tryAgain.visible=true;
    retryButton.visible=true; 
    if(mousePressedOver(retryButton)){

      tryAgain.visible=false;
      player.visible=true;
      door1.visible=true;
      door2.visible=true;
      door3.visible=true;
      question.visible=true;
      fire.visible=true;
      acidRain.visible=true;
      hungryBear.visible=true;
      player.x=200;
      player.y=670;
      retryButton.visible=false;
      gameState=PLAY;

    }  
  }
  
  
  drawSprites();
}



