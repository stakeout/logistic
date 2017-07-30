export const carousel = $('.clients__list');
export const filterByType = () => {
    const elem = $('.filter__item');
    function addActiveClass() {
        let btnType = this.getAttribute('data-type');
        for (let i = 0; i < elem.length; i++) {
            elem[i].classList.remove('active');
        }
        this.classList.add('active');
        if (btnType !== 'all') {
            carousel.slick('slickUnfilter');
            carousel.slick('slickFilter', function () {
                return $(this).attr('data-type') === btnType;
            });

        } else {
            carousel.slick('slickUnfilter');
        }
    }
    if (elem) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener('click', addActiveClass);
        }
    }
};
export const slickCarouselSettins = () => {
    carousel.slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
};
