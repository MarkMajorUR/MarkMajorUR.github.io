// returns if a question was answered correctly or not
function checkAnswer (answer) {
  var questions = {"What is your name?": "Author King of the Britons",
                   "What is your quest?": "To seek the Holy Grail",
                   "What is your favourite colour?": "Blue",
                   "What is the air speed velocity of an unladen swallow?": "African or European Swallow?",
                   "Which Movie directed by Terry Gilliam are these questions a reference to?": "Monty Python and the Holy Grail"
                  };
  var question = document.querySelector(".question");
  var correct_answer = questions[question.textContent];
  if (correct_answer == answer) {
    return true;
  }
  return false;
}

function removeQuestion() {
  var questions = document.querySelector(".question");
  var answers = document.getElementById("answers");
  questions.remove();
  answers.innerHTML = "";
}

// adds questions and answer choices
function addQuestion (questionNumber) {
  var answers = document.getElementById("answers");
  var questions = document.getElementById("questions");

  var question_choices = ["What is your name?", "What is your quest?", "What is your favourite colour?", "What is the air speed velocity of an unladen swallow?", "Which Movie directed by Terry Gilliam are these questions a reference to?"];

  // answer choices
  var responses = [["My name is Sir Gawain of Camelot", "My name is Sir Bedivere of Camelot", "My name is Sir Lancelot of Camelot", "Author King of the Britons"],
  ["To replace the Holy Hand Grenade of Antioch", "To seek the Holy Grail", "to acquire a shrubbery for the the knight who say Ni", "To defeat the dastardly Frenchmen"],
  ["Cyan", "Magenta", "Yellow", "Blue"],
  ["343 m/s", "African or European Swallow?", "299,792,458 m/s", "9.8 m/s"],
  ["Time Bandits", "Monty Python's and the Life of Brian", "Monty Python and the Holy Grail", "Brazil"]];
  
  // add questions
  var question = question_choices[questionNumber];
  var container = document.createElement("div");
  container.append(document.createTextNode(question));
  container.classList.add("question");
  questions.prepend(container);

  // add answer choices  
  var current_answers = responses[questionNumber];
  for (const answer of current_answers) {
    var li = document.createElement("li");
    li.append(document.createTextNode(answer));
    answers.append(li);
  }

  var current_question_number = window.sessionStorage.getItem("question number");
  current_question_number++;
  window.sessionStorage.setItem("question number", current_question_number);
}

// submits a score
function submitScore(score) {
  document.querySelector(".quiz").classList.toggle("hidden");
  document.querySelector(".score").classList.toggle("hidden");
  var name = document.querySelector("#name");
  var submit = document.querySelector("#submit-button");

  // score submission event
  submit.addEventListener("click", function(event){
    event.preventDefault();
    var scores = localStorage.getItem("scores");
    var new_score = [name.value.trim(), score];
    var new_score_string = JSON.stringify(new_score);
    console.log(new_score_string);

    // Prevents addition of null to local storage string
    if (scores !== "" && scores !== null) {
      scores += new_score+",";
      localStorage.setItem("scores", scores);
    } else {
      localStorage.setItem("scores", new_score+",");
    }
  });
}
