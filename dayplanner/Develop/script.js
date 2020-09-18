function updateTime() {
  var current_time = moment().calendar();
  $("#currentDay").text(current_time);
}

$(document).ready(function() {

  $(".save-btn").click(function(event) {
    event.preventDefault();

    var data_attribute = $(this).children().data("time");
    var form = $("#"+ data_attribute +"Message");
    var value = form.val();
    localStorage.setItem(data_attribute, value);
  });

  updateTime();
  setInterval(function () {
    updateTime();
  }, 10000);

});