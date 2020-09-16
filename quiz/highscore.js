var responses = localStorage.getItem("scores");
var results = responses.split(",");
// remove left over blank item from conversion
results.pop();

var scores = document.getElementById("scores");

for (var n = 0; n < results.length; n+=2) {
  var li = document.createElement('li');
  li.append(document.createTextNode(results[n]+": "+results[n+1]));
  li.classList.add("list-group-item");
  scores.append(li);
}

// reset high scores
var reset = document.querySelector("#reset");
reset.addEventListener("click", function(event){
  event.preventDefault();
  
  var scores = localStorage.getItem("scores");
  localStorage.clear();
});