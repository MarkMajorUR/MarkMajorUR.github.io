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