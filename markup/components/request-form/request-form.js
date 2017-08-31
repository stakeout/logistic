export const showForm = () => {
    const btn = $('#request-btn');
    const overlay = $('.overlay');
    const form = $('.request-form');
    const close = $('.request-form__close-btn');
    const input = $('.request-form #name');
    btn.click(function (e) {
        e.preventDefault();
        form.toggleClass('hide');
        overlay.toggleClass('hide');
        input.focus();
        input.blur();
    });
    overlay.click(function () {
        $(this).toggleClass('hide');
        form.toggleClass('hide');
    });
    close.click(function () {
        form.toggleClass('hide');
        overlay.toggleClass('hide');
    });
    $(window).keydown(function (event) {
        if (event.keyCode === 27 && !form.hasClass('hide')) {
            form.addClass('hide');
            overlay.addClass('hide');
        }
    });
};
