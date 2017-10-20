document.body.onkeydown = function(event){
  if(event.keyCode == 32){
    toMainMenu();
  } else if(event.keyCode == 52){
    toggleSound();
  }
}


var spacebar = document.getElementById("spacebar");
spacebar.onclick = toMainMenu;


function TopScore(name, score, milliseconds){
  this.name = name;
  this.score = score;
  this.date = new Date(milliseconds);
  this.toString = "" + name + ",  " + score + ",  " 
      + this.date.toString();
}



var topTenList = [];

var score1 = new TopScore("John Entwhistle", 15000, 1617521);
topTenList.push(score1);
var score2 = new TopScore("Alice Cooper", 2700, 254231251);
topTenList.push(score2);
var score3 = new TopScore("Paul McCartney", 1800, 7253142);
topTenList.push(score3);
var score4 = new TopScore("Andy Summers", 3900, 17569847);
topTenList.push(score4);
var score5 = new TopScore("Ric Ocasek", 4700, 23569875);
topTenList.push(score5);
var score6 = new TopScore("Debbie Harry", 3800, 16999999);
topTenList.push(score6);
var score7 = new TopScore("Brad Delp", 999999, 14444533);
topTenList.push(score7);
var score8 = new TopScore("Phil Collins", 2500, 25345211);
topTenList.push(score8);
var score9 = new TopScore("Pete Burns", 6300, 30000000);
topTenList.push(score9);
var score10 = new TopScore("Billy Idol", 8600, 32653218);
topTenList.push(score10);


for(var i = 0; i < topTenList.length; i++){
  var myElement = document.getElementById("number" + (i+1));
    myElement.innerHTML = "Number " + (i+1) + ":   " + topTenList[i].toString;
}