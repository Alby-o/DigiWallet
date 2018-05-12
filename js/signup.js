$(document).ready(function() {
  $.getScript("js/user.js");
  $.getScript("js/validate.js");

  $("#signup").submit(function(event) {
    if(validateInputs()) {
      var firstname = $("#firstname").val();
      var surname = $("#surname").val();
      var email = $("#email").val();
      var password = $("#password").val();

      var user = new User(firstname, surname, email, password);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("success", "signed up");
      window.location = "success.html";
    } else {
      addWarnings();
    }

    event.preventDefault();
  });

});
