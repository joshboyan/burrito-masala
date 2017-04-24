
$(document).ready(function() {
    $('.menu').css({
        display: 'none'
    });
    $('.builder-menu').css({
        display: 'block'
    });
});
var userHasScrolled = false;
$(window).scroll(function() {
	userHasScrolled = true;
	if(userHasScrolled) {
	//Track if user scrolls in Google Analytics
    ga('send', 'event', 'scroll', 'burrito-masala', 'Scrolls on Page');	
	}
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
    //Track if user scrolls to bottom of page in Google Analytics
    ga('send', 'event', 'scroll', 'burrito-masala', 'Scrolls to the Bottom');
   }
});


