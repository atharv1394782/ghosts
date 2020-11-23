var ghost_animation , ghost_animations;

function preload() {
  ghost_animation = loadAnimation("ghost1.png","ghost2.png","ghost3.png");
}

function setup(){
  createCanvas(600,600);
  ghost_animations = createSprite(300,100,50,50);
  ghost_animations.addAnimation("ghost",ghost_animation);
}

function draw(){
background(215);
drawSprites()
}