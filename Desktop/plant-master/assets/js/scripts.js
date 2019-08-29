/*
    Small slider 1
*/
function small_slider_1(slider_container) {
	var img_index = 1;
	$('.' + slider_container + ' img').each(function(){
		$(this).addClass('slider-1-img-' + img_index);
		$('.' + slider_container + ' .slider-1-nav').append('<span class="slider-1-nav-item-' + img_index + '"></span>');
		if($(this).hasClass('slider-1-img-active')) {
			$('.' + slider_container + ' .slider-1-nav-item-' + img_index).addClass('slider-1-nav-item-active');
		}
		img_index++;
	});
	// change slide
	$(document).on('click', '.' + slider_container + ' .slider-1-nav span', function(){
		if(!($(this).hasClass('slider-1-nav-item-active'))) {
			$('.' + slider_container + ' .slider-1-nav span').removeClass('slider-1-nav-item-active');
			var clicked_nav_index = $(this).attr('class').replace('slider-1-nav-item-', '');
			$(this).addClass('slider-1-nav-item-active');
			$('.' + slider_container + ' img.slider-1-img-active').fadeOut(300, function(){
				$(this).removeClass('slider-1-img-active');
				$('.' + slider_container + ' img.slider-1-img-' + clicked_nav_index).fadeIn(400, function(){
					$(this).addClass('slider-1-img-active');
				});
			});
		}
	});
}


/*
	Scroll to (navigation)
*/
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}
/*
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content-game') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}
*/

jQuery(document).ready(function() {
    
    /*
        Wow
    */
    new WOW().init();
    
    /*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').height());
	});
	// show/hide menu
	$('.show-menu a').on('click', function(e) {
		e.preventDefault();
		$(this).fadeOut(100, function(){ $('nav').slideDown(); });
	});
	$('.hide-menu a').on('click', function(e) {
		e.preventDefault();
		$('nav').slideUp(function(){ $('.show-menu a').fadeIn(); });
	});

    
    /*
        Fullscreen backgrounds
    */
    $('.top-content').backstretch("assets/img/backgrounds/leaves.jpg");
    $('.what-we-do-container').backstretch("assets/img/backgrounds/lemon.jpg");
    $('.main').backstretch("assets/img/backgrounds/lemon.jpg");
    $('.infortotal').backstretch("assets/img/backgrounds/lemon.jpg");
    /*$('.top-content-game').backstretch("assets/img/backgrounds/1.jpg");*/
    $('.counters-container').backstretch("assets/img/backgrounds/2.jpg");
    $('.our-motto-container').backstretch("assets/img/backgrounds/2.jpg");
	
	/*
	    Testimonials
	*/
	$('.testimonial-active').html('<p>' + $('.testimonial-single:first p').html() + '</p>');
	$('.testimonial-single:first .testimonial-single-image img').css('opacity', '1');
	
	$('.testimonial-single-image img').on('click', function() {
		$('.testimonial-single-image img').css('opacity', '0.5');
		$(this).css('opacity', '1');
		var new_testimonial_text = $(this).parent('.testimonial-single-image').siblings('p').html();
		$('.testimonial-active p').fadeOut(300, function() {
			$(this).html(new_testimonial_text);
			$(this).fadeIn(400);
		});
	});
	
	/*
	    Small slider 1
	*/
	small_slider_1('slider-1-our-process');
	
	/*
	    Contact form
	*/
	$('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function() {
		$('.contact-form form input[type="text"], .contact-form form textarea').removeClass('contact-error');
	});
	$('.contact-form form').submit(function(e) {
		e.preventDefault();
	    $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('contact-error');
	    var postdata = $('.contact-form form').serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/contact.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.emailMessage != '') {
	                $('.contact-form form .contact-email').addClass('contact-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            			$(this).removeClass('animated shake');
            		});
	            }
	            if(json.subjectMessage != '') {
	                $('.contact-form form .contact-subject').addClass('contact-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            			$(this).removeClass('animated shake');
            		});
	            }
	            if(json.messageMessage != '') {
	                $('.contact-form form textarea').addClass('contact-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            			$(this).removeClass('animated shake');
            		});
	            }
	            if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
	                $('.contact-form form').fadeOut('fast', function() {
	                    $('.contact-form').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
	                });
	            }
	        }
	    });
	});
    
});
/*
function move() {
  var elem = document.getElementById("myBar"); 
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
*/
/*
pot_btn
*/
/*
function rotateMe() {
    $("#pot_btn").rotate(45);
}*/
/*
$(document).ready(function() {
  $( ".toggle" ).click( function() {
    console.log($("#pot_btn").css('transform'));
    if ($("#pot_btn").css('transform') == 'none') {
      $("#pot_btn").css({'transform': 'rotate(-180deg)'});
    } else {
      $("#pot_btn").css({'transform': ''}); 
    };
  });
});
*/
/*
var rotate_factor = 0;
function rotateMe(e) {
    
    rotate_factor += 1;
    var rotate_angle = (180 * rotate_factor) % 360;
    $(e).rotate({angle:rotate_angle});
}
*/

/*
$(document).ready(function(){
  $("#pot_btn").click(function(){
    $("#pot_btn").rotate(45);
  });
});
*/

/*
function myMove() {
  var elem = document.getElementById("pot_btn");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.right = pos + 'px'; 
    }
  }
}
*/
    



jQuery(window).load(function() {
	
	/*
		Loader
	*/
	$(".loader-img").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");
	
	/*
	    Portfolio
	*/
	$('.portfolio-masonry').masonry({
		columnWidth: '.portfolio-box', 
		itemSelector: '.portfolio-box',
		transitionDuration: '0.5s'
	});
	
	$('.portfolio-filters a').on('click', function(e){
		e.preventDefault();
		if(!$(this).hasClass('active')) {
	    	$('.portfolio-filters a').removeClass('active');
	    	var clicked_filter = $(this).attr('class').replace('filter-', '');
	    	$(this).addClass('active');
	    	if(clicked_filter != 'all') {
	    		$('.portfolio-box:not(.' + clicked_filter + ')').css('display', 'none');
	    		$('.portfolio-box:not(.' + clicked_filter + ')').removeClass('portfolio-box');
	    		$('.' + clicked_filter).addClass('portfolio-box');
	    		$('.' + clicked_filter).css('display', 'block');
	    		$('.portfolio-masonry').masonry();
	    	}
	    	else {
	    		$('.portfolio-masonry > div').addClass('portfolio-box');
	    		$('.portfolio-masonry > div').css('display', 'block');
	    		$('.portfolio-masonry').masonry();
	    	}
		}
	});
	
	$(window).on('resize', function(){ $('.portfolio-masonry').masonry(); });
	
	// image popup	
	$('.portfolio-box-text').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: 'The image could not be loaded.',
			titleSrc: function(item) {
				return item.el.find('p').text();
			}
		},
		callbacks: {
			elementParse: function(item) {
				item.src = item.el.parent('.portfolio-box-text-container').siblings('img').attr('src');
			}
		}
	});
	
});

var Avgrund = (function(){

	var container = document.documentElement,
		popup = document.querySelector( '.avgrund-popup-animate' ),
		cover = document.querySelector( '.avgrund-cover' ),
		currentState = null;

	container.classList.add( 'avgrund-ready' );

	// Deactivate on ESC
	function onDocumentKeyUp( event ) {

		if( event.keyCode === 27 ) {
			deactivate();
		}

	}

	// Deactivate on click outside
	function onDocumentClick( event ) {

		if( event.target === cover ) {
			deactivate();
		}

	}

	function activate( state ) {

		document.addEventListener( 'keyup', onDocumentKeyUp, false );
		document.addEventListener( 'click', onDocumentClick, false );
		document.addEventListener( 'touchstart', onDocumentClick, false );

		popup.classList.remove( currentState );
		popup.classList.add( 'no-transition' );
		if(state)
			popup.classList.add( state );

		setTimeout( function() {
			popup.classList.remove( 'no-transition' );
			container.classList.add( 'avgrund-active' );
		}, 0 );

		currentState = state;

	}

	function deactivate() {

		document.removeEventListener( 'keyup', onDocumentKeyUp, false );
		document.removeEventListener( 'click', onDocumentClick, false );
		document.removeEventListener( 'touchstart', onDocumentClick, false );

		container.classList.remove( 'avgrund-active' );
		popup.classList.remove( 'avgrund-popup-animate' );

	}

	function disableBlur() {

		document.documentElement.classList.add( 'no-blur' );

	}

	function show( selector ) {

		popup = document.querySelector( selector );
		popup.classList.add( 'avgrund-popup-animate' );
		activate();
		return this;

	}

	function hide() {

		deactivate();

	}

	return {

		activate: activate,
		deactivate: deactivate,
		disableBlur: disableBlur,
		show: show,
		hide: hide

	}

})();
    /*
popup
*/
/*
$(document).ready(function(){
    $('#register_btn').avgrund();
}
*/
