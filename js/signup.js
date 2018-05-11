$(document).ready(function() {
  $.getScript("js/user.js");

  $('#signup input').blur(function() {
      if( !$(this).val() ) {
            $(this).addClass('warning');
      } else {
        $(this).removeClass('warning');
      }
  });

  $('#email').blur(function() {
    if(!validateEmail($(this).val())) {
      $(this).addClass('warning');
    } else {
      $(this).removeClass('warning');
    }
  });

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
      $("#signup input").filter(function() {
        if(!$(this).val()) {
          $(this).addClass('warning');
        }
      });
      if(validateEmail($("#email").val())) {
        $(this).addClass('warning');
      }
    }

    event.preventDefault();
  });

});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputs(){
  var empty = $("#signup input").filter(function() {
    return this.value === "";
  });
  if(empty.length || !validateEmail($("#email").val())) {
    return false;
  }
  return true;
}
