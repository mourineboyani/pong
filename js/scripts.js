// BUSINESS LOGIC
var output = function(number) {
  var array = [];
  for (var index = 1; index <= number; index++) {
    if ((index % 15) === 0) {
      array.push("Ping Pong");
    } else if ((index % 5) === 0) {
      array.push("Pong");
    } else if ((index % 3) === 0) {
      array.push("Ping");
    } else
      array.push(index);
  }
  console.log(index);
  return array;
};

// USER INTERFACE
$(document).ready(function() {
  $("form#game").submit(function(event) {
    $("#results").empty();


    var number = parseInt($("input#numeral").val());
    var array = output(number);
    array.forEach(function(aftermath) {
      $("#results").append("<li>" + aftermath + "</li>");
      event.preventDefault();
    });

  });
});
$('[data-text]').on('keyup', function() {
  $(this).attr('data-text', $(this).text());
});