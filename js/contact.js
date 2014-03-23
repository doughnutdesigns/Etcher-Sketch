$(document).ready(function(){
	
	$('#contact-form').submit(function(){
		var isFormSubmitting = 0;
		
		if (isFormSubmitting == 0) {
			
		
			function IsEmail(email) {
				var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				if(!regex.test(email)) {
			   		return false;
				}
				else {
			   		return true;
				}
			}
	      
			var name = $('#contact-name').val();
			var email = $('#contact-email').val();
			var message = $('#contact-message').val();
			
			
			if (name == '') {
				isFormSubmitting + 1;
				$('#contact-name').addClass("contact-form-error").delay(3000).queue(function(){
	    			$(this).removeClass("contact-form-error").dequeue();
				});
				$("#contact-button").addClass("contact-button-error").delay(3000).queue(function(){
	    			$(this).removeClass("contact-button-error").dequeue();
				});
				$('.contact-response').html('Please fix errors and try again').addClass("contact-error").delay(3000).queue(function(){
	    			$(this).removeClass("contact-error").dequeue();
				});
			}
			if (email == '') {
				isFormSubmitting + 1;
				$('#contact-email').addClass("contact-form-error").delay(3000).queue(function(){
	    			$(this).removeClass("contact-form-error").dequeue();
				});
				$("#contact-button").addClass("contact-button-error").delay(3000).queue(function(){
	    			$(this).removeClass("contact-button-error").dequeue();
				});
				$('.contact-response').html('Please fix errors and try again').addClass("contact-error").delay(3000).queue(function(){
	    			$(this).removeClass("contact-error").dequeue();
				});
			}
			if(IsEmail(email) == false) {
				isFormSubmitting + 1;
				$('#contact-email').addClass("contact-form-error").delay(3000).queue(function(){
	    			$(this).removeClass("contact-form-error").dequeue();
				});
				$("#contact-button").addClass("contact-button-error").delay(3000).queue(function(){
	    			$(this).removeClass("contact-button-error").dequeue();
				});
				$('.contact-response').html('Please fix errors and try again').addClass("contact-error").delay(3000).queue(function(){
	    			$(this).removeClass("contact-error").dequeue();
				});
			}
			if (message < 1) {
				isFormSubmitting + 1;
				$('#contact-message').addClass("contact-form-error").delay(3000).queue(function(){
	    			$(this).removeClass("contact-form-error").dequeue();
				});
				$("#contact-button").addClass("contact-button-error").delay(3000).queue(function(){
	    			$(this).removeClass("contact-button-error").dequeue();
				});
				$('.contact-response').html('Please fix errors and try again').addClass("contact-error").delay(3000).queue(function(){
	    			$(this).removeClass("contact-error").dequeue();
				});
			}
			
			isFormSubmitting == 0;
			return false;
		}
		else {		
			//prevent form from submitting
			return false;
		}
	});
});