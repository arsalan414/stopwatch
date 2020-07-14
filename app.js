var min=0;
var sec=0;
var milsec=0;
var mintime = document.getElementById('min');
var sectime = document.getElementById('sec');
var milsectime = document.getElementById('milsec');
var interval;

function timer(){
    milsec++;
    milsectime.innerHTML = milsec;
    if (milsec>100){
        milsec=0;
        sec++;
    }
    if (sec<10){
        sectime.innerHTML="0"+sec;
    }
    else{
        sectime.innerHTML=sec;
    }
    if (sec>=60){
        sec=0;
        min++;
        if (min<10){
        mintime.innerHTML="0"+ min;
        }
        else{
            mintime.innerHTML= min;
        }
            
    }
        
    

}

function start(){
    interval= setInterval(timer,10);
}

function stop(){
    clearInterval(interval);
}
function reset(){
    stop();
    min = 0;
    sec = 0;
    milsec = 0;
    mintime.innerHTML = "0" + min;
    sectime.innerHTML = "0" + sec;
    milsectime.innerHTML = "0" + milsec;
}

var i=0;
function color(){
    var background=document.getElementsByClassName('time');
    var colorNames=["yellow","blue","orange"];
    background.style.backgroundColor=colorNames[i];
    i=(i+1)%colorNames.length;
}

setInterval(color,1000)