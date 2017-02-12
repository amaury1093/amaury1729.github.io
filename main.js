// Clicking on links scrolls the page
$('a.scroll').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
});

// Change navbar text color on scroll
var targetOffset = $("#portfolio").offset().top - 90;
var $w = $(window).scroll(function(){
    if ($w.scrollTop() < targetOffset) {   
      $('nav a').css({"color":"#111"});
      $('#nav-top').css({"border-bottom": "2px solid #111"});
      $('#nav-portfolio').css({"border-bottom": "none"});
    } else {
      $('nav a').css({"color":"#fff"});
      $('#nav-top').css({"border-bottom": "none"});
      $('#nav-portfolio').css({"border-bottom": "2px solid #fff"});
    }
});