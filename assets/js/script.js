
// Preloader jquery
$(window).on('load', function(){
	$('.preloader').fadeOut()
})



	

// var mixer = mixitup('.portfolios');
// var mixer = mixitup('.portfolios', {
//     selectors: {
//         target: 'all'
//     },
//     animation: {
//         duration: 300
//     },
//     load: {
//     	filter:'all'
//     }
// });

$(document).ready(function(){

	// MixitUp jquery 
	var mixer = mixitup($('.portfolios'), {
		    load: {
		       filter: 'all',
		   },
	   });


	// Fixed Menu Show Hide jquery
	$(".menu-icon").click(function(){
		$(".menu-area").toggleClass("open-menu")
	});
	// $(window).scroll(function(){
	// 	if($(".menu-area").toggleClass("open-menu")){
	// 		$(".menu-area").removeClass("open-menu")
	// 	}
	// })





	// Counter Up jquery
	$('.counter').counterUp({
        delay: 10,
        time: 1000,
      });

	

	// Text Typing Animation jquery
	$('.selector7').animatedHeadline({
	    animationType: 'clip',
  		revealDuration: 1000,
  		revealAnimationDelay: 5000,
	  });



	// MixitUp jquery 
	// var mixer = mixitup($('#mixitupId'), {
	// 	    load: {
	// 	       filter: 'all',
	// 	   },
	//    });



	// Progressbar jquery
	$('.html').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#2F7DEF'
    });

    $('.css').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#2ecc71'
    });

    $('.scss').rProgressbar({
        percentage: 80,
        fillBackgroundColor: '#1abc9c'
    });

    $('.bootstrap').rProgressbar({
        percentage: 75,
        fillBackgroundColor: '#9b59b6'
    });

    $('.javascript').rProgressbar({
        percentage: 65,
        fillBackgroundColor: '#FF4A3B'
    });

    $('.jquery').rProgressbar({
        percentage: 75,
        fillBackgroundColor: '#FF6D36',
        // backgroundColor: '#e67e22'
    });

})

	



// Start WithOut Document Ready


// Client Review Script
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
	  1: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    }
});


// Bolg Pagination Script
var swiper = new Swiper(".second-swiper", {
		slidesPerView: 3,
    	spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
        breakpoints: {
		  1: {
	        slidesPerView: 1,
	      },
	      576: {
	        slidesPerView: 2,
	      },
	      768: {
	        slidesPerView: 3,
	      },
	    }
      });


// Animate Wow js
new WOW().init();




// Start Fixed Scroll Button jQuery
$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	if(scrollTop > 300){
		$('#scrollBtn').fadeIn();
	}else{
		$('#scrollBtn').fadeOut();
	}

})

$('#scrollBtn').click(function(){
	$('html , body').animate({
		scrollTop : 0
	},2000);
})
// End Fixed Scroll Button jQuery




