$(document).ready(function() {
  $('#services').css("visibility", "hidden");
  $('#newsletter-signup').css("visibility", "hidden");
  $(document).scroll(function() {
      if($('#services').inViewport('horizontal')) {
        $('#services').css("visibility", "visible");
        $('#services').addClass('animated bounceIn');
      }
      if($('#newsletter-signup').inViewport('vertical')) {
        $('#newsletter-signup').css("visibility", "visible");
        $('#newsletter-signup').addClass('animated bounceIn');
      }
    });
})
      if($('#header').inViewport()) {
        $('#header').addClass('animated bounceInLeft');
      } else {
        $('#header').addClass('animated bounceInLeft');
      }