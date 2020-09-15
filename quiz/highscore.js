var responses = localStorage.getItem("scores");
results = JSON.parse(responses);
console.log(results);

// var answers = document.getElementById("answers");
// var questions = document.getElementById("questions");

// var question = question_choices[questionNumber];
// var container = document.createElement("div");
// container.append(document.createTextNode(question));
// container.classList.add("question");
// questions.prepend(container);

// // add answer choices  
// var current_answers = responses[questionNumber];
// for (const answer of current_answers) {
//   var li = document.createElement("li");
//   li.append(document.createTextNode(answer));
//   answers.append(li);
// }