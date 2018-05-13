if(localStorage.success){
  var success = JSON.parse(localStorage.success);
  $(".success-text").text("You successfully " + success.text + "!");
  $("#main-nav ul li:first-child a").text(success.btn1).attr("href", success.href1);
  $("#main-nav ul li:last-child a").text(success.btn2).attr("href", success.href2);
  localStorage.removeItem("success");
} else {
  window.history.back();
}
