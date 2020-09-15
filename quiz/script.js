var startBnt = document.querySelector(".start");
var time = document.getElementById("time");
var answers = document.getElementById("answers");
var secondsLeft = 90;
window.sessionStorage.setItem("question number", 0);

var questions = document.getElementById("questions");

// Time Counter event
startBnt.addEventListener("click", function(event) {
  event.preventDefault();

  if (startBnt.style.display === "none") {
    startBnt.style.display = "block";
  } else {
    startBnt.style.display = "none";
  }
  
  addQuestions(window.sessionStorage.getItem("question number"));

  setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft + " Time Left";

    // if(secondsLeft === 0) {
    //   clearInterval(timerInterval);
    //   sendMessage();
    // }

  }, 1000);


});

// Answer Question event
answers.addEventListener("click", function(event) {
  event.preventDefault();

  var originElement = event.target;
  var response = response(originElement.textContent);
  if (!response) {
    secondsLeft -= 20; 
  } else {

  }

  if (questionNumber < 5) {
    questionNumber = addQuestions(window.sessionStorage.getItem("question number"));
  } else {
    window.sessionStorage.setItem("question number", 0);
  }
});