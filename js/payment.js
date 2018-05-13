$(document).ready(function() {
  var payment = localStorage.payment.charAt(0).toUpperCase() + localStorage.payment.substr(1);

  $("h1 .payment-name").text(payment);

  var user = getUser();
  for(var i = 0; i < user.accounts.length; i++) {
    var option = $("<option></option>").text(user.accounts[i].accountName);
    $("#account").append(option);
  }
});
