// returns if a question was answered correctly
function response (answer) {
  var questions = {"What is your name?": "Author King of the Britons",
                   "What is your quest?": "To seek the Holy Grail",
                   "What is your favourite colour?": "Blue",
                   "What is the air speed velocity of an unladen swallow?": "African or European Swallow?",
                   "Which Movie directed by Terry Gilliam is this from?": "Montey Python and the Holy Grail"
                  };
  var question = document.querySelector(".question")[0].textContent;
  var correct_answer = questions[question];
  if (correct_answer == answer) {
    return true;
  }
  return false;
}

function addQuestions (questionNumber) {
  // add first question
  var question = document.createElement("div");
  question.append(document.createTextNode("What is your name?"));
  question.classList.add("question");
  questions.prepend(question);

  // add first answer choices
  var responses = [["My name is Sir Gawain of Camelot", "My name is Sir Bedivere of Camelot", "My name is Sir Lancelot of Camelot", "Author King of the Britons"],
  ["To replace the Holy Hand Grenade of Antioch", "To seek the Holy Grail", "to acquire a shrubbery for the the knight who say Ni", "To defeat the dastardly Frenchmen"],
  ["Cyan", "Magenta", "Yellow", "Blue"],
  ["343 m/s", "African or European Swallow?", "299,792,458 m/s", "9.8 m/s"],
  ["Time Bandits", "Monty Python's and the Life of Brian", "Montey Python and the Holy Grail", "Brazil"]]
  
  for (const answer of responses[questionNumber]) {
    var li = document.createElement("li");
    li.append(document.createTextNode(answer));
    answers.append(li);
  }

  return questionNumber++;
}

