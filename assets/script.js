var timer = 0;
var timerEl = document.querySelector("#timer");
var startbutton = document.querySelector("#start")
var bodyTitle = document.querySelector("#main")
var bodyQuiz = document.querySelector("#quiz")
var questions = [
    {
        title: "Commonly used data types do not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "Html stands for:",
        choices: ["Hypertext markup language", "High-tech machine language", "Hyper transfer mobile linking",
                  "Hired trained machine labor"],
        answer: "Hypertext markup language",
    }
]

function startGame(){
    setTimer()
    bodyTitle.style.display = "none";
    bodyQuiz.style.display = "block";
}

function setTimer() {
    timer = 60;
    var timerInterval = setInterval(function() {
      timer--;
      timerEl.textContent = "Time: " + timer;
  
      if(timer === 0) {
        clearInterval(timerInterval);
        window.alert("Game Over")
        body.style.display = "block";
      }
  
    }, 1000);
  }

  startbutton.addEventListener("click", function() {
    startGame()
  })