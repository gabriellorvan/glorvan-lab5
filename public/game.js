document.body.onkeydown = function(event){
  if(event.keyCode == 32){
    toMainMenu();
  } else if(event.keyCode == 52){
    toggleSound();
  }
}

var spacebar = document.getElementById("spacebar");
spacebar.onclick = toMainMenu;
checkSound();