$(document).ready(function() {
      $("#play").submit(function(event) {

          var userInput = perseInt($("#number").val(););
          if ((userInput % 5) && (userInput % 3) === 0) {
            document.write("pingpong");
          } else if ((userInput % 3) === 0) {
            document.write("ping");
          } else if ((userInput % 5) === 0) {
            document.write("pong");
          } else {
            document.write(userInput);
          };
          event.preventDefult();
        };
      });