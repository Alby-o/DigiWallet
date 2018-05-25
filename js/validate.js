function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputs() {
  var empty = $("form input, form select").filter(function() {
    return this.value === "";
  });
  if(empty.length || ($("#email").length && !validateEmail($("#email").val()))) {
    return false;
  }
  return true;
}

function addWarnings() {
  $("form input, form select").filter(function() {
    if(!$(this).val()) {
      $(this).addClass('warning');
    }
  });
  if(validateEmail($("#email").val())) {
    $(this).addClass('warning');
  }
}


$('form input').blur(function() {
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

$(".feedback").click(function() {
  $(this).removeClass("fail success");
});

function showGuide(text) {
  $(".feedback").removeClass("fail success")
    .addClass("fail")
    .text(text)
    .fadeIn(100)
    .delay(2000).fadeOut(1000);
}
