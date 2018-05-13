$(document).ready(function() {
  var payment = localStorage.payment.charAt(0).toUpperCase() + localStorage.payment.substr(1);

  $("h1 .payment-name").text(payment);

  var user = getUser();

  for(var i = 0; i < user.accounts.length; i++) {
    var option = $("<option></option>")
      .text(user.accounts[i].accountName)
      .attr("value", user.accounts[i].accountNumber);
    $("#account").append(option);
  }

  $("#payment-form").submit(function(event) {
    var account = $("#account").val();
    var amount = -1*parseFloat($("#amount").val());
    var description = $("#description").val();


    for(var i = 0; i < user.accounts.length; i++) {
      if(user.accounts[i].accountNumber == account) {
        user.accounts[i].addTransaction(amount, description);
      }
    }

    localStorage.user = JSON.stringify(user);
    localStorage.success = JSON.stringify({
      btn1 : "Home",
      href1 : "home.html",
      btn2 : "Make Another Payment",
      href2 : "payments.html",
      text : "made a payment"
    });
    window.location = "success.html";

    event.preventDefault();
  });
});
