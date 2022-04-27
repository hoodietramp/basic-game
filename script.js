var mainChar = document.getElementById("mainChar");
var obstacle = document.getElementById("obstacle");
var counter = 0;

function clickJump(){
    if(mainChar.classList != "charAnimation"){
        mainChar.classList.add("charAnimation");
        counter++;
    }
         setTimeout(function(){
        mainChar.classList.remove("charAnimation");
    },500);
}

var gameOver = setInterval(function(){
    var charProperty = 
    parseInt(window.getComputedStyle(mainChar).getPropertyValue("top"));
    var obsProperty = 
    parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
if(obsProperty<30 && obsProperty>0 && charProperty>=200){
    obstacle.style.animation = "none";
    obstacle.style.display = "none";
    alert("Game Over. Score: " + counter);
    }
},10);