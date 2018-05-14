$(document).ready(function() {
  var user = getUser();

  if(user.tracking.length) {
    for(var i = 0; i < user.tracking.length; i++) {
      $(".tracking")
        .clone()
        .removeClass("tracking")
        .attr('id', user.tracking[i].id)
        .find("h3").text(user.tracking[i].paymentName).parent().parent()
        .find(".recipient").text(user.tracking[i].recipient).parent().parent()
        .find(".bal").text("$" + Math.abs(parseFloat(user.tracking[i].value)).toFixed(2)).parent().parent()
        .appendTo("#list-nav ul");
    }
  } else {
    $(".guide").show();
  }

  $("#list-nav li a").click(function(event) {
    localStorage.tracking = $(this).parent().attr('id');
    window.location = "#";
    event.preventDefault();
  });
});
