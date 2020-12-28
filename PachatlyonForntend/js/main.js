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

    //Responsive menu show start
    $( ".menu-bars" ).click(function() {
        $(".menu").toggleClass("d-block");
    });
    //Responsive menu show end

    //post text zoommm start
    var num = 15;
    $( ".post-pilus-zoom" ).click(function() {
        if(num < 30){
            num = num+3;
            $(".post-minus-zoom").removeClass("passive-zoom");
            $('#az').css('font-size', num);
            if(num == 15    ){ $(".post-pilus-zoom").addClass("passive-zoom");}

        }
        else{
            $(this).addClass("passive-zoom");
        }
    });

    $( ".post-minus-zoom" ).click(function() {
        if(num > 15){
            num = num-3;
            $(".post-pilus-zoom").removeClass("passive-zoom");
            $('#az').css('font-size', num);

        }
        else{
            $(this).addClass("passive-zoom");
        }
        
    });
    //post text zoommm end


    //img slider start
    var slideIndex = 1;
    showSlides(slideIndex);
      
    $(".next-img").click(function() {
        event.preventDefault();
        showSlides(slideIndex += 1);
    });
    $(".prev-img").click(function() {
        event.preventDefault();
        showSlides(slideIndex -= 1);
        
    });
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }
    //img slider end

    //Share Social

    //Facebook
    $(".fbSahre").click(function() {
        event.preventDefault();
        var sURL = window.location.href;
        window.open("https://www.facebook.com/sharer.php?u="+sURL,"","height=368,width=600,left=100,top=100,menubar=0");
        return false;
    });

    //Twitter
    $(".fbSahre").click(function() {
        event.preventDefault();
        var sURL = window.location.href;
        window.open("https://twitter.com/share?url="+sURL+"&text="+currentTitle,"","height=260,width=500,left=100,top=100,menubar=0");
        return false;
    });
    
});


