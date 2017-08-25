export const reviewsCarousel = () => {
    if (window.matchMedia('(max-width: 414px)').matches) {
        $('#reviews').slick({
            responsive: [
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    }
};
export const reviewsMagnificPopup = () => {
    $('#reviews').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        }
    });
};
