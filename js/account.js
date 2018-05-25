$(document).ready(function() {
  var user = getUser();
  var accountNumber = localStorage.account;
  localStorage.removeItem("account");

  var account = user.accounts.filter(function(a) {return a.accountNumber == accountNumber})[0];
  if(account.accountName.length > 10){
    account.accountName = account.accountName.substring(0, 10) + "...";
  }
  $("h1 .account-name").text(account.accountName);
  $("h3").text(account.bank);
  $(".number").text(account.accountNumber);
  $(".bsb").text(account.bsb);
  $(".account-bal").text("$" + parseFloat(account.balance).toFixed(2));

  for(var i = 0; i < account.transactions.length; i++) {
    $(".transaction.template .fa").removeClass("fa-plus fa-minus");

    if(Math.sign(account.transactions[i].value) == 1) {
      $(".transaction.template .fa").addClass("fa-plus");
    } else {
      $(".transaction.template .fa").addClass("fa-minus");
    }

    $(".transaction.template").clone()
      .removeClass("template")
      .find(".trans-bal").text("$" + Math.abs(account.transactions[i].value).toFixed(2)).parent()
      .find(".description").text(account.transactions[i].description).parent()
      .appendTo("section.item-view");
  }

  $("#main-nav .payment").click(function(event) {
    localStorage.account = accountNumber;
    window.location = "payments.html";
    event.preventDefault();
  });

  $("#main-nav .remove").click(function(event) {
    user.deleteAccount(account.accountNumber);
    if(confirm('Are you sure you want to remove this account?')){
      localStorage.user = JSON.stringify(user);
      localStorage.success = JSON.stringify({
        btn1 : "Accounts",
        href1 : "accounts.html",
        btn2 : "Home",
        href2 : "home.html",
        text : "removed your account " + account.accountName
      });
      window.location = "success.html";
    }
    event.preventDefault();
  });
});
