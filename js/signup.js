$(document).ready(function() {
  $.getScript("js/user.js", function() {

  });

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

});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
