//Create variables here

var dog,dogImage1, dogImage2, happyDog, database, foodS, foodStock

function preload()
{
  dogImage1=loadImage("images/dogImg.png")
  dogImage2=loadImage("images/dogImg1.png")

}

function setup() {

  database=firebase.database()

	createCanvas(500, 500);
  
  foodStock=database.ref('food')
  foodStock.on("value", readStock)

dog=createSprite(250,300,150,150)
dog.addImage(dogImage1)
dog.scale=0.15



}


function readStock(data){
  foodS=data.val() 
}

function writeStock(x){
if(x<=0){
  x=0

}
else{
  x=x-1
}


  database.ref('/').update({

  })
}



function draw() {  

  background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImage2)

}


  drawSprites();

textSize(13)
fill("black")
stroke("red")
text("Note: Press UP_ARROW Key To Feed The Dog",150,20)
}



