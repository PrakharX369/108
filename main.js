var dog = 0 ;
var cat = 0;
var lion = 0;
var noise = 0;
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PK37-lFgX/model.json' , modelReady);    
}

function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if(error)
    { 
    console.log(error,"error");
    }
    else{
        console.log(results);
        red = Math.floor(Math.random()*255)+1;
        green = Math.floor(Math.random()*255)+1;
        blue = Math.floor(Math.random()*255)+1;
        document.getElementById("numbers").innerHTML = "Detected Voice "+dog+", Detected Cat "+cat+", Detected Lion "+lion+", Detected Background Noise "+noise;
        document.getElementById("detected").innerHTML = "Detected Voice Is Of - " +(results[0].label) ;
        document.getElementById("numbers").style.color = "rgb("+red+","+green+","+blue+")";
        document.getElementById("detected").style.color = "rgb("+red+","+green+","+blue+")";

        img = document.getElementById("listen");

        if(results[0].label == "Barking")
        {
            dog = dog +1;
            img.src = "shiba-dog-jump.gif";
        }
        else if(results[0].label == "Meowing")
        {
            cat = cat+1;
            img.src = "meow.gif";
        }
        else if(results[0].label == "Roar")
        {
            lion = lion+1;
            img.src = "lion-king-lion.gif";
        }
        else
        {
            noise = noise +1;
            img.src = "listen.gif";
        }
        
    }
}