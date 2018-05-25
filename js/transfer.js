$(document).ready(function() {
  var user = getUser();

  console.log("loaded");

  for(var i = 0; i < user.accounts.length; i++) {
    var option = $("<option></option>")
      .text(user.accounts[i].accountName)
      .attr("value", user.accounts[i].accountNumber);
    $(".account-list").append(option);
  }

  $("#to, #from").change(function() {
    var from = $("#from").val();
    var to = $("#to").val();
    if(from != to) {
      $("#to, #from").removeClass("warning");
    }
  });


  $("#transfer-form").submit(function(event) {
    var from = $("#from").val();
    var to = $("#to").val();
    var amount = parseFloat($("#amount").val());
    var description = $("#description").val();

    if(!validateInputs()) {
      addWarnings();
      $(".feedback").removeClass("fail success").addClass("fail").text("Please fill in all details");
      return false;
    }

    if(from == to) {
      $(".feedback").removeClass("fail success").addClass("fail").text("Cannot transfer to the same account");
      $("#to, #from").addClass("warning");
      return false;
    }

    for(var i = 0; i < user.accounts.length; i++) {
      if(user.accounts[i].accountNumber == from) {
        user.accounts[i].addTransaction(-1*amount, "Transfer: " + description);
      } else if(user.accounts[i].accountNumber == to) {
        user.accounts[i].addTransaction(amount, "Transfer: " + description);
      }
    }

    localStorage.removeItem("account");

    localStorage.user = JSON.stringify(user);
    localStorage.success = JSON.stringify({
      btn1 : "Home",
      href1 : "home.html",
      btn2 : "Accounts",
      href2 : "accounts.html",
      text : "transferred between accounts"
    });
    window.location = "success.html";

    event.preventDefault();
  });
});
