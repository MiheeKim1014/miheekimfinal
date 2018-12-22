$(document).ready(function() {

		winw = $(document).width();

		winwt = winw / 3;

		winwm = winw / 2 - winwt / 2;

		winwr = 2 * winw / 3;

		$(".hbutton").mouseenter(function() {
    		$(".hm").css('z-index', '2');
    		$(".everlane").css('z-index', '1');
    		$(".hm").animate({width:winw, left:0}, 3000);
		});

		$(".hbutton").mouseleave(function() {
    		$(".hm").css('z-index', '2');
    		$(".everlane").css('z-index', '1');
    		$(".hm").animate({width:winwt, left:0}, 3000);
		});

		$(".ebutton").mouseenter(function() {
    		$(".everlane").css('z-index', '2');
    		$(".patagonia").css('z-index', '1');
    		$(".hm").css('z-index', '1');
    		$(".everlane").stop().animate({width:winw, left:0}, 2000);
		});

		$(".ebutton").mouseleave(function() {
    		$(".everlane").css('z-index', '2');
    		$(".patagonia").css('z-index', '1');
    		$(".hm").css('z-index', '1');
    		$(".everlane").animate({width:winwt, left:winwm}, 2000);
		});

		$(".pbutton").mouseenter(function() {
    		$(".patagonia").css('z-index', '2');
       		$(".everlane").css('z-index', '1');
    		$(".hm").css('z-index', '1');
    		$(".patagonia").animate({width:winw, left:0}, 2000);
		});

		$(".pbutton").mouseleave(function() {
    		$(".patagonia").css('z-index', '2');
          	$(".everlane").css('z-index', '1');
    		$(".hm").css('z-index', '1');
    		$(".patagonia").animate({width:winwt, left:winwr}, 2000);
		});

		

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







});

