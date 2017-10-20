function toMainMenu(){
  window.location.href = "mainmenu";
}

function toGame(){
  window.location.href = "game";
} 

function toTopTen(){
  window.location.href = "topten";
} 

var audio = new Audio("bensound-retrosoul.mp3");

function checkSound() {
    
    var currentSound = sessionStorage.getItem('soundStatus');
    
    console.log(currentSound);
    if (currentSound == "true") {
        // start music
        audio.play();
    } else {
        // Stop the music
        audio.pause();
    }
    
}
checkSound();

function toggleSound() {
    var currentSound = sessionStorage.getItem('soundStatus');
    if(currentSound == "true") {
        currentSound = "false";
    }
    else {
        currentSound = "true";
    }
    console.log(currentSound);
    sessionStorage.setItem('soundStatus', currentSound)

    var myElement = document.getElementById("music");
    myElement.innerHTML = "Turn Sound " + ((currentSound == "true") ? "Off" : "On &nbsp;&nbsp;"); 
    
    //(window["isSoundOn"]) ? isSoundOn = true : isSoundOn = false;
    checkSound();

}