export const stickyNav = () => {
    const $header = $('.page-header');
    const $logoImg = $('.logo img');
    const $links = $('.navigation__item');
    const $lang = $('.language span');
    const $promoBtn = $('#request-btn');
    $(window).scroll(function () {
        if (window.matchMedia('(min-width: 420px)').matches) {
            if ($(this).scrollTop() > 75) {
                $($header).addClass('stick');
                $($logoImg).attr('src', 'static/img/general/logo_blue.svg');
                $($links).addClass('stick');
                $($lang).addClass('stick');
                $($promoBtn).addClass('stick');
            } else {
                $($logoImg).attr('src', 'static/img/general/logo_white.svg');
                $($header).removeClass('stick');
                $($links).removeClass('stick');
                $($lang).removeClass('stick');
                $($promoBtn).removeClass('stick');
            }
        }
    });
    if (window.matchMedia('(max-width: 420px)').matches) {
        $($promoBtn).addClass('stick');
    } else {
        $($promoBtn).removeClass('stick');
    }
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
