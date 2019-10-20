$('.main_case_study').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    }
});