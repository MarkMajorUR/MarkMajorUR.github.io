function updateTime() {
  var current_time = moment().calendar();
  $("#currentDay").text(current_time);

  $(".tableRow").each(function(){
    var data_attribute2 = $(this).data("hour");
    var current_time2 = moment().format('LT');
    var split = current_time2.split(" ");
    var am_pm = split[1];
    var hour = split[0].split(":")[0];
    if (am_pm == "PM") {
      hour += 12;
    }

    // $(this) === The current element in the loop
    if (hour == data_attribute2) {
      $(this).removeClass("past future").addClass("present");
    } 
    else if (hour > data_attribute2) {
      $(this).removeClass("past present").addClass("past");
    } 
    else { 
      $(this).removeClass("present future").addClass("future");
    }

  });
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