$(document).ready(function() {
  var trackingId = localStorage.tracking;

  var user = getUser();

  for(var i = 0; i < user.tracking.length; i++) {
    if(user.tracking[i].id == trackingId) {
      var tracking = user.tracking[i];
      break;
    }
  }

  if(tracking.paymentName.length > 10){
    tracking.paymentName = tracking.paymentName.substring(0, 10) + "...";
  }

  var progress = (1/tracking.estimatedTime) * 100;

  $(".progress-bar").css("width", progress + "%");

  $(".payment-name").text(tracking.paymentName);

  var account = user.accounts.filter(function(a) {return a.accountNumber == tracking.accountName})[0];
  $(".account-name").text(account.accountName);
  $(".recipient").text(tracking.recipient);
  $(".bal").text("$" + Math.abs(parseFloat(tracking.value)).toFixed(2))

  $(".date").text(tracking.date);
  $(".time").text(tracking.estimatedTime + " days");


  console.log(tracking);
});
