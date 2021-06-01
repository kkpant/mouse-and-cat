var garden,garden_img;
var cat,cat_img,cat_img1,cat_img2,cate_img3;
var mouse,mouse_img,mouse_img1,mouse_img2,mouse_img3;

function preload() {
    //load the images here
    garden_img = loadImage("garden.png");
    cat_img = loadImage("cat1.png");
    cat_img1 = loadAnimation("cat2.png","cat3.png");
    cat_img2 = loadImage("cat4.png");
    mouse_img = loadImage("mouse1.png");
    mouse_img1 = loadAnimation("mouse2.png","mouse3.png");
    mouse_img2 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     garden = createSprite(500,400,1000,800);
     garden.addImage(garden_img);                                                                                                                               
    
     cat = createSprite(730,715,50,50);
     cat.addImage(cat_img);
     cat.scale = 0.5;

     mouse = createSprite(230,715,50,50);
     mouse.addImage(mouse_img2);
     mouse.scale = 0.5; 


                 
}

function draw() {

    background(180);
    //Write condition here to evalute if tom and jerry collide
  
    
     
     if(cat.x - mouse.x <(cat.width - mouse.width)/2){
         cat.addImage(cat_img3);
         mouse.addImage(mouse_img3);

     }

     




    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

     if(keyDown === LEFT_ARROW){
         mouse.velocityX = 5;
         

     }

     if(mouse.x === 450){
         mouse.velocity = 0;
         mouse.addAnimation(mouse_img1);

     }




     
     if(keyDown === RIGHT_ARROW){
         cat.velocityX = -5;
         

     }

     if(cat.x === 650){
         cat.velocity = 0;
         cat.addAnimation(cat_img1);

     }
}
