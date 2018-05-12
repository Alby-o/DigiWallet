$(document).ready(async function() {
  var user = getUser();

  if(user) {
    $(".welcome .subtitle").text("Welcome " + user.firstname);
  } else {
    window.location = "index.html";
  }
});
