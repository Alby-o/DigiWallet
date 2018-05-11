if(localStorage.success){
  $(".success-text").text("You successfully " + localStorage.success + "!");
  localStorage.removeItem("success");
} else {
  window.history.back();
}
