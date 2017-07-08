$('#gform').submit(function(e) {
	      e.preventDefault();
	      $.ajax({
	        url: "https://docs.google.com/a/blakedavies.net/forms/d/e/1FAIpQLSc8GOOnB41kD7RnRh1ME7yYlB-dGX1ZU11vBK1YMoONujNuQw/formResponse",
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
	    		'<div class="thank-you-box"><h3 class="thank-you">Thank-you!!<h3><p class="thank-you">Your completed form has been submitted successfully.<br/><br/>You will be sent your pre-filled Application Form by email to sign.</p></div>'
	    	);
	  	});