$(document).ready(function() {
  $("#submit").click(function() {
    var email = $("#email").val();
    var password = $("#password").val();
    if(email == "someone@email.com" && password == "password") {
      $(".feedback").removeClass("fail").addClass("success").text("Login successful");
    } else {
      $(".feedback").removeClass("success").addClass("fail").text("Username or password incorrect");
    }
    // alert("button clicked");
  });
});
