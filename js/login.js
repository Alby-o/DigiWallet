$(document).ready(function() {
  $.getScript("js/user.js");

  $("#login-form").submit(function(event) {
    var email = $("#email").val().toLowerCase();
    var password = $("#password").val().toLowerCase();

    var user = JSON.parse(localStorage.getItem('user'));

    if(email == user.email && password == user.password) {
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
