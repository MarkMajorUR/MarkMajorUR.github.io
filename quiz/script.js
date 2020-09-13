var startBnt = document.querySelector(".start");
var time = document.getElementById("time");
var answers = document.getElementById("answers");
var questions = document.getElementById("questions");

var secondsLeft = 90;
var count = localStorage.getItem("score");

// returns if a question was answered correctly
function response (answer) {
  var questions = {"What is your name?": "Author King of the Britons",
                   "What is your quest?": "To seek the Holy Grail",
                   "What is your favourite colour?": "blue",
                   "What is the air speed velocity of an unladen swallow": "african or european swallow",
                   "Which Montey Python Movie is this from": "Montey Python and the Holy Grail"
                  };
  var question = document.querySelector(".question")[0].textContent;
  var correct_answer = question[question];
  if (correct_answer == answer) {
    return true;
  }
  return false;
}

// Time Counter
startBnt.addEventListener("click", function(event) {
  event.preventDefault();

  if (startBnt.style.display === "none") {
    startBnt.style.display = "block";
  } else {
    startBnt.style.display = "none";
  }
  
  // add first question
  var question = document.createElement("div");
  question.append(document.createTextNode("What is your name?"));
  question.classList.add("question");
  questions.prepend(question);

  // add first answer choices
  var responses = ["My name is Sir Gawain of Camelot", "My name is Sir Bedivere of Camelot", "My name is Sir Lancelot of Camelot", "Author King of the Britons"]
  for (const answer of responses) {
    var li = document.createElement("li");
    li.append(document.createTextNode(answer));
    answers.append(li);
  }

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

  var response = response(event.target);
  if (!responses) {
    secondsLeft -= 20; 
  }


});