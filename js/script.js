$(document).ready(function() {
  $("#login-form").submit(function(event) {
    var email = $("#email").val();
    var password = $("#password").val();

    if(email == "someone@email.com" && password == "password") {
      $(".feedback").removeClass("fail").addClass("success").text("Login successful");
      setTimeout(function(){
        window.location = "home.html";        
      }, 1000);
    } else {
      $(".feedback").removeClass("success").addClass("fail").text("Username or password incorrect");
    }

    event.preventDefault();
  });
});
