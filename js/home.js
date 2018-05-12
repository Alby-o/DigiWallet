$(document).ready(async function() {
  await $.getScript("js/user.js");

  var user = getUser();

  if(user) {
    $(".welcome .subtitle").text("Welcome " + user.firstname);
  } else {
    window.location = "index.html";
  }
});
