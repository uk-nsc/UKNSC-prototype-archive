/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


// Show/hide programme change input on policy-edit pageTitle
$(document).ready(function() {
   $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'change-yes') {
            $('#change-input').show();
       }

       else {
            $('#change-input').hide();
       }
   });
});
