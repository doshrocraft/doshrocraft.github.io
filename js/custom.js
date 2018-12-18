/*====================================================
                        SERVICES
====================================================*/
$(function () {

    // animate on scroll
    new WOW().init();
});



/*====================================================
                        TEAM
====================================================*/
$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 3
		  }
		}
    });
});


// Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});