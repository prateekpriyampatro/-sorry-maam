//Create variables here
var dog,database,foodS,foodStock;
function preload()
{
  //load images here
  var dogImage = loadImage(" images/dogImg.png");
  var dog1Image = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,200,50,50);
  dog.addImage("dogImg");
  database = firbase.database;
  foodStock = database.ref('food');
  foodStock.on("value", readStock);

}


function draw() {  
  Background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dog1Image");
  
  drawSprites();
  //add styles here
  textSize(50);
  fill ("red");
  stroke ("red");
  text("FOOD STOCK :" + foodStock);
   }
}
function readStock(data){
food = data.val();
}
function writeStock(x){
  database.ref("/")({
    food:x
  })
}


