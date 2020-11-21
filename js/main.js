"use strict";

$(window).on('load', function () {
    // load-gif
    $(pereloder).addClass("pereloder-delet");
    setTimeout(function() { 
         $(pereloder).addClass("d-none");
    }, 300);


    //responsive
    var $size = $(window).width();
    if($size  < 768){
        //first section responsive
        $(".big-img").addClass("d-none");
        $(".little-img").first().removeClass("d-none");

        //header-responsive
        $("#head-deskopt .socail-media").addClass("d-none");
        $("#head-deskopt .logo-text").addClass("d-none");
        
        //navbar responsive
        $(".menu-bars").removeClass("d-none");
        $(".menu").addClass("responsive-nav");
    }
    else{
        //first section responsive
        $(".big-img").removeClass("d-none");
        $(".little-img").first().addClass("d-none");
    }


    $( ".menu-bars" ).click(function() {
        $(".menu").toggleClass("d-none");
    });
});


