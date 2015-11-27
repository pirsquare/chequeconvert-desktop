var $ = require('jquery');
var chequeconvert = require('chequeconvert');

function init() {
  $("body").on("click", ".row-field button", function() {
    var amountField = $(".row-field input[name='amount']");
    var convertedField = $(".converted p");
    var amount = amountField.val();

    try {
      convertedField.text(chequeconvert(amount));
    } catch (e) {
      convertedField.text(e);
    }
  });
}

$(document).ready(function() {
  init();
});
