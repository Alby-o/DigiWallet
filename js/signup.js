$(document).ready(function() {

  $("#signup").submit(function(event) {
    if(validateInputs()) {
      var firstname = $("#firstname").val();
      var surname = $("#surname").val();
      var email = $("#email").val();
      var password = $("#password").val();

      var user = new User(firstname, surname, email, password);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.success = JSON.stringify({
        btn1 : "Home",
        href1 : "index.html",
        btn2 : "Login",
        href2 : "login.html",
        text : "signed up"
      });
      window.location = "success.html";
    } else {
      addWarnings();
    }

    event.preventDefault();
  });

});
