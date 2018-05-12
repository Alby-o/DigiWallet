$(document).ready(function() {
  $.getScript("js/user.js");
  $.getScript("js/validate.js");

  $("#login-form").submit(function(event) {
    var email = $("#email").val();
    var password = $("#password").val();

    var user = getUser();

    if(!validateInputs()) {
      addWarnings();
      $(".feedback").removeClass("fail success").addClass("fail").text("Please fill in all details");
      return false;
    }

    if(user && email.toLowerCase() == user.email.toLowerCase() && password == user.password) {
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
    $(this).removeClass("fail success");
  });
});
