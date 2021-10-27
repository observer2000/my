//document.addEventListener("DOMContentLoaded", function() {

	
	var owlB = $('.main_slider_block');//alert(owlB);//alert(owlB);

	owlB.owlCarousel({
		items : 1,
		loop: true,
		lazyLoadEager:1,
		//autoplay:true,
		//autoplayTimeout:4000,
		//autoplayHoverPause:true,
		//animateOut: 'fadeOut', ???
		nav: true,
		dots: true,
		dotsData: true,
		lazyLoad:true,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
	});

	owlB.on('loaded.owl.lazy', function(event) {
		var zn1 = $('.main_slider_block .owl-dots').css('content');
		//$('.main_slider_block .owl-dots').css({ 'display' : eval(zn1) });
		document.querySelector(".main_slider_block .owl-dots").style.display = eval(zn1);
	});
		
	//Carusell

	/*const owlObserver = new IntersectionObserver((entries, self) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				owllazyLoad(entry.target);
				self.unobserve(entry.target);
			}
		});
	});

	document.querySelectorAll('.owl-lazy1').forEach(owl => {
		owlObserver.observe(owl);
	});

	function owllazyLoad(lazyOwl) {
		/!* alert('owllazyLoad'); *!/
		lazyOwl.classList.remove("owl-lazy1");
		$('.main_cat_list').owlCarousel({
			loop: true,
			margin: 15,
			responsiveClass: true,
			nav: true,
			autoWidth:false,
			autoHeight:false,
			lazyLoad:true,
			responsive: {
				0: {
					items: 2,
					slideBy:2
				},
				600: {
					items: 3,
					slideBy:3
				},
				750: {
					items: 4,
					slideBy:4
				},
				950: {
					items: 5,
					slideBy:5
				},
				1150: {
					items: 6,
					slideBy:6
				}
			}
		});
		
		$('.main_cat_list .owl-dots').wrapAll('<div class="main_cat_wrp"></div>');
		$('<i class="fas fa-chevron-double-left carusel_left_btn"></i>').prependTo('.main_cat_wrp');
		$('<i class="fas fa-chevron-double-right carusel_right_btn"></i>').appendTo('.main_cat_wrp');
		$(document).on('click', '.carusel_left_btn', function (){
			$('.main_cat_list .owl-nav .owl-prev').click();
		});
		$(document).on('click', '.carusel_right_btn', function (){
			$('.main_cat_list .owl-nav .owl-next').click();
		});
		
	}*/

	

	
	
	// Images


	const imgObserver = new IntersectionObserver((entries, self) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				lazyLoad(entry.target);
				self.unobserve(entry.target);
			}
		});
	});

	document.querySelectorAll('.lazy-image').forEach(img => {
		imgObserver.observe(img);
	});


	function lazyLoad(lazyImage) {
		//alert('lazyLoad '  + lazyImage.src);
		const picture = lazyImage.parentElement;
		const source = picture.querySelector('.lazy-source');

		source.srcset = source.getAttribute('data-srcset');
		source.classList.remove("lazy-source");
		lazyImage.classList.remove("lazy-image");
	}


	//Actions News Hits

	const actObserver = new IntersectionObserver((entries, self) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				lazyLoadAct(entry.target);
				self.unobserve(entry.target);
			}
		});
	});

	document.querySelectorAll('.action_triger').forEach(div => {
		actObserver.observe(div);
	});

	function lazyLoadAct(div) {
		//console.log('Action');
		$('.best_position .block_defer_form input[type="submit"], .main_cat .block_defer_form input[type="submit"], .observe .block_defer_form input[type="submit"]').click();
	}


//});
