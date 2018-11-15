$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#verev').fadeIn();
        } else {
            $('#verev').fadeOut();
        }
    });
    $('#verev').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 3000);
        return false;
    });
});

$( window ).scroll(function() {





});
function initMap() {
    var myLatLng ={lat: 40.19018119119121, lng: 44.52347854919765};
    var map = new google.maps.Map(document.getElementById('map'), {
            scrollwheel: true,
            center: myLatLng,
            zoom: 19
        });
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'IT TALENTS'
    })
}