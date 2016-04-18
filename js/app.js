$(document).ready(function() {  

    // Smooth scrolling navigation
    
    $('.to-top a, .logo a').click(function() {

        $('#top').animatescroll();

    });

    $('.cta-card a, .bio-card a, .main-nav li:last-child a').click(function() {

        $('#contact').animatescroll();

    }); 

    $('.main-nav li:first-child a').click(function() {

        $('#about').animatescroll();

    });

    $('.main-nav li:nth-child(2) a').click(function() {

        $('#projects').animatescroll();

    });
    
    // CTA Interaction
    
    $('.cta-card a').mouseover(function() {
        $('.hvr-float-alt').css('transform', 'translatex(8px)');
    });
    
        $('.cta-card a').mouseout(function() {
        $('.hvr-float-alt').css('transform', 'translatex(-8px)');
    });
   
});
  