//Toggle hamburger menu
$('#toggle').click(function() {
    $('#submenu').toggleClass('submenu show');
    $('nav ul li a').click(function(a) {
        $('#submenu').removeClass('show');
        $('#submenu').addClass('submenu');
    });
});

$('.gm-style').click(function(c) {
    $('.gm-style').css({
        opacity: '0'
    });
});

//Scroll gently to page anchors
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });
});


//Dectect which direction user is scrolling
var iScrollPos = 0;

$(window).scroll(function() {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {

        //Scrolling Down
        $('nav').css({
            position: 'relative',
            transition: 'all .2s ease-in-out 0s'
        });
        $('header img').css({
            margin: '-25px 0 0 0'
        });
        $('header a img').css({
            margin: '0 0 0 0'
        });
        $('nav img').css({
            transform: 'scale(.5,.5)',
            margin: '-40px 0 0 -20px',
            transition: 'all .2s ease-in-out 0s'
        });
        $('#persistantArrow').css({
            display: 'none',
            transition: 'all .2s ease-in-out 0s'
        });

    } else {

        //Scrolling Up
        $('nav').css({
            position: 'fixed',
            transition: 'all .2s ease-in-out 0s'
        });
        $('header img').css({
            margin: '0'
        });
        $('nav img').css({

            margin: '-40px 0 0 -20px',
            transition: 'all .2s ease-in-out 0s'
        });
        $('#persistantArrow').css({
            display: 'block',
            transition: 'all .2s ease-in-out 0s'
        });
    }

    iScrollPos = iCurScrollPos;
});