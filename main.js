$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
           $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");
        }if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide up script 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })


   $('nav .hamburger').click(function (){
    $('nav .nav-bar ul').toggleClass("active");
     $('nav .hamburger i').toggleClass("active");
   })
});