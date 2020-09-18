$(document).ready(function() {

  $(".save-btn").click(function(event) {
    event.preventDefault();
    // Review this
    var data_attribute = $(this).children().data("time");
    var form = $("#"+ data_attribute +"Message");
    var value = form.val();
    localStorage.setItem(data_attribute, value);
    console.log(localStorage.getItem(data_attribute));

    // moment.js for time sync
    // store the values from text boxes in local storage
    // color code schedule with past, present, and future

  });



















});