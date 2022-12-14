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
var timerInterval;
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
    },
    {
        title: "Javascript is used for:",
        choices: ["The framework of the webpage", "The appearance of the webpage", "The display of the webpage",
                "The logic of the webpage"],
        answer: "The logic of the webpage",
   },
   {
    title: "Javascript needs what code to recieve input from the user:",
    choices: ["An \"If\" statement", "An \"event listener\"", "A function",
            "A variable"],
    answer: "An \"event listener\"",
  },
  {
    title: "Javascript feature with multiple variables stored within a variable is called:",
    choices: ["An object", "An array", "String",
            "A Suitcase"],
    answer: "An object",
  },
  {
    title: "In Javascript _____ is and example of a loop?",
    choices: ["If", "Else", "Var",
            "For"],
    answer: "For",
  },
  {
    title: "Why would you use a loop?",
    choices: ["To define a variable", "To read an input", "To get stuck",
            "To repeat a process"],
    answer: "To repeat a process",
  },

]

function startGame(){
    setTimer()
    QI = 0
    bodyTitle.style.display = "none";
    bodyQuiz.style.display = "block";
    playQuiz()
}

function setTimer() {
    timer = 50;
      timerInterval = setInterval(function() {
      timer--;
      timerEl.textContent = "Time: " + timer;
  
      if(timer === 0) {
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
    if (playerchoice != questions[QI].answer) {
        timer = timer - 10;
    }
    QI++
    if (QI < questions.length) {
    populatequestions()
    } else {
        savescore()
    }
}

function savescore(){
    var highscores = localStorage.getItem("Highscores")
    if (highscores !== null) {
    highscores = JSON.parse(localStorage.getItem("Highscores"))
    } else { highscores = [];
    }
    bodyQuiz.style.display = "none";
    bodyTitle.style.display = "block";
    clearInterval(timerInterval)
    playername = window.prompt("Input your name")
    var score = {
        score: timer,
        player: playername.trim(),
      };
    highscores.push(score)
   localStorage.setItem("Highscores", JSON.stringify(highscores));
}

  ans1.addEventListener("click", selectChoice)
  ans2.addEventListener("click", selectChoice)
  ans3.addEventListener("click", selectChoice)
  ans4.addEventListener("click", selectChoice)
  
  function selectChoice(event){
    playerchoice = event.target.textContent
    nextquestion()
  }