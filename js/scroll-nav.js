var homePlace = $("#home").offset().top - 70;
var servicesPlace = $("#features").offset().top - 70;
var subscribePlace = $("#subscribe").offset().top - 70;
var galleryPlace = $("#gallery").offset().top - 70;

$(document).scroll(function(){
	if($(this).scrollTop() > homePlace)
    {   
    	$('.active').removeClass('active');
    	$('#home-link').parent().addClass('active');
    }
    if($(this).scrollTop() > servicesPlace)
    {   
    	$('.active').removeClass('active');
    	$('#services-link').parent().addClass('active');
    }
    if($(this).scrollTop() > subscribePlace)
    {   
    	$('.active').removeClass('active');
    	$('#subscribe-link').parent().addClass('active');
    }
    if($(this).scrollTop() > galleryPlace)
    {   
    	$('.active').removeClass('active');
    	$('#gallery-link').parent().addClass('active');
    }
});


$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('.active').removeClass('active');
	     		$('html,body').animate({ scrollTop: target.offset().top - 69 }, 1000);
	  			$(this).parent().addClass('active');
	  			return false;
			}
		}
	});
});