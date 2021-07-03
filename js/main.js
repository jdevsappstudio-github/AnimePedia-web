 
  $(window).on("load",function(){

    // ----------Preloader--------
     $(".preloader").fadeOut("slow");
     
});
 
 
 $(document).ready(function(){

    // -----------Navbar Shrink----------------
    $(window).on("scroll",function(){
        if($(this).scrollTop()>90){
            $(".navbar").addClass("navbar-shrink");
           
        }else{
            $(".navbar").removeClass("navbar-shrink");
           
        }
    });


    // -------------------  Features carousel ----------------
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayHoverPause:true,
        autoplayTimeout:2000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
              
            },
            600:{
                items:2,
            
            },
            1000:{
                items:3,
             
            }
        }
    })

    // -------------------  ss carousel ----------------
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
              
            },
            600:{
                items:2,
            
            },
            1000:{
                items:4,
             
            }
        }
    })

// --------------scrollit-------------------
$.scrollIt({
    topOffset:-50
});


// ------------Navbar Collapse ---------
$(".nav-link").on("click",function(){

    $(".navbar-collapse").collapse("hide");
});


 });

 