$(document).ready(function() {
  $("#login-form").submit(function(event) {
    var email = $("#email").val().toLowerCase();
    var password = $("#password").val().toLowerCase();

    if(email == "someone@email.com" && password == "password") {
      $(".feedback").removeClass("fail success").addClass("success").text("Login successful");
      setTimeout(function(){
        window.location = "home.html";
      }, 1000);
    } else {
      $(".feedback").removeClass("fail success").addClass("fail").text("Username or password incorrect");
    }

    event.preventDefault();
  });

  $(".feedback").click(function() {
    $(this).css("opacity", 0);
  });
});
