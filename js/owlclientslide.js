$('.client_logo_slider').owlCarousel({
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
        768: {
            items: 4,
        },
        1000: {
            items: 6,
        }
    }
});