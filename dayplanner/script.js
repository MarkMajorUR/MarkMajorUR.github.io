function updateTime() {
  var current_time = moment().format("dddd, MMMM Do");
  $("#currentDay").text(current_time);

  $(".tableRow").each(function(){
    var data_attribute2 = $(this).data("hour");
    var current_time2 = moment().format('LT');
    var split = current_time2.split(" ");
    var am_pm = split[1];
    var hour = split[0].split(":")[0];
    if (am_pm == "PM") {
      hour = parseInt(hour, 10)+12;
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
    var form = $("#" + data_attribute);
    var value = form.val();
    localStorage.setItem(data_attribute, value);
  });

  updateTime();
  setInterval(function () {
    updateTime();
  }, 10000);

  $(".form-control").each(function(){
    var id = $(this).attr('id');
    $(this).val(localStorage.getItem(id));
  });

});