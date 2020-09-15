var startBnt = document.querySelector(".start");
var time = document.getElementById("time");
var answers = document.getElementById("answers");
var questions = document.getElementById("questions");

var secondsLeft = 90;
var questionNumber = 0;
var count = localStorage.getItem("score");

// Time Counter
startBnt.addEventListener("click", function(event) {
  event.preventDefault();

  if (startBnt.style.display === "none") {
    startBnt.style.display = "block";
  } else {
    startBnt.style.display = "none";
  }
  
  var questionNumber = addQuestions(questionNumber);

  setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft + " Time Left";

    // if(secondsLeft === 0) {
    //   clearInterval(timerInterval);
    //   sendMessage();
    // }

  }, 1000);


});

// Answer Question
answers.addEventListener("click", function(event) {
  event.preventDefault();

  var originElement = event.target;
  var response = response(originElement.textContent);
  if (!responses) {
    secondsLeft -= 20; 
  } else {

  }

  if (questionNumber < 5) {
    questionNumber = addQuestions(questionNumber);
  }
});