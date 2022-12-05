console.log("working")
var list = document.createElement("li")
var listlocale = document.querySelector("#main")
var highscores = JSON.parse(localStorage.getItem("Highscores"))

for (var i = 0; i < highscores.length; i++) {

    var highscoreEl = list;

    highscoreEl.text(highscores[i]);

  }