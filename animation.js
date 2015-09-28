$(document).ready(function() {
    
    /* **** Startanimation **** */
    $('h1').delay(300).animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, { duration: 1000 });
    $('h2').delay(500).animate({
         'opacity' : '0.9'
    }, { duration: 1000});
    $('ul').delay(1200).animate({
         'opacity' : '1'
    }, { duration: 1000});
   
});