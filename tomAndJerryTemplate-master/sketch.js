  
function preload() {
    loadImage("garden.png");
    loadImage("cat2.png");
    loadImage("mouse3.png");
    loadImage("cat4.png");
    loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    var cat, mouse;

}

function draw() {

    background(255);
    mouse.addAnimation("mouseTeasing",mouseImg3);
    if(catImg2.isTouching(mouseImg3)){
        mouse.changeAnimation("mouseLooking",mouseImg4);
        cat.changeAnimation("catSitting",catImg4);
    }
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");
}
  Text(mouseX+','+mouseY,10,45);


}
