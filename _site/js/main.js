$(document).ready(function(){

  $("#slideshow").backstretch([
       "/images/hero-06.jpg"
      , "/images/hero-03.jpg"
      , "/images/hero-01.jpg"
      , "/images/hero-02.jpg"
      , "/images/hero-05.jpg"
      , "/images/hero-04.jpg"
      , "/images/hero-07.jpg"
    ], {duration: 3500, fade: 2000});


    $('.hamburger').on('click', function(){
      $('.hamburger-menu').slideToggle(200);
    });

    $('.dropdown1').on('click', function(){
      $('.drop1').slideToggle(200);
    });

    $('.dropdown2').on('click', function(){
      $('.drop2').slideToggle(200);
    });

});
