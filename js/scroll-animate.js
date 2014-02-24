$(document).ready(function() {
  $('#services').css("visibility", "hidden");
  $('#newsletter-signup').css("visibility", "hidden");
  $('.portfolio').css("visibility", "hidden");
  $('#monkey').css("visibility", "hidden");
  $('#featured').css("visibility", "hidden");
  $(document).scroll(function() {
      if($('#services').inViewport('vertical')) {
        $('#services').css("visibility", "visible");
        $('#services').addClass('animated bounceIn');
      }
      if($('#newsletter-signup').inViewport('vertical')) {
        $('#newsletter-signup').css("visibility", "visible");
        $('#newsletter-signup').addClass('animated bounceIn');
      }
      if($('.portfolio').inViewport('vertical')) {
        $('.portfolio').css("visibility", "visible");
        $('.portfolio').addClass('animated fadeIn');
      }
      if($('#monkey').inViewport('vertical')) {
        $('#monkey').css("visibility", "visible");
        $('#monkey').addClass('animated bounceInLeft');
      }
      if($('#featured').inViewport('vertical')) {
        $('#featured').css("visibility", "visible");
        $('#featured').addClass('animated fadeIn');
      }
    });
})
      if($('#header').inViewport()) {
        $('#header').addClass('animated bounceInLeft');
      } else {
        $('#header').addClass('animated bounceInLeft');
      }