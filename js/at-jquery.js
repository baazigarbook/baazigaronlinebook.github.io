document.documentElement.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);

jQuery(document).ready(function($){

  $(window).load(function(){
 
    $(".counter_cst_ul_1").addClass("animate");
    setTimeout(function(){
        $(".counter_cst_ul_2").addClass("animate");
    }, 400);
    setTimeout(function(){
        $(".counter_cst_ul_3").addClass("animate");
    }, 800);
    setTimeout(function(){
        $(".counter_cst_ul_1").removeClass("animate");
    }, 4000);
    setTimeout(function(){
        $(".counter_cst_ul_2").removeClass("animate");
    }, 4000);
    setTimeout(function(){
        $(".counter_cst_ul_3").removeClass("animate");
    }, 4000);

    setInterval(function(){ 
    $(".counter_cst_ul_1").addClass("animate");
    setTimeout(function(){
        $(".counter_cst_ul_2").addClass("animate");
    }, 400);
    setTimeout(function(){
        $(".counter_cst_ul_3").addClass("animate");
    }, 800);
    setTimeout(function(){
        $(".counter_cst_ul_1").removeClass("animate");
    }, 4000);
    setTimeout(function(){
        $(".counter_cst_ul_2").removeClass("animate");
    }, 4000);
    setTimeout(function(){
        $(".counter_cst_ul_3").removeClass("animate");
    }, 4000);
    }, 4200);
   
   });

  var celeb = $('.celebslider');
  celeb.owlCarousel({
    nav: true,
    loop: false,
    responsive: {
      0: {
        margin: 40,
        center: true,
        items: 1.5
      },
      767: {
        margin: 20,
        center: false,
        items: 2
      },
      1024: {
        margin: 50,
        items: 3
      }
    }
  });

  $(".a_play").click(function(e){
     var id = $(this).attr('href');
     $(id).addClass("play");
     $(id).fadeIn();
     $('.play video')[0].play();
     e.preventDefault();
  });

  $(".clb_close").click(function(e){
     $(".clb_popup").fadeOut();
     $(".clb_popup").removeClass("play");
     $('video').each(function(){
          this.pause(); 
          this.currentTime = 0; 
        });
  });



  $(window).on('scroll', function() {
  $(".md_sites .md_sites_logo a").each(function(i) {
    if (isScrolledIntoView($(this))) {
       var $lg = $(this);
    setTimeout(function() {
      $lg.addClass('active');
    }, i*500);
    }
  });
  $(".md_wheels .md_wheels_inn .md_wheels_con, .md_cs .md_cs_inn .md_cs_lft, .md_htp .md_htp_inn .md_htp_rgt").each(function(i) {
    if (isScrolledIntoView($(this))) {
       var $blk = $(this);
    setTimeout(function() {
      $blk.addClass('active');
    });
    }
  });
  $(".md_htp .md_htp_inn .md_htp_lft .md_htp_blk").each(function(i) {
    if (isScrolledIntoView($(this))) {
       var $sport = $(this);
    setTimeout(function() {
      $sport.addClass('active');
    }, i*500);
    }
  });
  $(".md_insta .md_insta_dv .md_insta_pic").each(function(i) {
    if (isScrolledIntoView($(this))) {
       var $ins = $(this);
    setTimeout(function() {
      $ins.addClass('active');
    }, i*500);
    }
  });
  });


});


function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}