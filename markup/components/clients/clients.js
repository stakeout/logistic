export const filterByType = () => {
    const elem = $('.filter__item');
    const carousel = $('.clients__list');
    const carouselItem = $('.clients__item');
    function addActiveClass() {
        for (let i = 0; i < elem.length; i++) {
            elem[i].classList.remove('active');
        }
        this.classList.add('active');
        let btnType = this.getAttribute('data-type');
        let filtered = false;
        if (btnType !== 'all') {
            carousel.slick('slickFilter', function (index) {
                return ($(this).attr('data-type') === btnType);
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
