$(document).foundation();

$(document).ready(function() {
    $('#elephant-marker').addClass('wiggle');
    $('.menu').css({
      display: 'none'
    });
    $('.builder-menu').css({
      display: 'block'
    });
});
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

var mealType = "Burrito";
var proteinName;
var proteinPrice = 0;
var proteinSource;
var proteinPath;
var riceName;
var ricePrice = 0;
var riceSource;
var ricePath;
var toppingPrice = 0;
var totalPrice
var currentTime = new Date();
    hours = currentTime.getHours();
    mins  = currentTime.getMinutes();
//Animate .builder-menu
$('#builderBurrito').click(function() {
  $('#builderBurrito a').css({
    color: '$color2'
  });
  $('#builderBowl a').css({
    color: '$color5'
  });
});
$('#builderBowl').click(function() {
  $('#builderBowl a').css({
    color: '$color2'
  });
  $('#builderBurrito a').css({
    color: '$color5'
  });
});
$('#protein tr td button').click(function() {
    $('#protein').addClass('slideLeft');
    $('#rice').addClass('scaleUp');
    $('#tortillaImage').addClass('slideLeft');
    $('#proteinImage').addClass('slideIn');
    $('nav').css({
        position: 'relative',
        transition: 'all .2s ease-in-out 0s'
    });
    $('header img').css({
        margin: '-25px 0 0 0'
    });
    $('nav img').css({
        transform: 'scale(.5,.5)',
        margin: '-30px 0 0 -20px',
        transition: 'all .2s ease-in-out 0s'
    });
    $('#persistantArrow').css({
            display: 'none',
            transition: 'all .2s ease-in-out 0s'
        });
    proteinName = $(this).data('name');
    proteinPrice = $(this).data('price');
    proteinSource = $(this).data('source');
    proteinPath = $(this).data('path');
    var img = $('<img>');
    img.attr('src', proteinSource).attr('data-rjs', '2');
    img.appendTo('#proteinImage');
    });

$('#back2Protein').click(function() {
    $('#protein').removeClass('slideLeft');
    $('#rice').removeClass('scaleUp');
    $('#tortillaImage').removeClass('slideLeft');
    $('#proteinImage').removeClass('slideIn');
    $('nav').css({
        position: 'relative',
        transition: 'all .2s ease-in-out 0s'
    });
    $('header img').css({
        margin: '-25px 0 0 0'
    });
    $('nav img').css({
        transform: 'scale(.5,.5)',
        margin: '-30px 0 0 -20px',
        transition: 'all .2s ease-in-out 0s'
    });
    proteinName = "";
    proteinPrice = "";
    proteinSource = "";
    proteinPath = "";
    $('#proteinImage img').remove();
});

$('.toToppings').click(function() {
    $('#rice').addClass('slideLeft');
    $('#toppings').addClass('scaleUp');
    $('#proteinImage').removeClass('slideIn')
    $('#proteinImage').addClass('slideLeft');
    $('#riceImage').addClass('slideIn');

    $('nav').css({
        position: 'relative',
        transition: 'all .2s ease-in-out 0s'
    });
    $('header img').css({
        margin: '-25px 0 0 0'
    });
    $('nav img').css({
        transform: 'scale(.5,.5)',
        margin: '-30px 0 0 -20px',
        transition: 'all .2s ease-in-out 0s'
    });

    $('#back2Rice').removeClass('selected');

    riceName = $(this).data('name');
    ricePrice = $(this).data('price');
    riceSource = $(this).data('source');
    ricePath = $(this).data('path');
    var img = $('<img>');
    img.attr('src', riceSource).attr('data-rjs', '2');
    img.appendTo('#riceImage')
});
$('#back2Rice').click(function() {
    $('#rice').removeClass('slideLeft');
    $('#toppings').removeClass('scaleUp');
    $('#proteinImage').addClass('slideIn')
    $('#proteinImage').removeClass('slideLeft');
    $('#riceImage').removeClass('slideIn');
    $('nav').css({
        position: 'relative',
        transition: 'all .2s ease-in-out 0s'
    });
    $('header img').css({
        margin: '-25px 0 0 0'
    });
    $('nav img').css({
        transform: 'scale(.5,.5)',
        margin: '-30px 0 0 -20px',
        transition: 'all .2s ease-in-out 0s'
    });
    $('#toppings tr td button').removeClass('selected');
    riceName = "";
    ricePrice = "";
    riceSource = "";
    ricePath = "";
    $('#riceImage img').remove();
});

$('#toppings tr td button').click(function() {
    $(this).toggleClass('selected');
    $('nav').css({
        position: 'relative',
        transition: 'all .2s ease-in-out 0s'
    });
    $('header img').css({
        margin: '-25px 0 0 0'
    });
    $('nav img').css({
        transform: 'scale(.5,.5)',
        margin: '-30px 0 0 -20px',
        transition: 'all .2s ease-in-out 0s'
    });

});

$('#finish').click(function() {
    $('#toppings').addClass('slideLeft');
    $('#order-message').addClass('scaleUp');
    $('#riceImage').removeClass('slideIn');
    $('#riceImage').addClass('slideLeft');
    $('#burritoImage').addClass('slideIn');
    $('nav').css({
        position: 'relative',
        transition: 'all .2s ease-in-out 0s'
    });
    $('header img').css({
        margin: '-25px 0 0 0'
    });
    $('nav img').css({
        transform: 'scale(.5,.5)',
        margin: '-30px 0 0 -20px',
        transition: 'all .2s ease-in-out 0s'
    });
    $('#persistantArrow').css({
            display: 'none',
            transition: 'all .2s ease-in-out 0s'
        });
    var elements = [0];
    $('.selected').each(function() {
      var name = $(this).data('price');
      elements.push(name);
    });

    
    for (i=0; i < elements.length-1; i++) {
      toppingPrice += elements[i];
    }
  
    totalPrice = parseFloat(proteinPrice) + parseFloat(ricePrice) + parseFloat(toppingPrice);
    mins = 60 - mins;
    if (11  < hours && hours < 19) {
      hours = 19 - hours;
      
      $("#orderMessage").text("You only have " + hours + " hours and " + mins + " minutes left to order your " + proteinName + " and " + riceName + " " + mealType + " for $" + totalPrice + ".");
    } else {
      if (hours >= 19) {
      hours = (24 - hours) + 11;
      
      $("#orderMessage").text("You only have " + hours + " hours and " + mins + " until you can order your " + proteinName + " and " + riceName + " " + mealType + " for $" + totalPrice + ".");
      } else {
        hours = 11 - hours;
        
        $("#orderMessage").text("You only have " + hours + " hours and " + mins + " until you can order your " + proteinName + " and " + riceName + " " + mealType + " for $" + totalPrice + ".");
      
      }
    }
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



/* //Detect if user is on mobile device
$(window).resize(function(){
    if ($(window).width() <= 700){  */


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
            margin: '-30px 0 0 -20px',
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
            transform: 'scale(1,1)',
            margin: '0',
            transition: 'all .2s ease-in-out 0s'
        });
        $('#persistantArrow').css({
            display: 'block',
            transition: 'all .2s ease-in-out 0s'
        });
    }

    iScrollPos = iCurScrollPos;
});

/*}   
}); */



//Google Map API
function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(45.520412, -122.680802),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var image = '/student/CAS242_juan.maldonado4_34449/joshuaboyan95/week06/img/elephant-map-marker.png';
    var elephantmarker = new google.maps.Marker({
        position: { lat: 45.520412, lng: -122.680802 },
        map: map,
        icon: image
    });

}
google.maps.event.addDomListener(window, 'load', initialize);

//Google Map overlay
$("#click2hide").click(function() {
    $(".map-overlay").hide();
});
