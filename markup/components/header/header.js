export const stickyNav = () => {
    const $header = $('.page-header');
    const $logoImg = $('.logo img');
    const $links = $('.navigation__item');
    const $lang = $('.language span');
    const $promoBtn = $('#request-btn');
    const $navToggle = $('.burger');
    if (window.matchMedia('(max-width: 414px)').matches) {
        $($promoBtn).addClass('stick');
    } else {
        $($promoBtn).removeClass('stick');
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 75) {
            $($header).addClass('stick');
            $($logoImg).attr('src', 'static/img/general/logo_blue.svg');
            $($logoImg).attr('width', '40');
            $($logoImg).attr('height', '40');
            $($links).addClass('stick');
            $($lang).addClass('stick');
            $($navToggle).addClass('stick');
        } else {
            $($logoImg).attr('src', 'static/img/general/logo_white.svg');
            $($logoImg).attr('width', '50');
            $($logoImg).attr('height', '50');
            $($header).removeClass('stick');
            $($links).removeClass('stick');
            $($lang).removeClass('stick');
            $($navToggle).removeClass('stick');
        }
    });
};
export const mobileNav = () => {
    const navBtn = document.querySelector('#nav-toggle');
    const navigation = document.querySelector('.navigation');
    navBtn.addEventListener('click', function () {
        this.classList.toggle('open');
        if (this.classList.contains('open')) {
            navigation.classList.add('open');
        } else {
            navigation.classList.remove('open');
        }
    });
};
