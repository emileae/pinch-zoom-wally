$(document).ready(function(){//replaced with deviceready phonegap function

$('.page').on('backbutton',
     function(e){
         e.preventDefault();
});

// handling the covers

//more styles for img_container set in styles.css
/*
var $cover_img_container = $('.cover_img_container');
$cover_img_container.css('width', $(window).width());
$cover_img_container.css('height', $(window).height());
*/

    var myScroll = new iScroll('wrapper', {
        zoom: true,
        momentum: false,
        hScrollbar: false,
        vScrollbar: false,
        lockDirection: true
    });

});


