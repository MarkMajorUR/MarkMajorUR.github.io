var startBnt = document.querySelector(".start");
var time = document.getElementById("time");
var answers = document.getElementById("answers");
var secondsLeft = 90;
var questions = document.getElementById("questions");

window.sessionStorage.setItem("question number", 0);

// Time Counter event
startBnt.addEventListener("click", function(event) {
  event.preventDefault();

  if (startBnt.style.display === "none") {
    startBnt.style.display = "block";
  } else {
    startBnt.style.display = "none";
  }
  
  addQuestion(window.sessionStorage.getItem("question number"));

  setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft + " Time Left";

    if(secondsLeft === 0) {
      clearInterval(1000);
      submitScore(secondsLeft);
      secondsLeft = 90;
    }

  }, 1000);

});

// Answer Question event
answers.addEventListener("click", function(event) {
  event.preventDefault();

  var originElement = event.target;
  var response = checkAnswer(originElement.textContent);
  if (!response) {
    secondsLeft -= 20; 
  } else {

  }

  var questionNumber = window.sessionStorage.getItem("question number");
  if (questionNumber < 5) {
    removeQuestion();
    questionNumber = addQuestion(questionNumber);
  } else {
    window.sessionStorage.setItem("question number", 0);
    submitScore(secondsLeft);
    secondsLeft = 90;
  }
});