
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var subject = $('.validate-input input[name="subject"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(subject).val().trim() == ''){
            showValidate(subject);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });

    // Handle form submission and email using EmailJS
    $('.validate-form').on('submit', function (event) {
        event.preventDefault();

        var name = $('.validate-input input[name="name"]').val();
        var email = $('.validate-input input[name="email"]').val();
        var subject = $('.validate-input input[name="subject"]').val();
        var message = $('.validate-input textarea[name="message"]').val();

        // Send email using EmailJS
        emailjs.send("service_ykmkrcf", "template_ue7jx5x", {
            to_name: "Chatterbox", // Your name or recipient's name
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        }, "5-BdFRh3uW--TXJOV").then(
            function (response) {
                console.log("Email sent successfully:", response);
                // Clear form inputs after successful submission
                $('.validate-input input[name="name"]').val("");
                $('.validate-input input[name="email"]').val("");
                $('.validate-input input[name="subject"]').val("");
                $('.validate-input textarea[name="message"]').val("");

                window.location.href = "index.html";
            },
            function (error) {
                console.error("Email could not be sent:", error);
            }
        );
    });

    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);
