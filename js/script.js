$(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 290) {
      $('nav.main-nav').addClass('stickytop');
    }
    else {
      $('nav.main-nav').removeClass('stickytop');
    }
  });
});
