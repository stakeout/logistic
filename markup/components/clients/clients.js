export const filterByType = () => {
    const elem = $('.filter__item');
    const carousel = $('.clients__list');
    function addActiveClass(e) {
        console.log(this);
        for (let i = 0; i < elem.length; i++) {
            elem[i].classList.remove('active');
        }
        this.classList.add('active');
        let filtered = false;
        if (filtered === false) {
            carousel.slick('slickFilter', ':even');
            filtered = true;
        } else {
            carousel.slick('slickUnfilter');
            filtered = false;
        }
    }
    if (elem) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener('click', addActiveClass);
        }
        console.log('true');
        // let elem = document.querySelectorAll('.filter__item');
    }
};
