$(document).ready(function() {


        $(".openmenu").click(function(){
            $(".menu").fadeIn();
        })

        $(".closemenu").click(function(){
            $(".menu").fadeOut();
        })

       AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 0, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 9, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 10, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


	$('.number1').click(function() {
	$('.html, body').animate({scrollTop: $(".second_section").offset().top}, 900);
	});

	$('.number2').click(function() {
	$('.html, body').animate({scrollTop: $(".third_section").offset().top}, 900);
	});

	$('.number3').click(function() {
	$('.html, body').animate({scrollTop: $(".fourth_section").offset().top}, 900);
	});

	$('.number4').click(function() {
	$('.html, body').animate({scrollTop: $(".fifth_section").offset().top}, 900);
	});

	$('.number5').click(function() {
	$('.html, body').animate({scrollTop: $(".sixth_section").offset().top}, 900);
	});

	$('.number6').click(function() {
	$('.html, body').animate({scrollTop: $(".seventh_section").offset().top}, 900);
	});

	$('.number7').click(function() {
	$('.html, body').animate({scrollTop: $(".eighth_section").offset().top}, 900);
	});

	});

		

