console.log('it works');

$(document).ready(function() {
    $('.contact_form').click(function(e) {

        console.log('clicked button');

        var name = $('.name').val();
        var email = $('.email').val();
        var message = $('.message').val();
        var statusElm = $('.status');
        statusElm.empty();

        if (email.length > 5 && email.include('@') && email.include('.')) {
            statusElm.append('<div class="message"> Email is valid </div>')
        } else {
            e.preventDefault();
            statusElm.append('<div class="message"> Email is not valid </div>')
        }

        if (name.length >= 2) {
            statusElm.append('<div class="message"> Name is valid </div>')
        } else {
            e.preventDefault();
            statusElm.append('<div class="message"> Name is not valid </div>')
        }

        if (message.length >= 20) {
            statusElm.append('<div class="message"> Message is valid </div>')
        } else {
            e.preventDefault();
            statusElm.append('<div class="message"> Message is not valid </div>')
        }
    })
});