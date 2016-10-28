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
    // sr.reveal('.item-3', {
    //   duration: 400,
    //   scale: 0.3,
    //   distance: '0px'
    // });
    // sr.reveal('.item-4', {
    //   duration: 600,
    //   scale: 0.3,
    //   distance: '0px'
    // });
    // sr.reveal('.item-5', {
    //   duration: 600,
    //   scale: 0.3,
    //   distance: '0px'
    // });
    // sr.reveal('.item-6', {
    //   duration: 600,
    //   scale: 0.3,
    //   distance: '0px'
    // });

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });



})(jQuery); // End of use strict

$(document).ready(function() {
  console.log('entou no grid');
  // var animate = new AnimOnScroll( document.getElementById( 'grid' ), {
	// 	minDuration : 0.4,
	// 	maxDuration : 0.7,
	// 	viewportFactor : 0.2
	// } );
  // animate();

  $('.grid').masonry({

    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    isAnimated: true,
    percentPosition: true,
    // use element for option
    // columnWidth: '.grid-sizer',
    // transitionDuration: '0'
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });

  // $('.grid').append($boxes).masonry('append', $boxes, true);


})
