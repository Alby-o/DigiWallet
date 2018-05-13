$(document).ready(function() {
  $("#add-recipient-form").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();

    var user = getUser();

    if(!validateInputs()) {
      addWarnings();
      return false;
    }

    user.addRecipient(name);
    localStorage.user = JSON.stringify(user);
    localStorage.recipient = name;
    window.location = "payment.html";
  });
});
