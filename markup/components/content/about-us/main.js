export const ourTeamCarousel = () => {
    if (window.matchMedia('(max-width: 420px)').matches) {
        $('#our-team').slick({
            responsive: [
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: true
                    }
                }
            ]
        });
    }
};
