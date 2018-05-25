var help = {};
var softBack = false;

help["about"] = "<p>DigiWallet is an application that lets you bring together bank accounts across multiple services and platforms. View your accounts, transfer your money, pay someone and view your transfer progress all in one place.</p>";
help["accounts"] =  "<p>To begin using DigiWallet, you need to link your accounts. To link your account to DigiWallet you need to know your account name, BSB and account number. If You need help finding this information, contact your banking institution.</p>" +
                    "<p>Once an account has been linked, you can access your transaction history, transfer between your accounts and pay other people using your linked accounts.</p>";

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

  $(".home").click(function(event) {
    window.location = "home.html";
    event.preventDefault();
  });

});
