//Google Map API
function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(45.520412, -122.680802),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var image = 'assets/img/letter-marker.png';
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
