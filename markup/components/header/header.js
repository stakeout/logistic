export const stickyNav = () => {
    const $header = $('.page-header');
    const $logoImg = $('.logo img');
    const $links = $('.navigation__item');
    const $lang = $('.language span');
    const $promoBtn = $('#request-btn');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 75) {
            $($header).addClass('stick');
            $($logoImg).attr('src', '/static/img/general/logo_blue.svg');
            $($links).addClass('stick');
            $($lang).addClass('stick');
            $($promoBtn).addClass('stick');
        } else {
            $($logoImg).attr('src', '/static/img/general/logo_white.svg');
            $($header).removeClass('stick');
            $($links).removeClass('stick');
            $($lang).removeClass('stick');
            $($promoBtn).removeClass('stick');
        }
    });
};
