/* global $*/
$(function(){
    $('#submit').click(function(e){
        e.preventDefault();
        $.ajax({
              url: "https://formspree.io/alinabezbabnaya@gmail.com", 
            method: "POST",
    data: {
        name: $('#name').val(),
        email: $('#email').val(),
        comments: $('#comments').val(),
        telephone: $('#telephone').val(),
           
    },
    dataType: "json"
        }).done(function(){
            $('form').html('<h1>Thank you for contanting me!</h1>');
        }).fail(function(xhr){
            $('body').append('Sorry, error occured'+ xhr.responseText);
        });
});
});