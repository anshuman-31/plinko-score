const Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;
var particles =[];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var world,engine;
var score=0;
var particle=null;
var turn=0;
gamestate=play;
gamestate=end;
function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  text("SCORE:",200,200);
  engine = Engine.create();
  world = engine.world;
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }
if(particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if(particle.body.poaition.x < 300){
      score=score+500;
      particle=null;
      if(count>=5) gameState ="end";
    }
  }
}
   

   
}
function draw() {
  background(0);  
  Engine.update(engine);
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }

  
  drawSprites();
}
function mousePressed(){
  if(gamestate!=="end"){
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}