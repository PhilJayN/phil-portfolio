var $heroAboutMe = $('.hero-about-me');
console.log($heroAboutMe);
var scrollState = "top";

$(window).scroll(function() {
  var scrollPos = $(window).scrollTop();

  //this makes sure animation only run ONCE!
  if ( (scrollPos !==0) && (scrollState === 'top') ) {
    console.log('runnin!');
    $heroAboutMe.animate(
      {

      }
    );

    $heroAboutMe.slideDown(2000);
    //make sure to track scroll state
    scrollState = 'scrolled';
  }
  // console.log(scrollPos);
  // console.log('scrolled');

});