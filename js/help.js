var help = {};
var softBack = false;

help["about"] = "<p>DigiWallet is an application that lets you bring together bank accounts across multiple services and platforms. View your accounts, transfer your money, pay someone and view your transfer progress all in one place.</p>";
help["accounts"] =  "<p>To begin using DigiWallet, you need to link your banking accounts. To link your account to DigiWallet you need to know your account name, BSB and account number. If You need help finding this information, contact your banking institution.</p>" +
                    "<p>Once an account has been linked, you can access your transaction history, transfer between your accounts and pay other people using your linked accounts.</p>";
help["tracking"] =  "<p>Sometimes when you pay someone it's not always instant. That's where payment tracking comes in.</p>" +
                    "<p>Once you've made a payment, DigiWallet will automatically track your payment. You can view how many days are left on your payment transfer.</p>";
help["payments"] =  "<p>If you have someone to pay, Payments is the place to be! Using any of your DigiWallet accounts, you can transfer money to a person or business using any of your DigiWallet accounts.</p>" +
                    "<p>Once you're ready to pay someone, you can choose from Direct transfer, PayID or Bpay. Once you're done, you can track the payment you've made.</p>";
help["reminders"] = "<p>If you have an upcoming payment you can link it Directly to DigiWallet to remind you about your payment. When it's close to your payment due date, we'll let you know with a push notification. From there you can check your balances and make sure you're on track.</p>";

$(document).ready(function() {
  $("#list-nav a").click(function(event) {
    $(".item-view h3").text($(this).text());
    var text = $("<artcile></article>").html(help[$(this).attr("id")]);
    $("nav, h2").hide();
    softBack = true;
    $(".item-view").append(text).show();
    event.preventDefault();
  });

  $(".back").click(function(event) {
    if(softBack) {
      softBack = false;
      $("nav, h2").show();
      $(".item-view p").remove();
      $(".item-view").hide();
    } else {
      window.location = "home.html";
    }
    event.preventDefault();
  });

  // $(".home").click(function(event) {
  //   window.location = "home.html";
  //   event.preventDefault();
  // });

});
