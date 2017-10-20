document.body.onkeydown = function(event){
  if(event.keyCode == 49){
    toGame();
  } else if(event.keyCode == 51){
    toTopTen();
  } else if(event.keyCode == 52){
    toggleSound();
  }
}

var game = document.getElementById("toGame");
game.onclick = toGame;

var topten = document.getElementById("toTopTen");
topten.onclick = toTopTen;

var music = document.getElementById("music");
music.onclick = (function(){
  toggleSound();
});