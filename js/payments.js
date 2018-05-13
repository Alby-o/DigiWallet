$("#main-nav a").click(function(event) {
  event.stopImmediatePropagation();
  localStorage.payment = $(this).attr('id');
  return false;
});
