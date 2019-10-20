$('.owl_counter').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    animateOut: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
        },
        425: {
            items: 3,
        },
        767: {
            items: 4,
        },
    }
});