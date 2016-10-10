/*global navigator*/
/*global $*/
$(document).ready(function() {

// Create string to check for mobile device User Agent String
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// If we detect that string, we will add the fixed class to our .navbar-header with jQuery
if (isMobile.any()) {
   $('.navbar-default').addClass('navbar-fixed-top');
   $('.container').removeClass('container');
   $('#about').css('padding-top','50px');
}
});