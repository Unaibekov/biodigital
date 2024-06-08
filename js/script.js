$( () => {

	// On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 150 ? $('.header-content').addClass('header-scroll') : $('.header-content').removeClass('header-scroll');
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
    $('.open-menu').click(function() {
        $('.overlay').fadeToggle(300); // Управление оверлеем
        $('.nav').addClass('nav-open');
        $('body').css('overflow','hidden');
    });

    $('.close-menu, .overlay').click(function() {
        $('.nav').removeClass('nav-open');
        $('body').css('overflow','auto');
        $('.overlay').fadeOut(300); // Управление оверлеем
    });

    $('nav a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 120
            }, 500);
            $('nav a').removeClass('active');
            $(this).addClass('active');
            $('.nav').removeClass('nav-open');
            $('.overlay').fadeOut(300); // Управление оверлеем
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
