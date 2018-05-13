$(document).ready(function() {
  var user = getUser();

  if(user.accounts.length) {
    for(var i = 0; i < user.accounts.length; i++) {
      $(".account")
        .clone()
        .removeClass("account")
        .attr('id', user.accounts[i].accountNumber)
        .find("h3").text(user.accounts[i].accountName).parent().parent()
        .find(".bank").text(user.accounts[i].bank).parent().parent()
        .find(".bal").text("$" + user.accounts[i].balance).parent().parent()
        .appendTo("#list-nav ul");
    }
  } else {
    $(".guide").show();
  }
});
