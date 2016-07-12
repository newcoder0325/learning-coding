
// MOBILE MENU HOME
$(document).ready(function(){

    $('.icon-menu').click(function(){
    $('.mobile-menu').animate({right: '0px'}, 200);
    $('body').animate({right: '285px'}, 200);
    });
    
    $('.icon-close, #link').click(function(){
        $('.mobile-menu').animate({right: '-285px'}, 200);
        $('body').animate({right: '0px'}, 200);
        
    });


});

// STICKY NAV EFFECT 
var nav = $(window).height(); //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > nav) {
        $('.main-nav').addClass('fixed');
    } else {
        $('.main-nav').removeClass('fixed');

    }
});
