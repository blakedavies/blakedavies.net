var main = function() {

			var paused = false

			$('.arrowR').click(function() {
				paused = true;
			$('.slideshow > div:first')
				.fadeOut(0)
				.next()
				.fadeIn(0)
				.end()
				.appendTo('.slideshow');
			});
		
			$('.arrowL').click(function() {
				paused = true;
			$('.slideshow > div:last')
				.fadeIn(0)
				.prependTo('.slideshow')
				.next()
				.fadeOut(0)
				.end();
			});
	
			setInterval(function() {
				if (paused === false) { 
					$('.slideshow > div:first')
						.fadeOut(0)
						.next()
						.fadeIn(0)
						.end()
						.appendTo('.slideshow');
					};
				},  3000);
  	 	};

			$(document).ready(main);