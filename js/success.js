if(localStorage.success){
  $(".success-text").text("You successfully " + localStorage.success + "!");
} else {
  window.history.back();
}
