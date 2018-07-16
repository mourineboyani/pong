// BUSINESS LOGIC
function output(number) {
  for (var index = 1; index <= number; index++) {
    if (((index % 5) === 0) && ((index % 3) === 0)) {
      $("#results").append("<li>pingpong</li>");
    } else if ((index % 5) === 0) {
      $("#results").append("<li>pong</li>");
    } else if ((index % 3) === 0) {
      $("#results").append("<li>ping</li>");
    } else {
      $("#results").append("<li>" + index + "</li>");
    }
  }
  i = i += 1;
}
// USER INTERFACE
$(document).ready(function() {
  $("#btnGamer").click(function(event) {
    event.preventDefault();
    var number = parseInt($("#input-number").val());
    output(number);
    $("#input-number").val("");
  })
})