/business logic
var theFormNumbers = [];

function praxy(finisher) {
  for (var index = 1; index <= finisher; index++)
    if (index % 15 === 0) {
      theFormNumbers.push("ping pong");
    } else if (index % 5 === 0) {
    theFormNumbers.push("pong");
  } else if (index % 3 === 0) {
    theFormNumbers.push("ping");
  } else {
    theFormNumbers.push(index);
  }
}

//user interface
$(document).ready(function() {
  $("#button").click(function() {
    var finisher = parseInt($("#numberInput").val());
    praxy(finisher);
    theFormNumbers.forEach(function(finisher) {
      $("#results").append("<li>" + finisher + "</li>");
    });
  });
});