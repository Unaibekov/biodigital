$( () => {

	// On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 150 ? $('.header').addClass('header-scroll') : $('.header').removeClass('header-scroll');
		windowTop > 150 ? $('.header-container').addClass('header-container-scroll') : $('.header-container').removeClass('header-container-scroll');
        windowTop > 150 ? $('#top-second').addClass('top-second-open') : $('#top-second').removeClass('top-second-open');
	});
	
	//Click Logo To Scroll To Top
	$('#hero, #top-second').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},100);
	});

    // Плавное появление меню при нажатии на гамбургер
    $('.menu-toggle').click(function() {
        $('.menu').addClass('open');
        $('.nav').addClass('open');
        $('body').css('overflow','hidden');
    });

    $('.close-button').click(function() {
        $('.menu').removeClass('open');
        $('.nav').removeClass('open');
        $('body').css('overflow','auto');
    });

    $('nav a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 500);
            $('nav a').removeClass('active');
            $(this).addClass('active');
            $('.menu').removeClass('open');
            $('.nav').removeClass('open');
            $('body').css('overflow','auto');
        }
    });

    $('.variable-width').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    });
    $(".slick-prev").click(function () {
        $(".slider").slick("slickPrev");
    });

    $(".slick-next").click(function () {
        $(".slider").slick("slickNext");
    });
    
});
