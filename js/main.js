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
        $(".little-img-for-js").first().removeClass("d-none");

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
        $(".little-img-for-js").first().addClass("d-none");
    }

    //Responsive menu show
    $( ".menu-bars" ).click(function() {
        $(".menu").toggleClass("d-block");
    });


    var num = 15;
    $( ".post-pilus-zoom" ).click(function() {
        if(num < 45){
            num = num+3;
            $(".post-minus-zoom").removeClass("passive-zoom");
            console.log(num);
        }
        else{
            $(this).addClass("passive-zoom");
        }
    });

    $( ".post-minus-zoom" ).click(function() {
        if(num > 15){
            num = num-3;
            $(".post-pilus-zoom").removeClass("passive-zoom");
            console.log(num);
        }
        else{
            $(this).addClass("passive-zoom");
        }
        
    });


});


