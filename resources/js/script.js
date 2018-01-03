$(document).ready(function () {
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-drag')) {
            icon.addClass('ion-close');
            icon.removeClass('ion-drag');
        } else {
            icon.addClass('ion-drag');
            icon.removeClass('ion-close');
        }        
    });
    
});

