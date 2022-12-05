var timer = 0;
var timerEl = document.querySelector("#timer");
var startbutton = document.querySelector("#start")
var bodyTitle = document.querySelector("#main")
var bodyQuiz = document.querySelector("#quiz")
var quizquestion = document.querySelector("#quizQuestion")
var playerchoice = ""
var ans1 = document.querySelector("#answer1")
var ans2 = document.querySelector("#answer2")
var ans3 = document.querySelector("#answer3")
var ans4 = document.querySelector("#answer4")
var QI = 0
var playername = ""
var score = 0

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
    playQuiz()
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
        savescore()
      }
  
    }, 1000);
  }
function playQuiz() {
    populatequestions()
    
}

function populatequestions(){
        quizquestion.textContent = questions[QI].title;
        ans1.textContent = questions[QI].choices[0];
        ans2.textContent = questions[QI].choices[1];
        ans3.textContent = questions[QI].choices[2];
        ans4.textContent = questions[QI].choices[3];
    }

  startbutton.addEventListener("click", function() {
    startGame()
  })

function nextquestion(){
    if (playerchoice.textContent !== questions[QI].answer) {
        timer = timer - 10;
    }
    QI++
    if (QI < questions.length) {
    populatequestions()
    } else {
        clearInterval(setTimer)
        localStorage.setItem("Score", timer)
        savescore()

    }
}
function savescore(){
    playername = window.prompt("Input your name")
    var Highscore = {
        score: localStorage.getItem("Score"),
        player: playername.trim(),
      };
   localStorage.setItem("Highscores", JSON.stringify(Highscore));
}
  ans1.addEventListener("click", function() {
    playerchoice = ans1
    nextquestion()
  })
  ans2.addEventListener("click", function() {
    playerchoice = ans2
    nextquestion()
  })
  ans3.addEventListener("click", function() {
    playerchoice = ans3
    nextquestion()
  })
  ans4.addEventListener("click", function() {
    playerchoice = ans4
    nextquestion()
  })