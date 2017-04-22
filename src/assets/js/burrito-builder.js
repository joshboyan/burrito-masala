//.burrito builder variables
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
var hours = currentTime.getHours();
var mins = currentTime.getMinutes();

//Animate .builder-menu

//Alternate the heading colors when user slects burrtio or bowl
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

// When user selects protein button
$('#protein tr td button').click(function() {

    //Transtion to rice menu
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

    //Store data about protein selection
    proteinName = $(this).data('name');
    proteinPrice = $(this).data('price');
    proteinSource = $(this).data('source');
    proteinPath = $(this).data('path');

    //Add protein image to DOM
    var img = $('<img>');
    img.attr('src', proteinSource).attr('data-rjs', '2');
    img.appendTo('#proteinImage');
});

//When user selects back on rice menu
$('#back2Protein').click(function() {

    //Transition back to protein selection menu
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
    // Clear protein slection information
    proteinName = "";
    proteinPrice = "";
    proteinSource = "";
    proteinPath = "";

    //Remove protein image form DOM
    $('#proteinImage img').remove();
});

//When user selects rice button
$('.toToppings').click(function() {

    //Transtion to toppings menu
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

    //Store data about rice selection
    riceName = $(this).data('name');
    ricePrice = $(this).data('price');
    riceSource = $(this).data('source');
    ricePath = $(this).data('path');

    //Add rice image to DOM
    var img = $('<img>');
    img.attr('src', riceSource).attr('data-rjs', '2');
    img.appendTo('#riceImage')
});

//User back button on toppings selection menu
$('#back2Rice').click(function() {

    //Transition back to rice slection menu
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

    //Remove highlight from slected topping buttons
    $('#toppings tr td button').removeClass('selected');

    //Clear data about rice selection
    riceName = "";
    ricePrice = "";
    riceSource = "";
    ricePath = "";

    //Remove rice image from DOM
    $('#riceImage img').remove();
});

//When user clicks a topping button
$('#toppings tr td button').click(function() {

    //Toggle hightlight on topping buttons user clicks on
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

//When user clicks finished
$('#finish').click(function() {

    //Transition to order message and
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
    $('.order-message button').css({

    });
    // Push all of the selected condiments prices to the elements array.
    var elements = [0];
    $('.selected').each(function() {
        var name = $(this).data('price');
        elements.push(name);
    });

    //Add together all the condiment prices
    for (let i = 0; i < elements.length - 1; i++) {
        toppingPrice += elements[i];
    }

    //Get total price of the burrito
    totalPrice = parseFloat(proteinPrice) + parseFloat(ricePrice) + parseFloat(toppingPrice);

    //Determine which order message to show based on current time
    mins = 60 - mins;
    if (11 < hours && hours < 19) {
        hours = 19 - hours;

        $("#orderMessage").text("You only have " + hours + " hours and " + mins + " minutes left to order your " + proteinName + " and " + riceName + " " + mealType + " for $" + totalPrice + ".");
    } else {
        if (hours >= 19) {
            hours = (24 - hours) + 11;

            $("#orderMessage").text("You only have " + hours + " hours and " + mins + " minutes until you can order your " + proteinName + " and " + riceName + " " + mealType + " for $" + totalPrice + ".");
        } else {
            hours = 11 - hours;

            $("#orderMessage").text("You only have " + hours + " hours and " + mins + " minutes until you can order your " + proteinName + " and " + riceName + " " + mealType + " for $" + totalPrice + ".");

        }
    }
});