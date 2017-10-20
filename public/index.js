function fade() {
    var fade = document.getElementById("spacebar");
    var op = 1;
      var timer1 = setInterval(function () {
        if (op <= 0){
          clearInterval(timer1);
          var timer2 = setInterval(function () {
            if (op >= 1){
              clearInterval(timer2);
              //for whatever reason, this refuses to let me recur; I have gotten three separate errors
            }
            fade.style.opacity = op;
            fade.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += 0.1;
          }, 100);
        }
        fade.style.opacity = op;
        fade.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= 0.1;
    }, 100);
}

document.body.onkeydown = function(event){
  if(event.keyCode == 32){
    toMainMenu();
  }
}

var spacebar = document.getElementById("spacebar");
spacebar.onclick = toMainMenu;

//for(var i = 0; i < 100; i++){
  fade();
//}