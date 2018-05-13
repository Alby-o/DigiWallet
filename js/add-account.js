$(document).ready(function() {
  $("#add-account-form").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var number = $("#number").val();
    var bsb = $("#bsb").val();

    var user = getUser();

    if(!validateInputs()) {
      addWarnings();
      return false;
    }

    try {
      user.addAccount(name, number, bsb);
      localStorage.user = JSON.stringify(user);
      localStorage.success = JSON.stringify({
        btn1 : "Accounts",
        href1 : "accounts.html",
        btn2 : "Home",
        href2 : "home.html",
        text : "added an account"
      });
      window.location = "success.html";

    } catch (e) {
      $(".feedback").removeClass("fail success").addClass("fail").text("Account number already added");
    }

  });
});
