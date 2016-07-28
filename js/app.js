$(document).foundation();

//Toggle hamburger menu
$('#toggle').click(function() {
	$('#submenu').toggleClass('submenu show');
});

$('nav ul li a').click(function(a) {
	$('#submenu').removeClass('show');
	$('#submenu').addClass('submenu');
});

$('.gm-style').click(function(b) {
	$('.gm-style').css({
		opacity: '0'
	});
});

//Scroll gently to page anchors
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});
});

//James Beard award bounces into viewport on scroll

//Cache reference to window and animation items
var $animation_elements = $('.animation-element');
var $window = $(window);
//Hook into the scroll, resize and orientation events
$window.on('scroll resize', check_if_in_view);
//trigger scroll event
$window.trigger('scroll');
//Scroll postion detection
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

//Dectect which direction user is scrolling
var iScrollPos = 0;

$(window).scroll(function () {
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
        $('nav img').css({
       	transform: 'scale(.5,.5)',
       	margin: '-30px 0 0 -30px',
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

    }

    iScrollPos = iCurScrollPos;
});

//Google Map API
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(45.520412,-122.680802),
    zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
