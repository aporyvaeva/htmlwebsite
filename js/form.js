/* global $*/
(function(){
$(function(){
    $('#submit').click(function(e){
        if($('#name').val().match(/[A-ZА-ЯЁ]+/i)&&$('#email').val().match(/^.+@\w+\.\w+$/i)){
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
            $('form').html('<h1>Thank you for contacting me!</h1>');
        }).fail(function(xhr){
            $('body').append('Sorry, error occured'+ xhr.responseText);
        });
}});
})})();
