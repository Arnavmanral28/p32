const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
     getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg);
    background(backgroundImg);
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJson = await response.json();
    console.log(responseJson); 
    var datetime = responseJson.datetime; 
    console.log(responseJson.datetime) ;
    var hour = datetime.slice(11,13);
    console.log(responseJson.datetime.slice(11,13));
    if(hour>=04&& hour<=06){
        bg = "sunrise1.png";

    }
    else if(hour>=04&& hour<=06){
        bg = "sunrise2.png";
    } 
    else if(hour>=06&& hour<=8){
        bg = "sunrise3.png";
    }
    else if(hour>=8&& hour<=10){
        bg = "sunrise4.png";
    }
    else if(hour>=10&& hour<=12){
        bg = "sunrise5.png";
    }
    else if(hour>=12&& hour<=16){
        bg = "sunrise6.png";
    }
    else if(hour>=16&& hour<=17){
        bg = "sunset7.png";
    }
    else if(hour>=17&& hour<=18){
        bg = "sunset8.png";
    }
    else if(hour>=18&& hour<=19){
        bg = "sunset9.png";
    }
    else if(hour>=19&& hour<=20){
        bg = "sunset10.png";
    }
    else if(hour>=20&& hour<=22){
        bg = "sunset11.png";
    }
    else if(hour>=22&& hour<=04){
        bg = "sunset12.png";
    }   
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
    
}
