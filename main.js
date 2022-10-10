x = 0;
y = 0;

draw_circle = "";
draw_rectangle ="";
draw_cone ="";

var SpeechRecognition = window.webkitSpeechRecognition;
var  Recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "system is listening please speak";
    Recognition.start();
}

Recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    
    document.getElementById("status").innerHTML = "The speech recogation: " + content;
     if(content == "circle")
     {
         x = Math.floor(Math.random() * 900);
         y = Math.floor(Math.random() * 600);
         document.getElementById('status').innerHTML = "started drawing circle";
        draw_circle = "set";
     }

     if(content == "rectangle")
     {
         x = Math.floor(Math.random() * 900);
         y = Math.floor(Math.random() * 600);
         document.getElementById('status').innerHTML = "started drawing rectangle";
         draw_rectangle = "set";
     }

     if(content == "cone")
     {
         x = Math.floor(Math.random() * 900);
         y = Math.floor(Math.random() * 600);
         document.getElementById('status').innerHTML = "started drawing cone";
         draw_rectangle = "set";
     }
}

function setup()
{
    canvas = createCanvas(900,600);
}

function draw()
{
    if(draw_circle == "set")
    {
        circle(x, y, 30);
        document.getElementById("status").innerHTML = "circle is drawn";
        draw_circle = "" 
    }

    if(draw_rectangle == "set")
    {
        rect(x, y, 60, 30);
        document.getElementById("status").innerHTML = "rectangle is drawn";
        draw_rectangle = "" 
    }
}