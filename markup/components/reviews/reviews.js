export const reviewsCarousel = () => {
    if (window.matchMedia('(max-width: 420px)').matches) {
        $('#reviews').slick({
          dots: true,
          arrows: false,
            responsive: [
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
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
