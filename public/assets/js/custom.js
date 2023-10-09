function menuShowHide(){
    $(".aside-fix").toggleClass("active");
}





  $(window).scroll(function() {    
    myScroll();
  }); //missing );

function myScroll(){
  // var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 80) {
        $("header").addClass("scrolling");
    } else {
        $("header").removeClass("scrolling");
    }
}

$(document).ready(function() {
  setTimeout(function(){
      $('.testimonial .slider').slick({
          dots: true,
          slidesToScroll: 1,
          // autoplay: true,
          // autoplaySpeed: 2000,
      });

    $(".hamburger").on("click",function(){
      var mythis = $(this);
      mythis.toggleClass('open');
      $(".menu").toggleClass("active");
    });
  },1000)
    
  
    
    var win_width = $(window).width();
    if(win_width<992){
      $(".menu ul li a").on("click",function(){
        $(".hamburger.open").click();
      })
    }
})