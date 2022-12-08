console.log("working")

var listlocale = document.querySelector("#scoreslist")
var highscores = JSON.parse(localStorage.getItem("Highscores"))
highscores.sort((a,b) => b.score - a.score);

for (var i = 0; i < highscores.length; i++) {
    var listItem = document.createElement("li")
    listItem.innerHTML = ("Player: " + highscores[i].player + ", Score: " + highscores[i].score );
    listlocale.appendChild(listItem)
  }