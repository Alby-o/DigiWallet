$(document).ready(function() {

  $("#login-form").submit(function(event) {
    var email = $("#email").val();
    var password = $("#password").val();

    var user = getUser();

    if(!validateInputs()) {
      addWarnings();
      showGuide("Please fill in all details");
      return false;
    }

    if(user && email.toLowerCase() == user.email.toLowerCase() && password == user.password) {
      // $(".feedback").removeClass("fail success").addClass("success").text("Login successful");
      setTimeout(function(){
        window.location = "home.html";
      }, 1000);
    } else {
      showGuide("Username or password incorrect");
    }

    event.preventDefault();
  });
});
