$('#gform2').submit(function(d) {
	      d.preventDefault();
	      $.ajax({
	        url: "https://docs.google.com/forms/d/1eIr7nnUwdUKegIcJMEWf2RaUWmlrCp3LIvI6R3kswZo/formResponse",
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
	    $('#gform2').on('submit', function(d) {
	  		$('#gform2 *').fadeOut(0);
	  		$('#gform2').prepend(
	    		'<h3 class="thank-you">Thank-you!!<h3><p class="thank-you">You are now subscribed to Blake Davies.</p>'
	    	);
	  	});