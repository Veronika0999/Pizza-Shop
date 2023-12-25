(function($){
    $(function(){
        /* Scroll to sections */
        $(".jq--scroll-our-pizza").click(function(){
           $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000);
        });
        
        $(".jq--scroll-about-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about-pizza").offset().top}, 1000);
         });
         
        $(".jq--scroll-references").click(function(){
            $("html, body").animate({scrollTop: $(".jq--references").offset().top}, 1000);
        });
        
        $(".jq--scroll-photo").click(function(){
            $("html, body").animate({scrollTop: $(".jq--photo").offset().top}, 1000);
        });

        $(".jq--scroll-contact").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top}, 1000);
        });


        /* Scroll buttons to sections */
        $(".jq--scroll-button-first").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000);
         });

         $(".jq--scroll-button-second").click(function(){
            $("html, body").animate({scrollTop: $(".jq--references").offset().top}, 1000);
        });

        /* Mobile navigation */
         $(".jq--nav-icon").click(function(){
           
            $(".nav-background").slideToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();  
         });

        /* Change hamburger to cross vice versa */
        $(".jq--image-hamburger").click(function(){
  
            if($(".jq--image-hamburger").attr("src") == "img/hamham.png")
            {
                $($(".jq--image-hamburger").attr("src","img/close.png"));
            } 
            else 
            {
                $($(".jq--image-hamburger").attr("src","img/hamham.png"));
            }  
        });
 

    }); 
 })(jQuery);


