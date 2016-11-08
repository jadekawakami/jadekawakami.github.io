$(window).on("load", function(){

	$("#preloader").fadeOut("slow");

});

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 0)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);
    sr.reveal('.item-1', {
      duration: 400,
      scale: 0.3,
      distance: '0px'
    });
    sr.reveal('.item-2', {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    });
    sr.reveal('.item-3', {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    });
    sr.reveal('.item-4', {
      duration: 400,
      scale: 0.3,
      distance: '0px'
    });
    sr.reveal('.item-5', {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    });
    sr.reveal('.item-6', {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    });
    sr.reveal('.item-7', {
      duration: 400,
      scale: 0.3,
      distance: '0px'
    });
    sr.reveal('.item-8', {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    });
    sr.reveal('.item-9', {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    });

		$('.popup-gallery').each(function() {
			$(this).magnificPopup({
	        delegate: 'a',
	        type: 'image',
	        tLoading: 'Loading image #%curr%...',
	        mainClass: 'mfp-img-mobile',
	        gallery: {
	            enabled: true,
	            navigateByImgClick: true,
	            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
							tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
	        },
	        image: {
							titleSrc: function(item) {
								return item.el.attr('title');
							},
							cursor: 'pointer',
	            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
	        },
					zoom: {
						enabled: true,
						duration: 300, // don't foget to change the duration also in CSS
						opener: function(element) {
							return element.find('img');
						}
					}
			});
    });

    var menuTop = document.getElementById( 'cbp-spmenu-s3' );

    showTop.onclick = function() {
    	classie.toggle( this, 'active' );
    	classie.toggle( menuTop, 'cbp-spmenu-open' );
			$('#hamburgerMenu').toggleClass('is-active');
    };

	$(window).scroll(function(){
		if ($(this).scrollTop() > 1000) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	$('.mfp-img').bind('contextmenu', function(e) {
    return false;
	});

	// // disable right click
	// document.onmousedown=disableclick;
	// status="Right Click Disabled";
	// function disableclick(event)
	// {
	// 	if(event.button==2)
	// 	 {
	// 		//  alert(status);
	// 		 return false;
	// 	 }
	// }
})(jQuery); // End of use strict
