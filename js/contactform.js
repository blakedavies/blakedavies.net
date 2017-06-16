$('#gform').submit(function(e) {
	      e.preventDefault();
	      $.ajax({
	        url: "https://docs.google.com/a/blakedavies.net/forms/d/e/1FAIpQLScsM5tJwtkAtOS9DjvdjLJw_2V_H0oJvU82YsICuA_VYawu7g/formResponse",
	        data: $(this).serialize(),
	        type: "POST",
	        dataType: "xml",
	        success: function(data) {
	          console.log('Submission successful');
	        },
	        error: function(xhr, status, error) {
	          console.log('Submission failed: ' + error);
	        }
	      });
	    });
	    $('#gform').on('submit', function(e) {
	  		$('#gform *').fadeOut(0);
	  		$('#contact-box *').fadeOut(0);
	  		$('#gform').prepend(
	    		'<div class="thank-you-box"><h3 class="thank-you">Thank-you!!<h3><p class="thank-you">Your message has been submitted successfully and you will receive a reply within 48 hours.</p></div>'
	    	);
	  	});
