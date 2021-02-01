var player, playerFall, playerStil, playerJump, playerRun, playerLand,playerRunLeft, bg, pathimg, b1I, b2I, b3I, b4I, b5I, b6I, bottle, GameOver, Pluto, star,
t1, t1C, t2, t2C, t3, t3C, t5, t5C, Start, path123, gameState = 0;
var building= []
var tree= []


function preload(){
  playerStill = loadAnimation( "Images/g.png");
  playerRun = loadAnimation("Images/g1.png", "Images/g2.png");
  playerRunLeft = loadAnimation("Images/g1(f).png", "Images/g2(f).png");
  playerJump = loadAnimation("Images/g6.png", "Images/g7.png", "Images/g8.png");
  //playerLand = loadAnimation("Images/g7.png", "Images/g8.png");
  playerFall = loadAnimation("Images/g9.png", "Images/g10.png" );
  bg = loadImage("Images/backimg.png");
  pathimg = loadImage("Images/path.png");
  b1I = loadImage("Images/b1C.png");
  b2I = loadImage("Images/b2C.png");
  b3I = loadImage("Images/b3C.png");
  b4I = loadImage("Images/b4C.png");
  b5I = loadImage("Images/b5C.png");
  b6I = loadImage("Images/b6C.png");
  b7I = loadImage("Images/b1C.png");
  bottle = loadImage("Images/bottle.png")
  GameOver = loadImage("Images/GameOver.png");
  Pluto = loadImage("Images/Pluto.png");
  star = loadImage("Images/star.png");
  t1 = loadImage("Images/t1.png");
  t1l = loadImage("Images/t1C.png");
  t2 = loadImage("Images/t2.png");
  t2l = loadImage("Images/t2C.png");
  t3 = loadImage("Images/t3.png");
  t3l = loadImage("Images/t3C.png");
  t5 = loadImage("Images/t5.png");
  t5l = loadImage("Images/t5C.png");
  Start = loadImage("Images/Start.png");
  path123 = loadImage("Images/path123.png");

}

function setup() { 
  createCanvas(800,800);
  gameState = 0;  
  player= createSprite(200, 200, 40, 40);
  player.scale = 0.5;
  player.addAnimation("playerStill", playerStill);
  player.addAnimation("playerRun", playerRun);
  player.addAnimation("playerJump", playerJump);
  //player.addAnimation("playerLand", playerLand);
  player.addAnimation("playerFall", playerFall);
  player.addAnimation("playerRunLeft", playerRunLeft);
 
  
  
  
}

function draw() {
 
  switch(gameState){
    case 0: 
    background(bg); 
    textSize(30);
    textFont("Times New Roman");
    fill("turquoise")
    text("Click to SPACE to start your journey!",150,400);
    
    if (keyDown("space")){
      gameState = 1;   
    }

    break;
    case 1: 
    
    background(bg); 
  
    path = createSprite(400,400,50,800 ); 
  path.scale = 2.5;
  
  path.addImage(pathimg);

  path2 = createSprite(400,400,40,40);
  path2.scale = 2.5;
  path2.addImage(path123);

  b1C = createSprite(50,30);
  b1C.addImage(b1I);

  b2C = createSprite(750,30);
  b2C.addImage(b2I);
  
  b3C = createSprite(150,30);
  b3C.addImage(b3I);

  b2C1 = createSprite(250,30);
  b2C1.addImage(b2I);

  b3C1 = createSprite(650,30);
  b3C1.addImage(b3I);

  b1C1 = createSprite(550,30);
  b1C1.addImage(b1I);

  b1C2 = createSprite(550,505);
  b1C2.addImage(b1I);

  b2C2 = createSprite(750,505);
  b2C2.addImage(b2I);

  b3C2 = createSprite(650,505);
  b3C2.addImage(b3I);
//building 3 
  b4C = createSprite(650,200);
  b4C.addImage(b4I);
//building 1 
  b5C = createSprite(170,200);
  b5C.addImage(b5I);
// building 2
  b6C = createSprite(650,650);
  b6C.addImage(b6I);


  t1C = createSprite(34,545);
  t1C.addImage(t1l);

  t2C = createSprite(120,545);
  t2C.addImage(t2l);
  t2C.scale = 0.8

  t3C = createSprite(210,550);
  t3C.addImage(t3l);

  t1C2 = createSprite(305,545);
  t1C2.addImage(t1l);

  t5C = createSprite(30,625);
  
  t5C.addImage(t5l);
  t5C.scale = 0.5;

  t5C2= createSprite(305,545);
  t5C2.addImage(t5l)

  t5C2.addImage(t5l);
  t5C2.scale = 0.5;

  bottle = createSprite(); 

    if (keyDown(UP_ARROW)){
      player.changeAnimation("playerJump");
      player.velocityY = -3;     
    } 
  
   // else if (keyDown(DOWN_ARROW)){
      //player.changeAnimation("playerLand")};

    else if (keyDown(RIGHT_ARROW)){
      player.changeAnimation("playerRun");
      player.x = player.x+3;
      
    }
    else if (keyDown(LEFT_ARROW)){
      player.changeAnimation("playerRunLeft");
      player.x = player.x-3;
    }
    
    else {
      player.changeAnimation("playerStill")
      player.velocityY = 0;
      player.collide(path);
    }
  
    if (mousePressedOver(b5C)){
      path2.destroy();
    b6C.destroy();
    b5C.destroy();
    b4C.destroy();
    b3C.destroy();
    b2C.destroy();
    b1C.destroy();
    gameState = 2; 
    }
    
    else if (mousePressedOver(b4C)){
      gameState = 2; 
    }
    
    else if (mousePressedOver(b6C)){
      gameState = 2; 
    }

    

    drawSprites();
   
    break; 
    case 2:
    clear();
    background(bg); 
    drawSprites();
    var block1, block2, block3, block4, block5, block6; 

    block1 = createSprite(10,177,100,20);


    textSize(20);
  text("X: "+ mouseX+" Y "+mouseY, 400,100);

    break;
    case 3:
    
    break;
    case 4:
    
    break; 


    
  


  

 
  

  

 
  
    

    
  }

  textSize(20);
  text("X: "+ mouseX+" Y "+mouseY, 200,100);
  


  

 
  

  

 
}